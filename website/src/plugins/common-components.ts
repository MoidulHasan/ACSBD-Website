import { defineNuxtPlugin } from "#app";
import ClientReviewCard from "~/components/Common/ClientReviewCard.vue";
import ClientCard from "~/components/Common/ClientCard.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("ClientReviewCard", ClientReviewCard);
  nuxtApp.vueApp.component("ClientCard", ClientCard);
});
