export function MarqueeStrip() {
  const items = [
    "STREETWEAR PREMIUM",
    "HECHO EN COLOMBIA",
    "CARTAGENA SS26",
    "EDICIÓN LIMITADA",
    "NEGRO ABSOLUTO",
    "100 UNIDADES",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="border-y border-border/30 py-6 overflow-hidden bg-gradient-to-r from-card/30 via-background to-card/30 relative">
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-foreground/5 to-transparent pointer-events-none" />
      <div
        className="flex gap-0 animate-marquee whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[11px] tracking-[0.45em] text-foreground/70 px-12 hover:text-foreground transition-colors duration-300 font-medium">
              {item}
            </span>
            <span className="text-foreground/50 text-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
