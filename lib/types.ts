export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  currency: string;
  category: string;
  badge?: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  inStock: boolean;
  rating: number;
  reviewsCount: number;
  details: string[];
  materials: string;
  dimensions?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  token?: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  shippingAddress: {
    fullName: string;
    email: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  status: string;
}

export interface FilterState {
  category: string;
  minPrice: number;
  maxPrice: number;
  sort: string;
  searchQuery: string;
}
