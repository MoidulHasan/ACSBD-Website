export interface ProductPriceI {
  id: number;
  product_id: number;
  base_price: string;
  is_percent: number;
  discount_amount: string;
  final_price: string;
  created_at: string;
  updated_at: string;
}

export interface ProductCategoryI {
  main: string;
  sub: string;
}

export interface ProductWarrantyI {
  electricalSpareParts: string;
  compressor: string;
  freeService: string;
}

export interface ProductServiceInfoI {
  countryOfOrigin: string;
  countryOfAssemble: string;
}

export interface ProductStockI {
  quantity: number;
  inStock: boolean;
}

export interface ProductReviewI {
  id: number;
  userId: number;
  rating: number;
  text: string;
  timestamp: string;
}

export interface ProductAttributesI {
  BTU: string;
  capacity: string;
  refrigerant: string;
  material: string;
  compressorType: string;
  color: string;
  outdoorUnitModel: string;
  acType: string;
}

export interface ProductRattingI {
  average: number;
  count: number;
}

export interface ProductI {
  id: number;
  name: string;
  description: string;
  images: string[];
  descriptionImage?: string[];
  ratings: ProductRattingI;
  price: ProductPriceI;
  category: ProductCategoryI;
  brand: string;
  type: string;
  model: string;
  attributes: ProductAttributesI;
  warranty: ProductWarrantyI;
  serviceInfo: ProductServiceInfoI;
  stock: ProductStockI;
  reviews: ProductReviewI[];
  timestamp: string;
  slug: string;
}

export interface SortByOptionI {
  label: string;
  value: string;
}

export interface ProductMinimalI {
  category_id: number;
  brand_id: number;
  id: number;
  sku: string;
  name: string;
  short_description: string;
  slug: string;
  image: string;
  current_stock_quantity: number | null;
  avg_ratings: number | null;
  price: ProductPriceI;
}
