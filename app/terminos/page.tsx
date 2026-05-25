import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | NOIR URBANO",
  description:
    "Términos y condiciones de uso de NOIR URBANO. Lee nuestros términos antes de comprar.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <ScrollReveal>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              LEGAL
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-none mb-8">
              TÉRMINOS Y CONDICIONES
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Última actualización: Mayo 2026
            </p>
          </div>
        </section>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-border mb-16" />
      </div>

      <ScrollReveal direction="up">
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                1. ACEPTACIÓN DE TÉRMINOS
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Al acceder y utilizar el sitio web de NOIR URBANO, aceptas estos
                términos y condiciones. Si no estás de acuerdo con estos
                términos, por favor no utilices nuestro sitio web.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                2. INFORMACIÓN DE PRODUCTOS
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nos esforzamos por mostrar con precisión los colores y las
                imágenes de nuestros productos. Sin embargo:
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  Los colores reales pueden variar ligeramente debido a la
                  configuración de tu pantalla
                </li>
                <li>
                  Las medidas pueden tener variaciones mínimas debido al proceso
                  de fabricación
                </li>
                <li>
                  Todas las prendas son ediciones limitadas de 100 unidades
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                3. PRECIOS Y PAGOS
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Todos los precios están en pesos colombianos (COP) e incluyen
                impuestos.
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>
                  Aceptamos múltiples métodos de pago (tarjetas, transferencias,
                  Nequi, etc.)
                </li>
                <li>El pago se procesa al momento de realizar el pedido</li>
                <li>
                  Reservamos el derecho de cancelar pedidos si el pago no es
                  verificado
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                4. ENVÍOS Y ENTREGAS
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Realizamos envíos a todo Colombia a través de Servientrega.
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>Tiempo de entrega: 3-5 días hábiles</li>
                <li>Envío gratis en compras superiores a $450,000 COP</li>
                <li>Costo de envío estándar: $25,000 COP</li>
                <li>
                  El cliente es responsable de proporcionar una dirección de
                  entrega correcta
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                5. CAMBIOS Y DEVOLUCIONES
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Aceptamos cambios de talla dentro de los primeros 7 días después
                de recibir tu pedido.
              </p>
              <ul className="space-y-2 text-muted-foreground leading-relaxed list-disc list-inside">
                <li>El producto debe estar en perfectas condiciones</li>
                <li>Debe conservar todas las etiquetas originales</li>
                <li>
                  El cliente asume los costos de envío para cambios de talla
                </li>
                <li>
                  No aceptamos devoluciones por cambio de opinión, solo por
                  defectos de fabricación
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                6. PROPIEDAD INTELECTUAL
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo el contenido de este sitio web (diseños, logos, imágenes,
                textos) es propiedad exclusiva de NOIR URBANO y está protegido
                por las leyes de propiedad intelectual. No está permitido
                reproducir, distribuir o utilizar nuestro contenido sin
                autorización expresa.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                7. LIMITACIÓN DE RESPONSABILIDAD
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                NOIR URBANO no se hace responsable por daños directos o
                indirectos derivados del uso de este sitio web o de la compra de
                nuestros productos. En ningún caso nuestra responsabilidad
                excederá el monto total de la compra.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl mb-4">
                8. CONTACTO
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para cualquier pregunta sobre estos términos y condiciones,
                puedes contactarnos a través de WhatsApp: +57 313 585 9810 o
                email: noirurbano1@gmail.com
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
