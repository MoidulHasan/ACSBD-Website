<script setup lang="ts">
import { getAcCategories } from "~/app/api/getAcCategories.ts";

definePageMeta({
  title: "Categories",
  name: "categories",
});

const { data: categories } = await getAcCategories();
</script>

<template>
  <div class="container category-container">
    <div
      class="category-flex-container flex flex-wrap pt-3 pb-4 align-items-center justify-content-center lg:justify-content-start"
    >
      <div
        v-for="category in categories"
        class="single-category bg-color-product-bg text-center flex flex-column justify-content-around flex-wrap"
      >
        <img class="category-image" :src="category.img" :alt="category.title" />
        <h3 class="category-title text-semi-bold-5 text-dark-gray-80 mt-10px">
          {{ category.title }}
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
