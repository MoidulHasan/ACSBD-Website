<script lang="ts" setup>
import type {
  Category,
  CategoryDataResponse,
} from "~/contracts/api-contracts/categoryInterface";

const { $apiClient } = useNuxtApp();

const { data: productsCategories } = await useAsyncData<
  CategoryDataResponse,
  unknown,
  Category[]
>(`product-categories`, () => $apiClient(`/categories`), {
  transform: (response) => response.data,
});
</script>

<template>
  <div>filters</div>
  <div>
    {{ productsCategories }}
  </div>
</template>

<style scoped></style>
