export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  priceInCents: number;
  description: string;
  details: string[];
  sizes: string[];
  images: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "shadow-hoodie",
    slug: "shadow-hoodie",
    name: "SHADOW HOODIE",
    category: "Oversize Collection",
    price: 1120000,
    priceInCents: 112000000,
    description:
      "Hoodie oversize de corte pesado con capucha estructurada. Confeccionado en algodón premium de 450gsm con acabado cepillado interior. Silueta droopy con hombros caídos y mangas extra largas. El negro absoluto que define nuestra identidad.",
    details: [
      "100% Algodón Premium 450gsm",
      "Corte oversize con hombros caídos",
      "Capucha doble capa estructurada",
      "Costuras reforzadas en contraste",
      "Etiqueta bordada NOIR URBANO",
      "Hecho en Colombia",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/product-hoodie.jpg"],
    inStock: true,
  },
  {
    id: "heavy-cargo",
    slug: "heavy-cargo",
    name: "HEAVY CARGO",
    category: "Premium Pants",
    price: 880000,
    priceInCents: 88000000,
    description:
      "Pantalón cargo de corte wide leg en tela ripstop premium. Múltiples bolsillos utilitarios con cierres metálicos negros. Cintura ajustable con trabillas reforzadas. Diseño funcional que fusiona la estética militar con el lujo urbano.",
    details: [
      "Tela Ripstop 280gsm",
      "Corte wide leg relajado",
      "6 bolsillos funcionales",
      "Cierres metálicos matte black",
      "Cintura elástica con cordón",
      "Hecho en Colombia",
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: ["/images/product-pants.jpg"],
    inStock: true,
  },
  {
    id: "urban-stompers",
    slug: "urban-stompers",
    name: "URBAN STOMPERS",
    category: "High Impact Footwear",
    price: 1360000,
    priceInCents: 136000000,
    description:
      "Sneaker high-top con plataforma chunky de alto impacto. Upper en cuero premium con detalles en nylon balístico. Suela de goma vulcanizada con tracción extrema. El calzado que domina cualquier territorio urbano.",
    details: [
      "Upper en cuero premium",
      "Detalles en nylon balístico",
      "Suela plataforma 5cm",
      "Plantilla memory foam",
      "Sistema de cordones reforzado",
      "Hecho en Colombia",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    images: ["/images/product-shoes.jpg"],
    inStock: true,
  },
  {
    id: "void-tee",
    slug: "void-tee",
    name: "VOID TEE",
    category: "Oversize Collection",
    price: 380000,
    priceInCents: 38000000,
    description:
      "Camiseta oversize de peso medio en algodón premium 240gsm. Corte boxy con hombros caídos y cuello reforzado. Minimalismo absoluto en negro puro. La base perfecta para cualquier outfit urbano.",
    details: [
      "100% Algodón Premium 240gsm",
      "Corte boxy oversize",
      "Cuello reforzado doble costura",
      "Etiquetas heat-sealed",
      "Peso medio ideal para cualquier clima",
      "Hecho en Colombia",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/void-tee.png"],
    inStock: true,
  },
  {
    id: "tactical-shorts",
    slug: "tactical-shorts",
    name: "TACTICAL SHORTS",
    category: "Premium Pants",
    price: 580000,
    priceInCents: 58000000,
    description:
      "Shorts cargo de corte oversize en tela ripstop premium. Bolsillos laterales amplios con cierres metalicos. Cintura ajustable con cordon negro. Funcionalidad militar con estetica de lujo.",
    details: [
      "Tela Ripstop 260gsm",
      "Corte oversize 7 pulgadas",
      "4 bolsillos funcionales",
      "Cierres metalicos matte black",
      "Cintura elastica con cordon",
      "Hecho en Colombia",
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    images: ["/images/tactical-shorts.png"],
    inStock: true,
  },
  {
    id: "phantom-jacket",
    slug: "phantom-jacket",
    name: "PHANTOM JACKET",
    category: "Oversize Collection",
    price: 1520000,
    priceInCents: 152000000,
    description:
      "Chaqueta bomber oversize en nylon balístico premium. Forro polar de alta calidad para frío moderado. Múltiples bolsillos interiores y exteriores. La pieza statement que completa cualquier look.",
    details: [
      "Nylon Balístico 300gsm",
      "Forro polar premium",
      "Corte oversize bomber",
      "Cierres metálicos YKK matte black",
      "Bolsillos interiores secretos",
      "Hecho en Colombia",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/phantom-jacket.png"],
    inStock: true,
  },
  {
    id: "night-runner",
    slug: "night-runner",
    name: "NIGHT RUNNER",
    category: "High Impact Footwear",
    price: 1160000,
    priceInCents: 116000000,
    description:
      "Sneaker low-top con silueta chunky moderna. Upper en malla técnica con overlays de cuero sintético. Suela de goma con sistema de amortiguación. Comodidad extrema con estética agresiva.",
    details: [
      "Upper en malla técnica",
      "Overlays de cuero sintético",
      "Suela chunky 4cm",
      "Sistema de amortiguación",
      "Cordones planos reforzados",
      "Hecho en Colombia",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    images: ["/images/night-runner.png"],
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
