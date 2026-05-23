import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

const blogPosts = [
  {
    id: 1,
    title: "El Renacimiento del Streetwear en Colombia",
    excerpt: "Cómo la cultura urbana está transformando la moda en Cartagena y más allá.",
    date: "15 Mayo 2024",
    category: "CULTURA",
    image: "/images/blog-1.jpg",
  },
  {
    id: 2,
    title: "Por Qué el Negro Absoluto Define Nuestra Identidad",
    excerpt: "La filosofía detrás de nuestra paleta monocromática y su significado.",
    date: "10 Mayo 2024",
    category: "DISEÑO",
    image: "/images/blog-2.jpg",
  },
  {
    id: 3,
    title: "Ediciones Limitadas: El Valor de la Exclusividad",
    excerpt: "Por qué limitamos cada pieza a 100 unidades y qué significa para ti.",
    date: "5 Mayo 2024",
    category: "PROCESO",
    image: "/images/blog-3.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <ScrollReveal>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              BLOG
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-none mb-8">
              DIARIO
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Historias, inspiración y detrás de cámaras del mundo NOIR URBANO.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Blog Posts */}
      <ScrollReveal direction="up">
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogPosts.map((post, index) => (
                <ScrollReveal key={post.id} direction="up" delay={index * 100}>
                  <article className="group cursor-pointer">
                    <div className="relative aspect-[4/3] bg-card border border-border/50 mb-6 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-transparent" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground/50">•</span>
                        <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl group-hover:text-foreground/80 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                      <span className="text-[10px] tracking-[0.3em] text-foreground group-hover:opacity-80 transition-opacity">
                        LEER MÁS →
                      </span>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Newsletter */}
      <ScrollReveal>
        <section className="py-24 px-6 border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground mb-6">
              NEWSLETTER
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl leading-tight mb-6">
              MANTENTE ACTUALIZADO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
              Recibe actualizaciones exclusivas sobre nuevos lanzamientos,
              contenido del blog y ofertas especiales.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <Footer />
    </main>
  );
}
