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
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Textarea from "primevue/textarea";
import Checkbox from "primevue/checkbox";
import Rating from "primevue/rating";
import { defineNuxtPlugin } from "#app";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Galleria from "primevue/galleria";
import Dropdown from "primevue/dropdown";
import Divider from "primevue/divider";

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
  nuxtApp.vueApp.component("Calendar", Calendar);
  nuxtApp.vueApp.component("Accordion", Accordion);
  nuxtApp.vueApp.component("AccordionTab", AccordionTab);
  nuxtApp.vueApp.component("Textarea", Textarea);
  nuxtApp.vueApp.component("Checkbox", Checkbox);
  nuxtApp.vueApp.component("Galleria", Galleria);
  nuxtApp.vueApp.component("Card", Card);
  nuxtApp.vueApp.component("Dropdown", Dropdown);
  nuxtApp.vueApp.component("Divider", Divider);
});
