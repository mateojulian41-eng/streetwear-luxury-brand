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
    price: 280,
    priceInCents: 28000,
    description:
      "Hoodie oversize de corte pesado con capucha estructurada. Confeccionado en algodon premium de 450gsm con acabado cepillado interior. Silueta droopy con hombros caidos y mangas extra largas. El negro absoluto que define nuestra identidad.",
    details: [
      "100% Algodon Premium 450gsm",
      "Corte oversize con hombros caidos",
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
    price: 220,
    priceInCents: 22000,
    description:
      "Pantalon cargo de corte wide leg en tela ripstop premium. Multiples bolsillos utilitarios con cierres metalicos negros. Cintura ajustable con trabillas reforzadas. Diseno funcional que fusiona la estetica militar con el lujo urbano.",
    details: [
      "Tela Ripstop 280gsm",
      "Corte wide leg relajado",
      "6 bolsillos funcionales",
      "Cierres metalicos matte black",
      "Cintura elastica con cordon",
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
    price: 340,
    priceInCents: 34000,
    description:
      "Sneaker high-top con plataforma chunky de alto impacto. Upper en cuero premium con detalles en nylon balistico. Suela de goma vulcanizada con traccion extrema. El calzado que domina cualquier territorio urbano.",
    details: [
      "Upper en cuero premium",
      "Detalles en nylon balistico",
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
    price: 95,
    priceInCents: 9500,
    description:
      "Camiseta oversize de peso medio en algodon premium 240gsm. Corte boxy con hombros caidos y cuello reforzado. Minimalismo absoluto en negro puro. La base perfecta para cualquier outfit urbano.",
    details: [
      "100% Algodon Premium 240gsm",
      "Corte boxy oversize",
      "Cuello reforzado doble costura",
      "Etiquetas heat-sealed",
      "Peso medio ideal para cualquier clima",
      "Hecho en Colombia",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/product-hoodie.jpg"],
    inStock: true,
  },
  {
    id: "tactical-shorts",
    slug: "tactical-shorts",
    name: "TACTICAL SHORTS",
    category: "Premium Pants",
    price: 145,
    priceInCents: 14500,
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
    images: ["/images/product-pants.jpg"],
    inStock: true,
  },
  {
    id: "phantom-jacket",
    slug: "phantom-jacket",
    name: "PHANTOM JACKET",
    category: "Oversize Collection",
    price: 380,
    priceInCents: 38000,
    description:
      "Chaqueta bomber oversize en nylon balistico premium. Forro polar de alta calidad para frio moderado. Multiples bolsillos interiores y exteriores. La pieza statement que completa cualquier look.",
    details: [
      "Nylon Balistico 300gsm",
      "Forro polar premium",
      "Corte oversize bomber",
      "Cierres metalicos YKK matte black",
      "Bolsillos interiores secretos",
      "Hecho en Colombia",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/product-hoodie.jpg"],
    inStock: true,
  },
  {
    id: "night-runner",
    slug: "night-runner",
    name: "NIGHT RUNNER",
    category: "High Impact Footwear",
    price: 290,
    priceInCents: 29000,
    description:
      "Sneaker low-top con silueta chunky moderna. Upper en malla tecnica con overlays de cuero sintetico. Suela de goma con sistema de amortiguacion. Comodidad extrema con estetica agresiva.",
    details: [
      "Upper en malla tecnica",
      "Overlays de cuero sintetico",
      "Suela chunky 4cm",
      "Sistema de amortiguacion",
      "Cordones planos reforzados",
      "Hecho en Colombia",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    images: ["/images/product-shoes.jpg"],
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return `$${price} USD`;
}
