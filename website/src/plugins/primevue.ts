import PrimeVue from "primevue/config";
import Ripple from "primevue/ripple";
import Tooltip from "primevue/tooltip";
import StyleClass from "primevue/styleclass";
import ToastService from "primevue/toastservice";
import BadgeDirective from "primevue/badgedirective";
import ConfirmationService from "primevue/confirmationservice";

import Button from "primevue/button";
import Carousel from "primevue/carousel";
import InputText from "primevue/inputtext";
import Rating from "primevue/rating";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });

  nuxtApp.vueApp.use(ConfirmationService);
  nuxtApp.vueApp.use(ToastService);

  nuxtApp.vueApp.directive("tooltip", Tooltip);
  nuxtApp.vueApp.directive("ripple", Ripple);
  nuxtApp.vueApp.directive("badge", BadgeDirective);
  nuxtApp.vueApp.directive("styleclass", StyleClass);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Carousel", Carousel);
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Rating", Rating);
});
