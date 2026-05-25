import type { Metadata } from "next";
import { Space_Grotesk, Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CursorFollower } from "@/components/cursor-follower";
import { AnimatedGradient } from "@/components/animated-gradient";
import { FloatingParticles } from "@/components/floating-particles";
import { ErrorBoundary } from "@/components/error-boundary";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NOIR URBANO | Streetwear Premium de Cartagena",
    template: "%s | NOIR URBANO",
  },
  description:
    "Piezas exclusivas de streetwear premium diseñadas en Cartagena, Colombia. Producción limitada de 100 unidades. Negro absoluto, autenticidad pura.",
  keywords: [
    "streetwear",
    "premium",
    "colombia",
    "cartagena",
    "moda",
    "urbana",
    "edicion limitada",
    "noir urbano",
  ],
  authors: [{ name: "NOIR URBANO" }],
  creator: "NOIR URBANO",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://noirurbano.co",
    siteName: "NOIR URBANO",
    title: "NOIR URBANO | Streetwear Premium",
    description:
      "Piezas exclusivas de streetwear premium diseñadas en Cartagena, Colombia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NOIR URBANO - Streetwear Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOIR URBANO | Streetwear Premium",
    description:
      "Piezas exclusivas de streetwear premium diseñadas en Cartagena, Colombia.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <body
        className={`${spaceGrotesk.variable} ${bebasNeue.variable} font-sans antialiased`}
      >
        <ErrorBoundary>
          <AnimatedGradient />
          <FloatingParticles />
          <CursorFollower />
          {children}
        </ErrorBoundary>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
