export function MarqueeStrip() {
  const items = [
    "STREETWEAR LUXURY",
    "HECHO EN COLOMBIA",
    "CARTAGENA SS26",
    "EDICIÓN LIMITADA",
    "NEGRO ABSOLUTO",
    "100 UNIDADES",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="border-y border-border/50 py-5 overflow-hidden bg-card/50 relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent pointer-events-none" />
      <div
        className="flex gap-0 animate-marquee whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-[10px] tracking-[0.4em] text-muted-foreground px-10 hover:text-foreground transition-colors duration-300">
              {item}
            </span>
            <span className="text-foreground/40 text-xs glow-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
