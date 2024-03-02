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

export interface SwiperSliderBreakpointsI {
  [key: string]: {
    slidesPerView: number;
    spaceBetween: number;
  };
}
