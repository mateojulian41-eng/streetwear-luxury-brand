"use server";

import { createWompiTransaction } from "@/lib/wompi";
import { products } from "@/lib/products";

interface CartItem {
  productId: string;
  size: string;
  quantity: number;
}

export async function startCheckoutSession(
  cartItems: CartItem[],
  customerEmail: string,
  customerName: string,
) {
  // Calculate total amount in cents
  const totalAmountInCents = cartItems.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) {
      throw new Error(`Product with id "${item.productId}" not found`);
    }
    return total + product.priceInCents * item.quantity;
  }, 0);

  // Generate unique reference
  const reference = `NOIR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Create Wompi transaction
  const returnUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout/success?reference=${reference}`;

  const transaction = await createWompiTransaction(
    totalAmountInCents,
    "COP",
    reference,
    customerEmail,
    customerName,
    returnUrl,
  );

  return transaction.checkout_url;
}
