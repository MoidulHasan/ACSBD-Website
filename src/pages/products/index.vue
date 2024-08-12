<script lang="ts" setup>
import type {
  DataResponse,
  PaginationResponse,
} from "~/contracts/api-contracts/apiResponse";
import type { ProductMinimalI } from "~/contracts/api-contracts/ProductsInterfaces";

definePageMeta({
  title: "Products",
  name: "products",
});

useHead({
  title: "Products",
});

const { $apiClient } = useNuxtApp();

const { data: products } = await useAsyncData<
  DataResponse<PaginationResponse<ProductMinimalI>>,
  unknown,
  ProductMinimalI[]
>(`product-data`, () => $apiClient(`/products`), {
  transform: (response) => response.data.data,
});

const productViewBy = ref("grid");
const productSortBy = ref("timestamp");
</script>

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
          :total-products-found="products?.length ?? 0"
          class="my-16px w-full"
          @on-sort-by-option-change="(mode: string) => (productSortBy = mode)"
          @on-view-by-option-change="
            (optionValue: string) => (productViewBy = optionValue)
          "
        />

        <PagesShopProductsList
          :products="products || []"
          :sort-by="productSortBy"
          :view-by="productViewBy"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
