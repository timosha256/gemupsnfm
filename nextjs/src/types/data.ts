export interface IUser {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  isVerified: boolean;
  isGuest: boolean;
  // isAdmin: boolean
  // role: string
  balance: string;
  guestSessionId: string;
}

export interface ISellerProduct {
  tags: string[];
  imgSrc: string;
  rating: number;
  shop: string;
  sellerList: Array<{
    avatar: string;
  }>;
  product: {
    name: string;
    count: number;
    description: string;
  };
  price: number;
  currency: string;
  progress: number;
}

export interface IPurchase {
  active: boolean;
  name: string;
  category: string;
  shop: string;
}

export interface ProxyProduct {
  id: number;
  name: string;
  description: string;
  proxyType: "http" | "socks5" | string;
  proxyCategory: string;
  sessionType: "sticky" | string;
  countryCode: string;
  countryName: string;
  city: string;
  pricePerProxy: string;
  durationDays: number;
  minQuantity: number;
  maxQuantity: number;
  stockAvailable: number;
  maxThreads: number;
  speedMbps: number;
  uptimeGuarantee: string;
  isFeatured: boolean;
}

export interface ICartItem {
  id: number;
  userId: number;
  guestSessionId: string;
  proxyProductId: number;
  quantity: number;
  generationParams: string;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  proxyProduct: ProxyProduct;
  unitPrice: string;
  totalPrice: string;
  isAvailable: boolean;
  stockStatus: "in_stock" | string;
}

export interface ICartSummary {
  totalItems: number;
  totalAmount: string;
  currency: string;
  itemsCount: number;
  userType: "guest" | string;
  estimatedDelivery: string;
  hasNodepayProducts: boolean;
  hasProxyProducts: boolean;
  hasUnavailableItems: boolean;
  categoriesBreakdown: Record<string, number>;
  countriesBreakdown: Record<string, number>;
}

export interface ICartData {
  items: ICartItem[];
  summary: ICartSummary;
  lastUpdated: string; // ISO date string
  expiresAt: string; // ISO date string
  isGuest: boolean;
}
