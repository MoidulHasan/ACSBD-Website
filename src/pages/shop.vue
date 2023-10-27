<template>
  <div class="container grid">
    <div class="col-0 lg:col-2">filters</div>

    <div class="col-12 lg:col-10">
      <div>
        <img alt="AC Service BD Products" src="/images/shop-page-banner.jpeg" />
      </div>

      <div>
        {{ products }}

        <!--      <div>-->
        <!--        <div>-->
        <!--          <div v-for="product in products" :key="'product-' + product.id">-->
        <!--            {{ product }}-->
        <!--          </div>-->
        <!--        </div>-->
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getProducts } from "~/app/api/getProducts";

definePageMeta({
  title: "Shop",
});

const { data: products } = await getProducts();
</script>
