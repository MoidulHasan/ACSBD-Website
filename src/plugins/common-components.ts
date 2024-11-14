import { defineNuxtPlugin } from '#app'

import ClientCard from '~/components/Common/ClientCard.vue'
import ClientReviewCard from '~/components/Common/ClientReviewCard.vue'
import ProductCard from '~/components/Common/ProductCard.vue'
import ProjectImageCard from '~/components/Common/ProjectImageCard.vue'
import RelatedProductCard from '~/components/Common/RelatedProductCard.vue'
import ServiceCard from '~/components/Common/ServiceCard.vue'
import BlogCard from '~/components/Pages/Home/Blog/BlogCard.vue'
import ProjectCard from '~/components/Pages/RecentWorks/Card.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('ClientReviewCard', ClientReviewCard)
  nuxtApp.vueApp.component('ServiceCard', ServiceCard)
  nuxtApp.vueApp.component('ClientCard', ClientCard)
  nuxtApp.vueApp.component('BlogCard', BlogCard)
  nuxtApp.vueApp.component('ProjectImageCard', ProjectImageCard)
  nuxtApp.vueApp.component('ProjectCard', ProjectCard)
  nuxtApp.vueApp.component('ProductCard', ProductCard)
  nuxtApp.vueApp.component('RelatedProductCard', RelatedProductCard)
})
