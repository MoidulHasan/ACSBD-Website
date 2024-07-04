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
