import type { Metadata } from "next";
import { Space_Grotesk, Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CursorFollower } from "@/components/cursor-follower";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "NOIR URBANO | Streetwear Luxury - Cartagena",
  description:
    "Marca nativa de streetwear luxury nacida en Cartagena. Fusionamos la crudeza de la cultura callejera con la elegancia del negro absoluto.",
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
};

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
        <CursorFollower />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
