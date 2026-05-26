import { Product } from "./products";

export interface InventoryMetrics {
  totalStock: number;
  totalValue: number;
  lowStockItems: string[];
  reorderNeeded: string[];
  stockRotation: number;
}

export interface ReorderAlert {
  productId: string;
  productName: string;
  size: string;
  currentStock: number;
  reorderPoint: number;
  urgency: "low" | "medium" | "high";
}

export interface FabricSupplier {
  name: string;
  location: string;
  materials: string[];
  minOrder: number;
  priceRange: string;
  leadTime: string;
  contact: string;
}

export const fabricSuppliers: FabricSupplier[] = [
  {
    name: "Textiles del Norte",
    location: "Barranquilla",
    materials: ["Algodón Premium", "Ripstop"],
    minOrder: 50,
    priceRange: "$25,000-35,000 COP/metro",
    leadTime: "5-7 días",
    contact: "contacto@textilesdelnorte.com",
  },
  {
    name: "Colombia Textil",
    location: "Medellín",
    materials: ["Algodón", "Nylon", "Ripstop"],
    minOrder: 30,
    priceRange: "$20,000-40,000 COP/metro",
    leadTime: "7-10 días",
    contact: "ventas@colombiatextil.com",
  },
  {
    name: "Fabricato",
    location: "Bogotá",
    materials: ["Algodón Premium", "Nylon Balístico"],
    minOrder: 100,
    priceRange: "$30,000-50,000 COP/metro",
    leadTime: "10-14 días",
    contact: "comercial@fabricato.com",
  },
];

export function calculateInventoryMetrics(products: Product[]): InventoryMetrics {
  let totalStock = 0;
  let totalValue = 0;
  const lowStockItems: string[] = [];
  const reorderNeeded: string[] = [];

  products.forEach((product) => {
    product.stockLevels.forEach((stockLevel) => {
      totalStock += stockLevel.quantity;
      totalValue += stockLevel.quantity * product.productionCost;

      if (stockLevel.quantity <= 5) {
        lowStockItems.push(`${product.name} - Talla ${stockLevel.size}`);
      }

      if (stockLevel.quantity <= stockLevel.reorderPoint) {
        reorderNeeded.push(`${product.name} - Talla ${stockLevel.size}`);
      }
    });
  });

  return {
    totalStock,
    totalValue,
    lowStockItems,
    reorderNeeded,
    stockRotation: 0, // To be calculated based on sales data
  };
}

export function getReorderAlerts(products: Product[]): ReorderAlert[] {
  const alerts: ReorderAlert[] = [];

  products.forEach((product) => {
    product.stockLevels.forEach((stockLevel) => {
      if (stockLevel.quantity <= stockLevel.reorderPoint) {
        const urgency =
          stockLevel.quantity === 0
            ? "high"
            : stockLevel.quantity <= stockLevel.reorderPoint / 2
            ? "medium"
            : "low";

        alerts.push({
          productId: product.id,
          productName: product.name,
          size: stockLevel.size,
          currentStock: stockLevel.quantity,
          reorderPoint: stockLevel.reorderPoint,
          urgency,
        });
      }
    });
  });

  return alerts.sort((a, b) => {
    const urgencyOrder = { high: 0, medium: 1, low: 2 };
    return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
  });
}

export function getStockBySize(productId: string, size: string, products: Product[]): number {
  const product = products.find((p) => p.id === productId);
  if (!product) return 0;

  const stockLevel = product.stockLevels.find((s) => s.size === size);
  return stockLevel ? stockLevel.quantity : 0;
}

export function updateStock(
  productId: string,
  size: string,
  quantity: number,
  products: Product[]
): Product[] {
  return products.map((product) => {
    if (product.id !== productId) return product;

    return {
      ...product,
      stockLevels: product.stockLevels.map((stockLevel) => {
        if (stockLevel.size !== size) return stockLevel;
        return {
          ...stockLevel,
          quantity: Math.max(0, stockLevel.quantity + quantity),
        };
      }),
      inStock: product.stockLevels.some(
        (sl) => sl.size === size && sl.quantity + quantity > 0
      ),
    };
  });
}

export const qualityControlChecklist = {
  fabric: [
    "Verificar gramaje (gsm)",
    "Test de encogimiento",
    "Test de colorfastness",
    "Test de durabilidad (abrasión)",
    "Verificar certificación de proveedor",
  ],
  production: [
    "Inspección visual de cada prenda",
    "Verificar costuras y acabados",
    "Test de medidas (tallas correctas)",
    "Control de calidad aleatorio (10%)",
  ],
  final: [
    "Inspección final 100%",
    "Verificar etiquetas y etiquetado",
    "Test de funcionalidad (cierres, bolsillos)",
    "Empaquetado con protección",
  ],
};

export const returnPolicy = {
  manufacturingDefects: "30 días para cambio",
  wrongSize: "7 días para cambio",
  customerPaysReturnShipping: true,
  freeReplacementForDefects: true,
};

export const sizeDistribution = {
  S: 0.15,
  M: 0.25,
  L: 0.30,
  XL: 0.20,
  XXL: 0.10,
};

export function calculateInitialStock(totalUnits: number, sizes: string[]): Record<string, number> {
  const distribution: Record<string, number> = {};
  let remaining = totalUnits;

  sizes.forEach((size, index) => {
    const percentage = sizeDistribution[size as keyof typeof sizeDistribution] || 0.2;
    const quantity = Math.floor(totalUnits * percentage);
    distribution[size] = quantity;
    remaining -= quantity;
  });

  // Distribute remaining units to most popular sizes
  if (remaining > 0) {
    distribution["L"] = (distribution["L"] || 0) + remaining;
  }

  return distribution;
}
