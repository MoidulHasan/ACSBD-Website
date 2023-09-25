import { defineNuxtPlugin } from "#app";
import SingleBlogCard from "~/components/Pages/Home/Blog/SingleBlogCard.vue";
import ClientReviewCard from "~/components/Common/ClientReviewCard.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("ClientReviewCard", ClientReviewCard);
  nuxtApp.vueApp.component("SingleBlogCard", SingleBlogCard);
});
