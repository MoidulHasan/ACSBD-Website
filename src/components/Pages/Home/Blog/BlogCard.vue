<script lang="ts" setup>
defineProps<{
  title: string
  image: string
  views: string
  description: string
  category: string
  slug: string
  sub_title: string
}>()
</script>

<template>
  <div class="blog-card-container">
    <div class="blog-card flex flex-column">
      <div class="blog-image-container ">
        <NuxtImg class="blog-image" :src="image" alt="blog-image" />
      </div>
      <div class="blog-description flex flex-column flex-grow-1 justify-content-between">
        <div class="blog-details flex-grow-1">
          <div class="tags-and-views flex justify-content-between ">
            <p class="text-navy-blue-80 font-heading-8">
              {{ category }}
            </p>
            <p class="flex align-items-center gap-2 text-dark-gray-80">
              <i class="pi pi-eye views-icon" />
              <span class="text-semi-bold-6-light ">{{ views }} view(s)</span>
            </p>
          </div>
          <h4 class="blog-title text-primary-color-dark-gray text-semi-bold-1- pb-12px">
            {{ title }}
          </h4>
          <p class="blog-subtitle text-dark-gray-80 text-regular-4">
            {{ sub_title }}
          </p>
        </div>
        <NuxtLink class="text-primary-color-dark-gray text-semi-bold-5 flex align-items-center gap-2 pt-2" :to="{ name: 'blog-description', params: { blogSlug: slug } }">
          Explore More
          <i class="pi pi-arrow-right blog-explore-icon" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.blog-card-container {
  padding: .5rem;
  .blog-card {
    height: 524px;
    border-radius: 4px;
    overflow: hidden;
    background: var(--product-Front-color, #f9f9f9);
    .blog-image-container {
      width: 100%;
      .blog-image {
        width: 100%;
        height: 305px;
        object-fit: cover;
      }
    }
    .blog-description {
      padding: .75rem;
      .tags-and-views {
        padding-bottom: 13px;
      }
      .blog-subtitle {
        display: -webkit-box;
        max-width: 100%;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
