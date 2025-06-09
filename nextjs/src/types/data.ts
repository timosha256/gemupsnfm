export interface IUser {
  id: number
  email: string
  username: string
  firstName: string
  lastName: string
  isActive: boolean
  isVerified: boolean
  isGuest: boolean
  // isAdmin: boolean
  // role: string
  balance: string
  guestSessionId: string
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
  active: boolean
  name: string
  category: string
  shop: string
}