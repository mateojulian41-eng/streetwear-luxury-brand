"use client";

import { useCartStore } from "@/lib/cart-store";
import { startCheckoutSession } from "../app/actions/stripe";

export default function Checkout() {
  const { items } = useCartStore();

  const handleCheckout = async () => {
    const cartItems = items.map((item) => ({
      productId: item.product.id,
      size: item.size,
      quantity: item.quantity,
    }));

    const checkoutUrl = await startCheckoutSession(cartItems);
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full h-14 text-[11px] tracking-[0.3em] bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
    >
      PROCEDER AL PAGO
    </button>
  );
}
