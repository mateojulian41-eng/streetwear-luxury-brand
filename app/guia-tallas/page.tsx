import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guía de Tallas | NOIR URBANO",
  description: "Encuentra tu talla perfecta en NOIR URBANO. Guía de tallas para hoodies, pantalones y calzado."
}

export default function SizeGuidePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            VOLVER AL SHOP
          </Link>
          
          <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
            GUÍA DE TALLAS
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
            ENCUENTRA<br />
            <span className="text-muted-foreground/50">TU TALLA</span>
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Nuestras prendas tienen corte oversize. Recomendamos elegir tu talla habitual para un fit droopy autentico, 
            o una talla menos si prefieres un ajuste mas ceñido.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Hoodies Size Chart */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-4">
              HOODIES OVERSIZE
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
              CAMISETAS Y HOODIES
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">TALLA</th>
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">PECHO (CM)</th>
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">LARGO (CM)</th>
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">MANGA (CM)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">S</td>
                  <td className="py-4 px-4 text-muted-foreground">102-107</td>
                  <td className="py-4 px-4 text-muted-foreground">68</td>
                  <td className="py-4 px-4 text-muted-foreground">84</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">M</td>
                  <td className="py-4 px-4 text-muted-foreground">107-112</td>
                  <td className="py-4 px-4 text-muted-foreground">70</td>
                  <td className="py-4 px-4 text-muted-foreground">86</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">L</td>
                  <td className="py-4 px-4 text-muted-foreground">112-117</td>
                  <td className="py-4 px-4 text-muted-foreground">72</td>
                  <td className="py-4 px-4 text-muted-foreground">88</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">XL</td>
                  <td className="py-4 px-4 text-muted-foreground">117-122</td>
                  <td className="py-4 px-4 text-muted-foreground">74</td>
                  <td className="py-4 px-4 text-muted-foreground">90</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">XXL</td>
                  <td className="py-4 px-4 text-muted-foreground">122-127</td>
                  <td className="py-4 px-4 text-muted-foreground">76</td>
                  <td className="py-4 px-4 text-muted-foreground">92</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pants Size Chart */}
      <section className="py-24 md:py-40 px-6 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-4">
              PANTALONES CARGO
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
              PANTALONES
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">TALLA</th>
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">CINTURA (CM)</th>
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">CADERA (CM)</th>
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">LARGO (CM)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">28</td>
                  <td className="py-4 px-4 text-muted-foreground">71-76</td>
                  <td className="py-4 px-4 text-muted-foreground">91-96</td>
                  <td className="py-4 px-4 text-muted-foreground">102</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">30</td>
                  <td className="py-4 px-4 text-muted-foreground">76-81</td>
                  <td className="py-4 px-4 text-muted-foreground">96-101</td>
                  <td className="py-4 px-4 text-muted-foreground">104</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">32</td>
                  <td className="py-4 px-4 text-muted-foreground">81-86</td>
                  <td className="py-4 px-4 text-muted-foreground">101-106</td>
                  <td className="py-4 px-4 text-muted-foreground">106</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">34</td>
                  <td className="py-4 px-4 text-muted-foreground">86-91</td>
                  <td className="py-4 px-4 text-muted-foreground">106-111</td>
                  <td className="py-4 px-4 text-muted-foreground">108</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">36</td>
                  <td className="py-4 px-4 text-muted-foreground">91-96</td>
                  <td className="py-4 px-4 text-muted-foreground">111-116</td>
                  <td className="py-4 px-4 text-muted-foreground">110</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">38</td>
                  <td className="py-4 px-4 text-muted-foreground">96-101</td>
                  <td className="py-4 px-4 text-muted-foreground">116-121</td>
                  <td className="py-4 px-4 text-muted-foreground">112</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footwear Size Chart */}
      <section className="py-24 md:py-40 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-4">
              CALZADO
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
              SNEAKERS
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">EU</th>
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">US</th>
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">UK</th>
                  <th className="text-left py-4 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">CM</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">38</td>
                  <td className="py-4 px-4 text-muted-foreground">5</td>
                  <td className="py-4 px-4 text-muted-foreground">4.5</td>
                  <td className="py-4 px-4 text-muted-foreground">24</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">39</td>
                  <td className="py-4 px-4 text-muted-foreground">6</td>
                  <td className="py-4 px-4 text-muted-foreground">5.5</td>
                  <td className="py-4 px-4 text-muted-foreground">25</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">40</td>
                  <td className="py-4 px-4 text-muted-foreground">7</td>
                  <td className="py-4 px-4 text-muted-foreground">6.5</td>
                  <td className="py-4 px-4 text-muted-foreground">25.5</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">41</td>
                  <td className="py-4 px-4 text-muted-foreground">8</td>
                  <td className="py-4 px-4 text-muted-foreground">7.5</td>
                  <td className="py-4 px-4 text-muted-foreground">26</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">42</td>
                  <td className="py-4 px-4 text-muted-foreground">9</td>
                  <td className="py-4 px-4 text-muted-foreground">8.5</td>
                  <td className="py-4 px-4 text-muted-foreground">27</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">43</td>
                  <td className="py-4 px-4 text-muted-foreground">10</td>
                  <td className="py-4 px-4 text-muted-foreground">9.5</td>
                  <td className="py-4 px-4 text-muted-foreground">27.5</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">44</td>
                  <td className="py-4 px-4 text-muted-foreground">11</td>
                  <td className="py-4 px-4 text-muted-foreground">10.5</td>
                  <td className="py-4 px-4 text-muted-foreground">28</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-[family-name:var(--font-display)] text-xl">45</td>
                  <td className="py-4 px-4 text-muted-foreground">12</td>
                  <td className="py-4 px-4 text-muted-foreground">11.5</td>
                  <td className="py-4 px-4 text-muted-foreground">29</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-24 md:py-40 px-6 border-t border-border bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              CONSEJOS
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
              CÓMO MEDIRTE
            </h2>
          </div>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-3 text-foreground">PECHO</h3>
              <p>Mide la parte mas ancha de tu pecho, manteniendo la cinta horizontal y pasando por debajo de las axilas.</p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-3 text-foreground">CINTURA</h3>
              <p>Mide tu cintura natural, que es la parte mas estrecha de tu torso, generalmente justo encima del ombligo.</p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl mb-3 text-foreground">LARGO</h3>
              <p>Para pantalones, mide desde la parte superior de la cintura hasta el tobillo. Para camisetas, mide desde el hombro hasta la cintura.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              ¿Aún tienes dudas? Contáctanos por WhatsApp para asesoría personalizada.
            </p>
            <Button asChild size="lg" className="h-14 px-10 text-[11px] tracking-[0.3em]">
              <Link href="/contacto">
                CONTACTAR SOPORTE
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
