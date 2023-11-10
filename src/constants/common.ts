import type { SwiperSliderBreakpointsI } from "~/contracts/common";

export const responsiveOptions = [
  {
    breakpoint: 1199,
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: 991,
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: 767,
    numVisible: 1,
    numScroll: 1,
  },
];

export const swiperSliderBreakpoints: SwiperSliderBreakpointsI = {
  "360": {
    slidesPerView: 2,
    spaceBetween: 8,
  },
  "768": {
    slidesPerView: 3,
    spaceBetween: 8,
  },
  "992": {
    slidesPerView: 4,
    spaceBetween: 8,
  },
  "1200": {
    slidesPerView: 5,
    spaceBetween: 16,
  },
  "1440": {
    slidesPerView: 6,
    spaceBetween: 16,
  },
};
