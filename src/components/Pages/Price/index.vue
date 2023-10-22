<template>
  <div
    v-for="(productsPrice, index) in productsPrices"
    :key="'Products Price-' + index"
  >
    <CommonProductPriceTable
      :name="productsPrice.name"
      :price="productsPrice.price"
      :unit="productsPrice.unit"
    />
  </div>
</template>

<script lang="ts" setup>
import { getProductsPrice } from "~/app/api/getProductsPrice";

definePageMeta({
  title: "Products Price",
});

const { data: productsPrices } = await getProductsPrice();
</script>
