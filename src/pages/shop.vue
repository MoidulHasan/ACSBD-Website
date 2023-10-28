<template>
  <div class="container">
    <div class="w-full pt-16px pb-80px grid">
      <div class="col-0 lg:col-2">
        <PagesShopProductFilter />
      </div>

      <div class="col-12 lg:col-10">
        <div class="w-full">
          <img
            alt="AC Service BD"
            class="w-full"
            src="/images/shop-page-banner.jpeg"
          />
        </div>

        <PagesShopProductListHeader
          :total-products-found="productsData?.length ?? 0"
          class="my-16px w-full"
          @on-sort-by-option-change="(mode: string) => (productSortBy = mode)"
          @on-view-by-option-change="
            (optionValue: string) => (productViewBy = optionValue)
          "
        />
        <PagesShopProductsList
          :products="productsData"
          :sort-by="productSortBy"
          :view-by="productViewBy"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getProducts } from "~/app/api/getProducts";

definePageMeta({
  title: "Shop",
});

const { data: productsData } = await getProducts();

const productViewBy = ref("grid");
const productSortBy = ref("timestamp");
</script>

<style lang="scss" scoped></style>
