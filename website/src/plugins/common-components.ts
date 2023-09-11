import { defineNuxtPlugin } from "#app";
import ClientReviewCard from "~/components/Common/ClientReviewCard.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("ClientReviewCard", ClientReviewCard);
});
