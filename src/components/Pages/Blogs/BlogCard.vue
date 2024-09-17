<script setup lang="ts">
import type { IBlog } from "~/pages/our-blogs/index.vue";

defineProps<{
  blog: IBlog;
}>();
</script>

<template>
  <div class="blog bg-color-product-front">
    <NuxtImg :src="blog.image" :alt="blog.title" class="blog-img w-full" />
    <div class="blog-details p-12px">
      <p class="flex align-items-center justify-content-between mb-13px">
        <span class="text-semi-bold-5 text-envitect-sam-blue-80">
          {{ blog.category }}
        </span>
        <span
          class="text-semi-bold-6 text-navy-blue-80 flex align-items-center"
        >
          <i class="pi pi-eye arrow-icon mr-4px inline-block" />
          <span class="inline-block">{{ blog.comments ?? 20 }} View(s)</span>
        </span>
      </p>
      <h3
        class="text-semi-bold-1 text-primary-color-navy-blue mb-12px blog-title"
      >
        {{ blog.title }}
      </h3>
      <p class="blog-content text-semi-bold-6 text-dark-gray-80 mb-12px">
        {{ blog.sub_title }}
      </p>
      <NuxtLink :to="`our-blogs/${blog.slug}`">
        <CommonExploreMoreButton class="mb-2" text="text-semi-bold-5" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blog {
  max-height: 524px;
  border-radius: 4px;

  .blog-img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    max-height: 307px !important;
    min-height: 300px !important;
  }

  .blog-details {
    .arrow-icon {
      font-size: 22px;
    }

    .blog-title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .blog-content {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
