import "server-only";

// Wompi API Configuration
const WOMPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY;
const WOMPI_PRIVATE_KEY = process.env.WOMPI_PRIVATE_KEY;
const WOMPI_INTEGRATION_ID = process.env.WOMPI_INTEGRATION_ID;

if (!WOMPI_PUBLIC_KEY) {
  throw new Error("NEXT_PUBLIC_WOMPI_PUBLIC_KEY environment variable is not set");
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
  currency: string
): string {
  const signatureString = `${reference}${amountInCents}${currency}${wompiConfig.integrationId}`;
  return signatureString;
}

// Helper function to create a Wompi transaction
export async function createWompiTransaction(
  amountInCents: number,
  currency: string,
  reference: string,
  customerEmail: string,
  customerName: string,
  returnUrl: string
) {
  try {
    const signature = createWompiSignature(reference, amountInCents, currency);

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
