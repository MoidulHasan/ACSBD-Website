<script setup lang="ts">
import type { IBlog } from "~/pages/our-blogs/index.vue";

defineProps<{
  featured: IBlog;
}>();

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
  <div class="blog-card grid w-full">
    <div class="blog-image-container col-12 lg:col-6">
      <NuxtImg
        class="w-full feature-blog-img"
        :src="featured.image"
        :alt="featured.title"
      />
    </div>
    <div class="blog-details col-12 lg:col-6">
      <CommonBadge :label="featured.category" class="mt-3 mb-4" />
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
      <PagesBlogsBlogMetaInfos
        :time="featured.created_at"
        :comments="featured.comments"
        :views="featured.views"
      />
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
