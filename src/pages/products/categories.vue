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
      class="category-flex-container flex flex-wrap py-3 align-items-center justify-content-center lg:justify-content-start"
    >
      <div
        v-for="category in categories"
        class="single-category bg-color-product-bg text-center flex flex-column justify-content-around flex-wrap"
      >
        <img :src="category.img" :alt="category.title" />
        <h3 class="category-title text-semi-bold-5 text-dark-gray-80 mt-10px">
          {{ category.title }}
        </h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-container {
  min-height: 30rem;
  .category-flex-container {
    gap: 15px;
  }
  .single-category {
    width: 227px;
    height: 140px;
    padding: 12px 28px;
    border-radius: 4px;
  }
}
</style>
