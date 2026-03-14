// Type definitions for Nhu Cake application

export interface CakeSize {
  size: string;
  label?: string;
  price: number;
}

export interface Cake {
  id: number;
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isHot?: boolean;
  isNew?: boolean;
  isLimited?: boolean;
  isBestseller?: boolean;
  rating: number;
  reviewCount: number;
  sizes?: CakeSize[];
  flavors?: string[];
  ingredients?: string;
  deliveryInfo?: string;
  sizeGuide?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  zalo: string;
  messenger: string;
  workingHours: {
    weekday: string;
    weekend: string;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  href?: string;
}

export interface NavLink {
  path: string;
  label: string;
}

export interface CartItem extends Cake {
  quantity: number;
  size: string;
  flavor: string;
}
