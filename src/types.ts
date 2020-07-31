export interface CityInterface {
  name: string,
  coords: number[],
}

export interface OfferInterface {
  id: number,
  title: string,
  price: number,
  previewImage: string,
  images: string[],
  description: string,
  rating: number,
  isPremium: boolean,
  isFavorite: boolean,
  type: string,
  bedrooms: number,
  maxAdults: number,
  goods: string[],
  host: {
    name: string,
    super: boolean,
    avatarUrl: string,
  },
  city: CityInterface,
  coords: number[],
}

export interface ReviewInterface {
  id: number,
  user: {
    name: string,
    avatarUrl: string,
    id: number,
    isPro: boolean,
  },
  rating: number,
  comment: string,
  date: string,
}

export interface AuthorizationInfoInterface {
  avatarUrl: string,
  email: string,
  id: number,
  isPro: boolean,
  name: string,
}
