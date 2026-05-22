"use client";

import { useState } from "react";

interface SizeGuideProps {
  category: "hoodie" | "pants" | "tshirt";
}

const sizeData = {
  hoodie: [
    { size: "S", chest: "96-104", length: "68", sleeve: "62" },
    { size: "M", chest: "104-112", length: "70", sleeve: "64" },
    { size: "L", chest: "112-120", length: "72", sleeve: "66" },
    { size: "XL", chest: "120-128", length: "74", sleeve: "68" },
  ],
  pants: [
    { size: "28", waist: "71-76", hips: "86-91", inseam: "81" },
    { size: "30", waist: "76-81", hips: "91-96", inseam: "81" },
    { size: "32", waist: "81-86", hips: "96-101", inseam: "84" },
    { size: "34", waist: "86-91", hips: "101-106", inseam: "84" },
  ],
  tshirt: [
    { size: "S", chest: "92-100", length: "68", shoulder: "44" },
    { size: "M", chest: "100-108", length: "70", shoulder: "46" },
    { size: "L", chest: "108-116", length: "72", shoulder: "48" },
    { size: "XL", chest: "116-124", length: "74", shoulder: "50" },
  ],
};

export function InteractiveSizeGuide({ category }: SizeGuideProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [hoveredMeasurement, setHoveredMeasurement] = useState<string>("");

  const data = sizeData[category];

  return (
    <div className="glass p-8">
      <div className="mb-6">
        <h3 className="font-[family-name:var(--font-display)] text-2xl mb-4">
          Guía de Tallas
        </h3>
        <p className="text-sm text-muted-foreground">
          Selecciona una talla para ver las medidas detalladas
        </p>
      </div>

      {/* Size Selection */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {data.map((item) => (
          <button
            key={item.size}
            onClick={() => setSelectedSize(item.size)}
            onMouseEnter={() => setHoveredMeasurement(item.size)}
            onMouseLeave={() => setHoveredMeasurement("")}
            className={`px-6 py-3 border transition-all duration-300 ${
              selectedSize === item.size
                ? "border-foreground bg-foreground text-background"
                : "border-border/50 hover:border-foreground/50"
            }`}
          >
            {item.size}
          </button>
        ))}
      </div>

      {/* Measurements Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left py-3 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">
                TALLA
              </th>
              {category === "hoodie" && (
                <>
                  <th className="text-left py-3 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">
                    PECHO (cm)
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">
                    LARGO (cm)
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">
                    MANGA (cm)
                  </th>
                </>
              )}
              {category === "pants" && (
                <>
                  <th className="text-left py-3 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">
                    CINTURA (cm)
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">
                    CADERA (cm)
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">
                    TIRO (cm)
                  </th>
                </>
              )}
              {category === "tshirt" && (
                <>
                  <th className="text-left py-3 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">
                    PECHO (cm)
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">
                    LARGO (cm)
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] tracking-[0.2em] text-muted-foreground">
                    HOMBRO (cm)
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.size}
                className={`border-b border-border/30 transition-all duration-300 ${
                  selectedSize === item.size || hoveredMeasurement === item.size
                    ? "bg-foreground/5"
                    : ""
                }`}
              >
                <td className="py-3 px-4 font-medium">{item.size}</td>
                {category === "hoodie" && (
                  <>
                    <td className="py-3 px-4 text-muted-foreground">
                      {(item as { chest: string }).chest}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {(item as { length: string }).length}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {(item as { sleeve: string }).sleeve}
                    </td>
                  </>
                )}
                {category === "pants" && (
                  <>
                    <td className="py-3 px-4 text-muted-foreground">
                      {(item as { waist: string }).waist}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {(item as { hips: string }).hips}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {(item as { inseam: string }).inseam}
                    </td>
                  </>
                )}
                {category === "tshirt" && (
                  <>
                    <td className="py-3 px-4 text-muted-foreground">
                      {(item as { chest: string }).chest}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {(item as { length: string }).length}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {(item as { shoulder: string }).shoulder}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Measurement Tips */}
      <div className="mt-8 p-4 bg-card/30 border border-border/30">
        <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">
          CÓMO MEDIR
        </p>
        <ul className="text-sm text-muted-foreground space-y-1">
          {category === "hoodie" && (
            <>
              <li>• Pecho: Mide la parte más ancha del pecho</li>
              <li>• Largo: Desde el hombro hasta el dobladillo</li>
              <li>• Manga: Desde el hombro hasta la muñeca</li>
            </>
          )}
          {category === "pants" && (
            <>
              <li>• Cintura: Mide la circunferencia de la cintura</li>
              <li>• Cadera: Mide la parte más ancha de las caderas</li>
              <li>• Tiro: Desde la entrepierna hasta el dobladillo</li>
            </>
          )}
          {category === "tshirt" && (
            <>
              <li>• Pecho: Mide la parte más ancha del pecho</li>
              <li>• Largo: Desde el hombro hasta el dobladillo</li>
              <li>• Hombro: De un hombro al otro</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
