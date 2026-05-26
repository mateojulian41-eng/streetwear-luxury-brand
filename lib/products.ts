export interface FabricSpecs {
  material: string;
  gsm: number;
  type: string;
  finish: string;
  durability: string;
  breathability: string;
  care: string[];
}

export interface StockLevel {
  size: string;
  quantity: number;
  reorderPoint: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  priceInCents: number;
  description: string;
  details: string[];
  fabricSpecs: FabricSpecs;
  sizes: string[];
  stockLevels: StockLevel[];
  images: string[];
  inStock: boolean;
  productionCost: number;
  productionCostInCents: number;
}

export const products: Product[] = [
  {
    id: "tank-top",
    slug: "tank-top",
    name: "TANK TOP",
    category: "Essentials Collection",
    price: 95000,
    priceInCents: 9500000,
    description:
      "Tank top oversize de peso ligero en algodón premium 200gsm. Corte boxy con hombros caídos y escote amplio. Minimalismo absoluto en negro puro. La pieza esencial para el clima de Cartagena.",
    details: [
      "100% Algodón Premium 200gsm",
      "Corte boxy oversize",
      "Escote amplio",
      "Cuello reforzado doble costura",
      "Peso ligero ideal para clima caliente",
      "Hecho en Colombia",
    ],
    fabricSpecs: {
      material: "100% Algodón Premium",
      gsm: 200,
      type: "Single Jersey",
      finish: "Pre-shrunk (encogimiento controlado)",
      durability: "50+ lavados sin deformación",
      breathability: "Extrema (ideal para clima de Cartagena)",
      care: [
        "Lavar a 30°C",
        "No usar blanqueador",
        "Secar en sombra",
        "Planchar a baja temperatura",
      ],
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    stockLevels: [
      { size: "S", quantity: 12, reorderPoint: 4 },
      { size: "M", quantity: 12, reorderPoint: 4 },
      { size: "L", quantity: 12, reorderPoint: 4 },
      { size: "XL", quantity: 12, reorderPoint: 4 },
      { size: "XXL", quantity: 12, reorderPoint: 4 },
    ],
    images: ["/images/hero-model.jpg"],
    inStock: true,
    productionCost: 38000,
    productionCostInCents: 3800000,
  },
  {
    id: "void-tee",
    slug: "void-tee",
    name: "VOID TEE",
    category: "Oversize Collection",
    price: 120000,
    priceInCents: 12000000,
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
    fabricSpecs: {
      material: "100% Algodón Premium",
      gsm: 240,
      type: "Single Jersey",
      finish: "Pre-shrunk (encogimiento controlado)",
      durability: "50+ lavados sin deformación",
      breathability: "Alta (ideal para clima de Cartagena)",
      care: [
        "Lavar a 30°C",
        "No usar blanqueador",
        "Secar en sombra",
        "Planchar a baja temperatura",
      ],
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    stockLevels: [
      { size: "S", quantity: 12, reorderPoint: 4 },
      { size: "M", quantity: 12, reorderPoint: 4 },
      { size: "L", quantity: 12, reorderPoint: 4 },
      { size: "XL", quantity: 12, reorderPoint: 4 },
      { size: "XXL", quantity: 12, reorderPoint: 4 },
    ],
    images: ["/images/void-tee.png"],
    inStock: true,
    productionCost: 48000,
    productionCostInCents: 4800000,
  },
  {
    id: "linen-shirt",
    slug: "linen-shirt",
    name: "LINEN SHIRT",
    category: "Essentials Collection",
    price: 165000,
    priceInCents: 16500000,
    description:
      "Camisa oversize de peso ligero en lino premium 180gsm. Corte boxy con hombros caídos y botones matte black. Minimalismo absoluto en negro puro. La pieza perfecta para el clima de Cartagena.",
    details: [
      "100% Lino Premium 180gsm",
      "Corte boxy oversize",
      "Botones matte black",
      "Cuello cubano",
      "Peso ligero ideal para clima caliente",
      "Hecho en Colombia",
    ],
    fabricSpecs: {
      material: "100% Lino Premium",
      gsm: 180,
      type: "Lino",
      finish: "Pre-shrunk (encogimiento controlado)",
      durability: "40+ lavados sin deformación",
      breathability: "Extrema (ideal para clima de Cartagena)",
      care: [
        "Lavar a 30°C",
        "No usar blanqueador",
        "Secar en sombra",
        "Planchar a temperatura media",
      ],
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    stockLevels: [
      { size: "S", quantity: 10, reorderPoint: 3 },
      { size: "M", quantity: 10, reorderPoint: 3 },
      { size: "L", quantity: 10, reorderPoint: 3 },
      { size: "XL", quantity: 10, reorderPoint: 3 },
      { size: "XXL", quantity: 10, reorderPoint: 3 },
    ],
    images: ["/images/product-hoodie.jpg"],
    inStock: true,
    productionCost: 66000,
    productionCostInCents: 6600000,
  },
  {
    id: "stealth-tee",
    slug: "stealth-tee",
    name: "STEALTH TEE",
    category: "Oversize Collection",
    price: 145000,
    priceInCents: 14500000,
    description:
      "Camiseta oversize de peso pesado en algodón premium 280gsm. Corte boxy con hombros caídos y cuello reforzado. Minimalismo absoluto con detalles sutiles. La pieza esencial para cualquier outfit urbano.",
    details: [
      "100% Algodón Premium 280gsm",
      "Corte boxy oversize",
      "Cuello reforzado triple costura",
      "Etiquetas heat-sealed",
      "Peso pesado para durabilidad",
      "Hecho en Colombia",
    ],
    fabricSpecs: {
      material: "100% Algodón Premium",
      gsm: 280,
      type: "Heavy Jersey",
      finish: "Pre-shrunk + Enzyme wash",
      durability: "100+ lavados sin deformación",
      breathability: "Media-alta",
      care: [
        "Lavar a 30°C",
        "No usar blanqueador",
        "Secar en sombra",
        "Planchar a baja temperatura",
      ],
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    stockLevels: [
      { size: "S", quantity: 10, reorderPoint: 3 },
      { size: "M", quantity: 10, reorderPoint: 3 },
      { size: "L", quantity: 10, reorderPoint: 3 },
      { size: "XL", quantity: 10, reorderPoint: 3 },
      { size: "XXL", quantity: 10, reorderPoint: 3 },
    ],
    images: ["/images/stealth-tee.jpg"],
    inStock: true,
    productionCost: 58000,
    productionCostInCents: 5800000,
  },
  {
    id: "tactical-shorts",
    slug: "tactical-shorts",
    name: "TACTICAL SHORTS",
    category: "Premium Pants",
    price: 180000,
    priceInCents: 18000000,
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
    fabricSpecs: {
      material: "Ripstop Premium (algodón + nylon)",
      gsm: 260,
      type: "Ripstop",
      finish: "Water-repellent (repelente al agua)",
      durability: "Alta",
      breathability: "Media-alta",
      care: [
        "Lavar a 30°C",
        "No usar blanqueador",
        "Secar en sombra",
        "No planchar a alta temperatura",
      ],
    },
    sizes: ["28", "30", "32", "34", "36", "38"],
    stockLevels: [
      { size: "28", quantity: 10, reorderPoint: 3 },
      { size: "30", quantity: 10, reorderPoint: 3 },
      { size: "32", quantity: 10, reorderPoint: 3 },
      { size: "34", quantity: 10, reorderPoint: 3 },
      { size: "36", quantity: 10, reorderPoint: 3 },
      { size: "38", quantity: 10, reorderPoint: 3 },
    ],
    images: ["/images/tactical-shorts.png"],
    inStock: true,
    productionCost: 72000,
    productionCostInCents: 7200000,
  },
  {
    id: "heavy-cargo",
    slug: "heavy-cargo",
    name: "HEAVY CARGO",
    category: "Premium Pants",
    price: 220000,
    priceInCents: 22000000,
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
    fabricSpecs: {
      material: "Ripstop Premium (algodón + nylon)",
      gsm: 280,
      type: "Ripstop",
      finish: "Water-repellent (repelente al agua)",
      durability: "Extrema (uso intensivo)",
      breathability: "Media",
      care: [
        "Lavar a 30°C",
        "No usar blanqueador",
        "Secar en sombra",
        "No planchar a alta temperatura",
      ],
    },
    sizes: ["28", "30", "32", "34", "36", "38"],
    stockLevels: [
      { size: "28", quantity: 8, reorderPoint: 2 },
      { size: "30", quantity: 8, reorderPoint: 2 },
      { size: "32", quantity: 8, reorderPoint: 2 },
      { size: "34", quantity: 8, reorderPoint: 2 },
      { size: "36", quantity: 8, reorderPoint: 2 },
      { size: "38", quantity: 8, reorderPoint: 2 },
    ],
    images: ["/images/product-pants.jpg"],
    inStock: true,
    productionCost: 88000,
    productionCostInCents: 8800000,
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
