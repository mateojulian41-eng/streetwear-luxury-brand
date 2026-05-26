"use server";

import { isWompiConfigured, buildWompiCheckoutUrl, generatePaymentReference, verifyTransaction } from "@/lib/wompi";
import { products } from "@/lib/products";
import { prisma } from "@/lib/prisma";

interface CartItem {
  productId: string;
  size: string;
  quantity: number;
}

function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export async function createCheckoutUrl(
  cartItems: CartItem[],
  customerEmail?: string,
  customerFullName?: string,
): Promise<string> {
  if (!isWompiConfigured()) {
    throw new Error("Wompi no está configurado");
  }

  if (!cartItems.length) {
    throw new Error("El carrito está vacío");
  }

  let subtotal = 0;

  for (const item of cartItems) {
    const product = products.find((p) => p.id === item.productId);
    if (!product) {
      throw new Error(`Producto no encontrado: ${item.productId}`);
    }
    if (!product.inStock) {
      throw new Error(`${product.name} no está disponible`);
    }

    subtotal += product.price * item.quantity;
  }

  // Convertir COP a centavos para Wompi
  const amountInCents = Math.round(subtotal * 100);

  // Generar referencia única
  const reference = generatePaymentReference();

  // Guardar orden en base de datos
  try {
    await prisma.order.create({
      data: {
        reference,
        amountInCents,
        currency: "COP",
        status: "PENDING",
        customerEmail,
        customerName: customerFullName,
        items: JSON.stringify(cartItems),
      },
    });
  } catch (error) {
    console.error("Error guardando orden en DB:", error);
    // Continuar aunque falle guardar en DB
  }

  // Construir URL de checkout de Wompi
  const checkoutUrl = buildWompiCheckoutUrl({
    amountInCents,
    reference,
    customerEmail,
    customerFullName,
    redirectUrl: `${getSiteUrl()}/checkout/success?reference=${reference}`,
  });

  console.log("Checkout URL generada:", checkoutUrl);

  return checkoutUrl;
}

export async function verifyCheckoutSession(
  reference: string,
  cartItems?: CartItem[],
) {
  if (!isWompiConfigured()) {
    return { ok: false as const, error: "Wompi no configurado" };
  }

  if (!reference) {
    return { ok: false as const, error: "Referencia inválida" };
  }

  try {
    const transaction = await verifyTransaction(reference);

    // Verificar que el pago fue aprobado
    if (transaction.status !== "APPROVED") {
      // Actualizar estado de la orden en DB
      try {
        await prisma.order.update({
          where: { reference },
          data: { status: transaction.status },
        });
      } catch (error) {
        console.error("Error actualizando orden en DB:", error);
      }

      return {
        ok: false as const,
        error: `El pago no fue aprobado. Estado: ${transaction.status}`,
      };
    }

    // Actualizar estado de la orden en DB
    try {
      await prisma.order.update({
        where: { reference },
        data: { status: "APPROVED" },
      });
    } catch (error) {
      console.error("Error actualizando orden en DB:", error);
    }

    return {
      ok: true as const,
      orderId: reference,
      email: transaction.email,
      amountTotal: transaction.amountInCents,
    };
  } catch (error) {
    console.error("Error en verifyCheckoutSession:", error);
    return {
      ok: false as const,
      error: error instanceof Error ? error.message : "Error verificando transacción",
    };
  }
}
