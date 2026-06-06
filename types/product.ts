export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  images?: string[];
  price: number;
  originalPrice?: number;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  description?: string;
  specs?: ProductSpec[];
  category?: string;
  sku?: string;
};
