export interface Product {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: ProductImage[];
  category: ProductCategory;
  badge?: string;
  available: boolean;
  tags?: string[];
  weight?: string;
  variantId?: string;
  whatsInside?: string[];
  dropNumber?: number;
  dropDate?: string;
  limited?: number;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export type ProductCategory = 'all' | 'consumables' | 'gifts' | 'games' | 'kits';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  initials: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  product: string;
  date: string;
}

export interface Ingredient {
  id: string;
  name: string;
  origin?: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
