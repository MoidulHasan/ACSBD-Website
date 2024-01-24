<script setup lang="ts">
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<{
  product: ProductI;
}>();
</script>

<template>
  <div>
    <h1>Hello</h1>
    {{ product }}
  </div>
</template>

<style lang="scss" scoped></style>
