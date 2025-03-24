
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  path: string;
  description?: string;
  details?: string[];
  care?: string;
  sizes?: string[];
  colors?: string[];
  stock?: Record<string, Record<string, number>>;
  sku?: string;
}
