import "server-only";

// ePayco API Configuration
const EPAYCO_PUBLIC_KEY =
  process.env.EPAYCO_PUBLIC_KEY || "cd341756974af43278d1788002cb5aa2";
const EPAYCO_PRIVATE_KEY =
  process.env.EPAYCO_PRIVATE_KEY || "ba8292749e5a0b07ac22d164e7856522";

// Log for debugging
console.log("EPAYCO_PUBLIC_KEY:", EPAYCO_PUBLIC_KEY ? "SET" : "NOT SET");
console.log("EPAYCO_PRIVATE_KEY:", EPAYCO_PRIVATE_KEY ? "SET" : "NOT SET");

if (!EPAYCO_PUBLIC_KEY) {
  throw new Error("EPAYCO_PUBLIC_KEY environment variable is not set");
}

if (!EPAYCO_PRIVATE_KEY) {
  throw new Error("EPAYCO_PRIVATE_KEY environment variable is not set");
}

export const epaycoConfig = {
  publicKey: EPAYCO_PUBLIC_KEY,
  privateKey: EPAYCO_PRIVATE_KEY,
  apiUrl: "https://apify.epayco.co",
};

// Helper function to authenticate with Apify and get token
export async function getApifyToken(): Promise<string> {
  try {
    // Create Basic Auth header
    const authString = `${EPAYCO_PUBLIC_KEY}:${EPAYCO_PRIVATE_KEY}`;
    const base64Auth = Buffer.from(authString).toString("base64");

    const response = await fetch(`${epaycoConfig.apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64Auth}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`ePayco API error: ${JSON.stringify(error)}`);
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Error getting Apify token:", error);
    throw error;
  }
}

// Helper function to create ePayco checkout session
export async function createEpaycoCheckoutSession(
  amountInCents: number,
  currency: string,
  reference: string,
  customerEmail: string,
  customerName: string,
  returnUrl: string,
): Promise<{ sessionId: string; token: string }> {
  try {
    console.log("Creando sesión de ePayco...");
    console.log("Amount in cents:", amountInCents);
    console.log("Currency:", currency);
    console.log("Reference:", reference);
    console.log("Customer email:", customerEmail);
    console.log("Customer name:", customerName);
    console.log("Return URL:", returnUrl);

    const apifyToken = await getApifyToken();
    console.log("Apify token obtenido:", apifyToken ? "YES" : "NO");

    const response = await fetch(
      `${epaycoConfig.apiUrl}/payment/session/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apifyToken}`,
        },
        body: JSON.stringify({
          checkout_version: "2",
          name: "NOIR - Streetwear Luxury Brand",
          currency: currency,
          amount: amountInCents / 100, // Convert to pesos
          description: `Compra NOIR - Ref: ${reference}`,
          customer: {
            email: customerEmail,
            name: customerName,
          },
          return_url: returnUrl,
        }),
      },
    );

    console.log("Response status:", response.status);

    if (!response.ok) {
      const error = await response.json();
      console.error("ePayco API error:", error);
      throw new Error(`ePayco API error: ${JSON.stringify(error)}`);
    }

    const data = await response.json();
    console.log("Response data:", data);
    console.log("Session ID:", data.data?.sessionId);
    return data.data;
  } catch (error) {
    console.error("Error creating ePayco checkout session:", error);
    throw error;
  }
}
