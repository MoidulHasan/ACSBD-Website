<script setup lang="ts">
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<{
  type: string;
  product: ProductI;
  productDesc: ProductI;
}>();
</script>

<template>
  <div>
    <div v-if="type === 'DESCRIPTION'">
      <PagesProductDescription :product="product" :product-desc="productDesc" />
    </div>
    <div v-else-if="type === 'ADDITIONAL INFORMATION'">
      <PagesProductAdditionalInformation
        :product="product"
        :product-desc="productDesc"
      />
    </div>
    <div v-else-if="type === 'WARRANTY & SERVICES'">
      <PagesProductWarrantyService
        :product="product"
        :product-desc="productDesc"
      />
    </div>
    <div v-else>
      <PagesProductReviews :product="product" :product-desc="productDesc" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
