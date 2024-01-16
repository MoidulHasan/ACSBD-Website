<script setup lang="ts">
import { getProducts } from "~/app/api/getProducts";
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const route = useRoute();

const { data: productsData } = await getProducts();
const singleProduct = ref({});
singleProduct.value = productsData.value.find((product) => {
  product.id === Number(route.params.id);
});

watch(singleProduct, () => {
  console.log(singleProduct.value);
});
</script>

<template>
  <div class="container">
    <div class="grid">
      <div class="col-12 lg:col-5">Image Slider</div>
      <div class="col-12 lg:col-7">App</div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
