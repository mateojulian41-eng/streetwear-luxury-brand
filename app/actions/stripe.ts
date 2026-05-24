"use server";

import { products } from "@/lib/products";
import crypto from "crypto";

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

  // ePayco configuration
  const p_cust_id_cliente =
    process.env.EPAYCO_PUBLIC_KEY || "cd341756974af43278d1788002cb5aa2";
  const p_key =
    process.env.EPAYCO_PRIVATE_KEY || "ba8292749e5a0b07ac22d164e7856522";
  const amount = totalAmountInCents / 100; // Convert to pesos
  const currency_code = "COP";

  // Generate signature according to ePayco documentation
  // signature = MD5(p_cust_id_cliente + '^' + p_key + '^' + p_id_invoice + '^' + p_amount + '^' + p_currency_code)
  const signatureString = `${p_cust_id_cliente}^${p_key}^${reference}^${amount}^${currency_code}`;
  const p_signature = crypto
    .createHash("md5")
    .update(signatureString)
    .digest("hex");

  // Return URL parameters for ePayco standard checkout
  const returnUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout/success?reference=${reference}`;

  const formData = {
    p_cust_id_cliente: p_cust_id_cliente,
    p_key: p_key,
    p_id_invoice: reference,
    p_description: "Compra NOIR - Streetwear Luxury Brand",
    p_currency_code: currency_code,
    p_amount: amount,
    p_tax: 0,
    p_amount_base: amount,
    p_test_request: "TRUE",
    p_url_response: returnUrl,
    p_url_confirmation: "",
    p_signature: p_signature,
    p_billing_document: "12345678",
    p_billing_name: customerName.split(" ")[0] || "Cliente",
    p_billing_lastname: customerName.split(" ").slice(1).join(" ") || "Prueba",
    p_billing_address: "Calle 10 # 104-50",
    p_billing_country: "CO",
    p_billing_email: customerEmail,
    p_billing_phone: "0000000",
    p_billing_cellphone: "0000000000",
  };

  console.log("ePayco form data:", formData);
  console.log("Signature string:", signatureString);
  console.log("Signature:", p_signature);

  return formData;
}
