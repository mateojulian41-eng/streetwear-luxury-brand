import { Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/noir_urbano",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@noir_urbano",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          aria-label={social.name}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
