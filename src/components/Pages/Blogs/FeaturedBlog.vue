<script setup lang="ts">
import type { IBlog } from '~/pages/our-blogs/index.vue'

defineProps<{
  featured: IBlog
}>()

// const { data: recentBlogs, error } = await useAsyncData(
//   `blogs-featured`,
//   () =>
//     $fetch("/api/proxy/blogs?is_latest&per_page=4", {
//       params: {
//         is_latest: true,
//         per_page: 4,
//       },
//     }),
// );
</script>

<template>
  <div class="blog-card grid px-2 md:px-0">
    <div class="blog-image-container col-12 lg:col-6 py-0 md:py-2">
      <NuxtImg
        class="w-full feature-blog-img"
        :src="featured.image"
        :alt="featured.title"
      />
    </div>
    <div class="blog-details col-12 lg:col-6">
      <div class="flex justify-content-between md:justify-content-start align-items-center pb-2 md:pb-0">
        <CommonBadge :label="featured.category" class="md:mt-3 md:mb-4 " />
        <span
          class="block md:hidden text-semi-bold-6 text-navy-blue-80 flex align-items-center"
        >
          <i class="pi pi-eye arrow-icon mr-4px inline-block" />
          <span class="inline-block">{{ featured.comments ?? 20 }} View(s)</span>
        </span>
      </div>

      <h1
        class="font-heading-3 text-primary-color-dark-gray mb-3 feature-blog-heading"
      >
        {{ featured.title }}
      </h1>
      <p
        class="feature-blog-content text-regular-3 text-primary-color-dark-gray mb-12px"
      >
        {{ featured.sub_title }}
      </p>
      <NuxtLink :to="`our-blogs/${featured.slug}`">
        <CommonExploreMoreButton class="mt-12px mb-4" />
      </NuxtLink>
      <div class="hidden md:block">
        <PagesBlogsBlogMetaInfos
          :time="featured.created_at"
          :comments="featured.comments"
          :views="featured.views"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog-card {
  .feature-blog-img {
    max-height: 382px;
    border-radius: 12px;

    @media (min-width: 1200px) {
      min-height: 382px;
    }
  }

  .feature-blog-heading {
    max-width: 624px;
  }

  .feature-blog-content {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
