export type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  rating: number;
  reviewCount: number;
};
