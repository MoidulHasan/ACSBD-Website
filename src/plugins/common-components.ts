import { defineNuxtPlugin } from "#app";
import SingleBlogCard from "~/components/Pages/Home/Blog/SingleBlogCard.vue";
import ClientReviewCard from "~/components/Common/ClientReviewCard.vue";
import ServiceCard from "~/components/Common/ServiceCard.vue";
import ClientCard from "~/components/Common/ClientCard.vue";
import ProjectImageCard from "~/components/Common/ProjectImageCard.vue";
import ProjectCard from "~/components/Pages/RecentWorks/Card.vue";
import ProductCard from "~/components/Common/ProductCard.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("ClientReviewCard", ClientReviewCard);
  nuxtApp.vueApp.component("ServiceCard", ServiceCard);
  nuxtApp.vueApp.component("ClientCard", ClientCard);
  nuxtApp.vueApp.component("SingleBlogCard", SingleBlogCard);
  nuxtApp.vueApp.component("ProjectImageCard", ProjectImageCard);
  nuxtApp.vueApp.component("ProjectCard", ProjectCard);
  nuxtApp.vueApp.component("ProductCard", ProductCard);
});
