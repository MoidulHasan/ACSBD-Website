import { defineNuxtPlugin } from "#app";
import ClientReviewCard from "~/components/Common/ClientReviewCard.vue";
import ServiceCard from "~/components/Common/ServiceCard.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("ClientReviewCard", ClientReviewCard);
  nuxtApp.vueApp.component("ServiceCard", ServiceCard);
});
