import "server-only";

// Wompi API Configuration
const WOMPI_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY ||
  "pub_test_SsOxj4ERMJ1lbeHDHh5H1reTnI9aWv6a";
const WOMPI_PRIVATE_KEY =
  process.env.WOMPI_PRIVATE_KEY || "prv_test_3ek5xdfK0zriZDH87ALhAJzsTjFIFPk1";
const WOMPI_INTEGRATION_ID =
  process.env.WOMPI_INTEGRATION_ID ||
  "test_integrity_TqOQYyV7z9zqXV0nOfitYj8KIG2rIgvy";

// Log for debugging
console.log("WOMPI_PUBLIC_KEY:", WOMPI_PUBLIC_KEY ? "SET" : "NOT SET");
console.log("WOMPI_PRIVATE_KEY:", WOMPI_PRIVATE_KEY ? "SET" : "NOT SET");
console.log("WOMPI_INTEGRATION_ID:", WOMPI_INTEGRATION_ID ? "SET" : "NOT SET");

if (!WOMPI_PUBLIC_KEY) {
  throw new Error(
    "NEXT_PUBLIC_WOMPI_PUBLIC_KEY environment variable is not set",
  );
}

if (!WOMPI_PRIVATE_KEY) {
  throw new Error("WOMPI_PRIVATE_KEY environment variable is not set");
}

if (!WOMPI_INTEGRATION_ID) {
  throw new Error("WOMPI_INTEGRATION_ID environment variable is not set");
}

export const wompiConfig = {
  publicKey: WOMPI_PUBLIC_KEY,
  privateKey: WOMPI_PRIVATE_KEY,
  integrationId: WOMPI_INTEGRATION_ID,
  apiUrl: "https://sandbox.wompi.co/v1", // Sandbox URL, cambiar a producción cuando sea necesario
};

// Helper function to create Wompi signature
export function createWompiSignature(
  reference: string,
  amountInCents: number,
  currency: string,
): string {
  const signatureString = `${reference}${amountInCents}${currency}${wompiConfig.integrationId}`;
  return signatureString;
}

// Helper function to create a Wompi transaction using Widget
export async function createWompiTransaction(
  amountInCents: number,
  currency: string,
  reference: string,
  customerEmail: string,
  customerName: string,
  returnUrl: string,
) {
  try {
    const signature = createWompiSignature(reference, amountInCents, currency);

    // Crear una transacción simple que redirija al Widget de Wompi
    const response = await fetch(`${wompiConfig.apiUrl}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${wompiConfig.privateKey}`,
      },
      body: JSON.stringify({
        amount_in_cents: amountInCents,
        currency: currency,
        customer_email: customerEmail,
        reference: reference,
        signature: signature,
        redirect_url: returnUrl,
        payment_method: {
          type: "CARD",
          installments: 1,
        },
        acceptance_token: "acceptance_token_placeholder",
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Wompi API error: ${JSON.stringify(error)}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error creating Wompi transaction:", error);
    throw error;
  }
}
