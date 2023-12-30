<script setup lang="ts">
import type { Blog } from "~/contracts/api-contracts/BlogsInterfaces";

defineProps<{
  blog: Blog;
}>();
</script>
<template>
  <div class="single-blog">
    <NuxtImg
      :src="blog.detailImage[1]"
      alt="blog.title"
      class="blog-image mb-3"
    />
    <PagesBlogsBlogMetaInfos
      :time="blog.published_date"
      :views="blog.views"
      :comments="blog.comments"
    />
    <h3 class="mt-5 mb-3 font-heading-3 text-primary-color-dark-gray">
      {{ blog.title }}
    </h3>
  </div>
</template>

<style scoped lang="scss">
.single-blog {
  .blog-image {
    width: 100% !important;
    max-height: 455px;
    border-radius: 4px;
  }
}
</style>
