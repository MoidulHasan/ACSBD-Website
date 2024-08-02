export interface BreadCrumb {
  path: string;
  name?: string;
  title?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  discount_price: number;
  discount_percentage: number;
  rating: number;
  total_review: number;
  image: string;
  offerEndsAt: string;
}

export interface IContactMessage {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface Blog {
  title: string;
  views: number;
  imageUrl: string;
  content: string;
  published_date: string;
  comments: number;
  tag: string;
  id: string;
}

export interface ILocation {
  id?: number;
  location_type: string;
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  map_url: string;
}

export interface SwiperSliderBreakpointsI {
  [key: string]: {
    slidesPerView: number;
    spaceBetween: number;
  };
}

export interface IUser {
  id: number;
  name: string;
  user_name: string | null;
  email: string;
  email_verified_at: string;
  status: "active" | "inactive";
  telephone_number: null | string;
  address: null | string;
  created_at: string;
  updated_at: string | null;
  deleted_at: null | string;
}

export interface ICreateResponse {
  message: string;
}

export interface IAuthSuccessResponse {
  token: string;
  user: IUser;
  message: string;
}

// export interface WishListImageObj {
//   id?: number;
//   path?: string;
//   created_at?: string;
// }

export interface WishListProductPrice {
  base_price: string;
  final_price: string;
  product_id: string;
}

export interface ProductInWishList {
  id: number;
  product_slug: string;
  name: string;
  image: string;
  final_price: string | number;
  brand_id?: string;
  brand_name?: string;
  stock: string;
  created_at: string;
}

export interface WishListSuccessFetchResponse<T> {
  data: T[];
  message: string;
  status: boolean;
}
