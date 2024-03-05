export interface ProductPriceI {
  regular: number;
  discountPercentage: number;
  discounted: number;
  currency: string;
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
}

export interface SortByOptionI {
  label: string;
  value: string;
}
