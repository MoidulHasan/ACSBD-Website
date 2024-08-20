<script setup lang="ts">
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<{
  type: string;
  product: ProductI;
}>();
</script>

<template>
  <div>
    <div v-if="type === 'DESCRIPTION'">
      <PagesProductDescription :product="product" />
    </div>
    <div v-else-if="type === 'ADDITIONAL INFORMATION'">
      <PagesProductAdditionalInformation :product="product" />
    </div>
    <div v-else-if="type === 'WARRANTY & SERVICES'">
      <PagesProductWarrantyService :product="product" />
    </div>
    <div v-else>
      <PagesProductReviews :product="product" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
