<script setup lang="ts">
import type { Blog } from "~/contracts/api-contracts/BlogsInterfaces";

defineProps<{
  featured: Blog;
}>();
</script>

<template>
  <div class="blog-card grid w-full">
    <div class="blog-image-container col-12 lg:col-6">
      <NuxtImg
        class="w-full feature-blog-img"
        :src="featured.imageUrl"
        :alt="featured.title"
      />
    </div>
    <div class="blog-details col-12 lg:col-6">
      <CommonBadge :label="featured.tag" class="mt-3 mb-4" />
      <h1
        class="font-heading-3 text-primary-color-dark-gray mb-3 feature-blog-heading"
      >
        {{ featured.title }}
      </h1>
      <p
        class="feature-blog-content text-regular-3 text-primary-color-dark-gray mb-12px"
      >
        {{ featured.content }}
      </p>
      <NuxtLink :to="`our-blogs/${featured.id}`">
        <CommonExploreMoreButton class="mt-12px mb-4" />
      </NuxtLink>
      <PagesBlogsBlogMetaInfos
        :time="featured.published_date"
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
