import Link from "next/link";
import { SocialLinks } from "./social-links";
import { ArrowUpRight, Mail } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };
  return (
    <footer className="border-t border-border/50 py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-4xl tracking-[0.15em] hover:text-foreground/80 transition-all duration-300"
            >
              NOIR URBANO
            </Link>
            <p className="text-sm text-muted-foreground mt-6 max-w-sm leading-relaxed">
              Streetwear luxury nacido en Cartagena. La crudeza de la calle, la
              elegancia del negro absoluto.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-[10px] tracking-[0.35em] text-muted-foreground mb-4">
                NEWSLETTER
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu email"
                  className="flex-1 bg-background/50 border border-border/50 px-4 py-3 text-sm focus:border-foreground/50 focus:outline-none transition-all duration-300"
                  disabled={isSubscribed}
                />
                <button
                  type="submit"
                  disabled={isSubscribed || !email}
                  className="px-4 py-3 bg-foreground text-background text-[10px] tracking-[0.2em] hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {isSubscribed ? "¡Suscrito!" : "UNIRSE"}
                </button>
              </form>
              {isSubscribed && (
                <p className="text-[10px] text-foreground/70 mt-2">
                  Gracias por suscribirte
                </p>
              )}
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] text-muted-foreground mb-8">
              NAVEGACIÓN
            </h4>
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 group flex items-center gap-2"
              >
                Inicio
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <Link
                href="/shop"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 group flex items-center gap-2"
              >
                Shop
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <Link
                href="/nosotros"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 group flex items-center gap-2"
              >
                Nosotros
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <Link
                href="/contacto"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 group flex items-center gap-2"
              >
                Contacto
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.35em] text-muted-foreground mb-8">
              CONTACTO
            </h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a
                  href="mailto:info@noirurbano.com"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300"
                >
                  info@noirurbano.com
                </a>
              </div>
              <p className="text-muted-foreground">Cartagena, Colombia</p>
              <a
                href="https://wa.me/573135859810"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                +57 313 585 9810
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-muted-foreground tracking-[0.2em]">
            &copy; 2026 NOIR URBANO. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex items-center gap-8 text-[10px] text-muted-foreground tracking-[0.2em]">
            <Link
              href="/terminos"
              className="hover:text-foreground transition-all duration-300 relative group"
            >
              TÉRMINOS
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/privacidad"
              className="hover:text-foreground transition-all duration-300 relative group"
            >
              PRIVACIDAD
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/contacto"
              className="hover:text-foreground transition-all duration-300 relative group"
            >
              CONTACTO
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
