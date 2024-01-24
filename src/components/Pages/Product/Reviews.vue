<template>
  <div>
    <h1>Reviews</h1>
  </div>
</template>

<script setup lang="ts">
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<{
  product: ProductI;
}>();
</script>

<style scoped></style>
