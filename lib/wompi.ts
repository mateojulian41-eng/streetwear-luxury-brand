import "server-only";

import crypto from "crypto";

function getWompiPublicKey(): string {
  const key = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
  if (!key) {
    throw new Error(
      "NEXT_PUBLIC_WOMPI_PUBLIC_KEY no está configurada. Añádela en .env.local",
    );
  }
  return key;
}

function getWompiPrivateKey(): string {
  const key = process.env.WOMPI_PRIVATE_KEY;
  if (!key) {
    throw new Error(
      "WOMPI_PRIVATE_KEY no está configurada. Añádela en .env.local",
    );
  }
  return key;
}

function getWompiEventsKey(): string {
  const key = process.env.WOMPI_EVENTS_KEY;
  if (!key) {
    throw new Error(
      "WOMPI_EVENTS_KEY no está configurada. Añádela en .env.local",
    );
  }
  return key;
}

function getWompiIntegritySecret(): string {
  const secret = process.env.WOMPI_INTEGRITY_SECRET;
  if (!secret) {
    throw new Error(
      "WOMPI_INTEGRITY_SECRET no está configurada. Añádela en .env.local",
    );
  }
  return secret;
}

export function isWompiConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY &&
    process.env.WOMPI_PRIVATE_KEY &&
    process.env.WOMPI_EVENTS_KEY &&
    process.env.WOMPI_INTEGRITY_SECRET,
  );
}

/**
 * Verifica la firma del webhook de Wompi
 * La firma se genera concatenando: timestamp + event.data.id
 * y luego hasheando con SHA-256 usando la events key
 */
export function verifyWebhookSignature(
  signature: string,
  timestamp: string,
  eventId: string,
): boolean {
  const eventsKey = getWompiEventsKey();
  const signatureString = `${timestamp}${eventId}`;
  const expectedSignature = crypto
    .createHmac("sha256", eventsKey)
    .update(signatureString)
    .digest("hex");

  return signature === expectedSignature;
}

export function generateIntegritySignature(
  reference: string,
  amountInCents: number,
  currency: string = "COP",
): string {
  const integritySecret = process.env.WOMPI_INTEGRITY_SECRET;

  if (!integritySecret) {
    throw new Error("WOMPI_INTEGRITY_SECRET no configurado");
  }

  const signatureString =
    `${reference}${amountInCents}${currency}${integritySecret}`;

  return crypto
    .createHash("sha256")
    .update(signatureString)
    .digest("hex");
}

/**
 * Genera una referencia única para el pago
 */
export function generatePaymentReference(): string {
  return `ORDER_${Date.now()}`;
}

/**
 * Construye la URL de checkout de Wompi
 */
export function buildWompiCheckoutUrl(params: {
  amountInCents: number;
  reference: string;
  customerEmail?: string;
  customerFullName?: string;
  redirectUrl?: string;
}): string {
  const publicKey = getWompiPublicKey();
  const signature = generateIntegritySignature(
    params.reference,
    params.amountInCents,
    "COP",
  );

  const urlParams = new URLSearchParams({
    "public-key": publicKey,
    currency: "COP",
    "amount-in-cents": params.amountInCents.toString(),
    reference: params.reference,
    "signature:integrity": signature,
  });

  if (params.customerEmail) {
    urlParams.append("customer-data:email", params.customerEmail);
  }

  if (params.customerFullName) {
    urlParams.append("customer-data:full-name", params.customerFullName);
  }

  if (params.redirectUrl) {
    urlParams.append("redirect-url", params.redirectUrl);
  }

  const checkoutUrl = `https://checkout.wompi.co/p/?${urlParams.toString()}`;
  console.log("Checkout URL generada:", checkoutUrl);

  return checkoutUrl;
}

/**
 * Verifica el estado de una transacción con Wompi
 */
export async function verifyTransaction(reference: string): Promise<{
  status: string;
  amountInCents: number;
  email: string | null;
}> {
  if (!reference || reference.trim() === "") {
    throw new Error("La referencia de la transacción es requerida");
  }

  const privateKey = getWompiPrivateKey();

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 segundos timeout

  try {
    const response = await fetch(
      `https://api.wompi.co/v1/transactions/?reference=${reference}`,
      {
        headers: {
          Authorization: `Bearer ${privateKey}`,
        },
        signal: controller.signal,
      },
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      if (response.status === 404) {
        console.error(`Wompi API 404 - Transaction not found for reference: ${reference}`);
        throw new Error(`Transacción no encontrada en Wompi (404). Referencia: ${reference}. El pago puede no haberse completado.`);
      }
      throw new Error(`Error verificando transacción con Wompi (HTTP ${response.status})`);
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      console.error(`Wompi API returned empty data for reference: ${reference}`);
      throw new Error(`Transacción no encontrada en Wompi. Referencia: ${reference}`);
    }

    const transaction = data.data[0];

    return {
      status: transaction.status,
      amountInCents: transaction.amount_in_cents,
      email: transaction.customer_email || null,
    };
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Timeout verificando transacción con Wompi. Intente nuevamente.");
    }
    throw error;
  }
}
