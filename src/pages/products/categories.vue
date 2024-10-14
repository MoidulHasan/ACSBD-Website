<script lang="ts" setup>
import { useProductCategories } from '~/composables/useProductCategories'
import { flattenCategoryData } from '~/utils/flatternCategoryData'

definePageMeta({
  title: 'Categories',
  name: 'categories',
})

const categories = await useProductCategories()
</script>

<template>
  <div class="container category-container">
    <div
      class="category-flex-container flex flex-wrap pt-3 pb-4 align-items-center justify-content-center lg:justify-content-start"
    >
      <div
        v-for="category in flattenCategoryData(categories)"
        :key="category.name"
        class="single-category bg-color-product-bg text-center flex flex-column align-items-center justify-content-around flex-wrap"
      >
        <img
          :alt="category.name"
          :src="category.image_url"
          class="category-image"
        >
        <h3 class="category-title text-semi-bold-5 text-dark-gray-80 mt-10px">
          {{ category.name }}
        </h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.category-container {
  min-height: 30rem;
  @include media-query(md) {
    min-height: 20rem;
  }
  @include media-query(sm) {
    min-height: 11rem;
  }

  .category-flex-container {
    gap: 15px;

    @include media-query(sm) {
      gap: 8px;
    }
  }

  .single-category {
    width: 227px;
    height: 140px;
    border-radius: 4px;
    @include media-query(sm) {
      border-radius: 2px;
      width: 104px;
      height: 64px;
    }
  }

  .category-image {
    max-height: 90px;
    max-width: 100%;

    @include media-query(sm) {
      max-width: 84.789px;
      max-height: 39.2px;
    }
  }

  .category-title {
    @include media-query(sm) {
      text-align: center;
      font-size: 8px;
      font-style: normal;
      font-weight: 600;
      line-height: 12px;
    }
  }
}
</style>
