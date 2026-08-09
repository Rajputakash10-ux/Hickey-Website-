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
  dropNumber?: number;
  dropDate?: string;
  limited?: number;
  whatsInside?: string[];
  variantId?: string;
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

export interface Event {
  id: string;
  image: string;
  date: string;
  location: string;
  title: string;
  description: string;
  href: string;
}

export interface Article {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
}
