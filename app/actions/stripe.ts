"use server";

import { stripe } from "@/lib/stripe";
import { products } from "@/lib/products";

interface CartItem {
  productId: string;
  size: string;
  quantity: number;
}

export async function startCheckoutSession(cartItems: CartItem[]) {
  const lineItems = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) {
      throw new Error(`Product with id "${item.productId}" not found`);
    }

    return {
      price_data: {
        currency: "cop",
        product_data: {
          name: `${product.name} - Talla ${item.size}`,
          description: product.category,
        },
        unit_amount: product.priceInCents,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout`,
  });

  return session.url;
}
