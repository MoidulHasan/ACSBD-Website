<script lang="ts" setup>
import type {
  DataResponse,
  PaginationResponse,
} from "~/contracts/api-contracts/apiResponse";
import type { ProductMinimalI } from "~/contracts/api-contracts/ProductsInterfaces";
import type { CategoryDataResponse } from "~/contracts/api-contracts/categoryInterface";
import type { FilterItem } from "~/contracts/common";
import {
  collectAllValues,
  findPriceRange,
  generateFilterItems,
} from "~/utils/common";

definePageMeta({
  title: "Products",
  name: "products",
});

useHead({ title: "Products" });

const { $apiClient } = useNuxtApp();

const { data: products } = await useAsyncData<
  DataResponse<PaginationResponse<ProductMinimalI>>,
  unknown,
  ProductMinimalI[]
>(`product-data`, () => $apiClient(`/products`), {
  transform: (response) => response.data.data,
});

const { data: categories } = await useAsyncData<
  CategoryDataResponse,
  unknown,
  FilterItem[]
>(`category-data`, () => $apiClient(`/categories`), {
  transform: (response) => generateFilterItems(response.data),
});

const productViewBy = ref("grid");
const productSortBy = ref("timestamp");
const priceMaxMinRange = findPriceRange(products.value || []);
const priceRangeFilter = ref(priceMaxMinRange);

const filterCategories = computed(() => {
  return categories.value ? collectAllValues(categories.value) : [];
});

const filteredProducts = computed(() => {
  return products.value?.filter((product) => {
    const isInCategory = filterCategories.value.length
      ? filterCategories.value.includes(product.category_id)
      : true;

    const productPrice = parseFloat(product.price.final_price);

    const isInPriceRange =
      productPrice >= priceRangeFilter.value[0] &&
      productPrice <= priceRangeFilter.value[1];

    return isInCategory && isInPriceRange;
  });
});
</script>

<template>
  <div class="container">
    <div class="w-full pt-16px pb-80px grid">
      <div class="col-0 lg:col-2">
        <PagesShopFIlterContainer header="Filter Results By">
          <PagesShopProductFilter
            v-if="categories"
            :collapsed-first-option="false"
            :filter-options="categories"
            :is-filter-top="true"
          />
        </PagesShopFIlterContainer>

        <PagesShopFIlterContainer class="mt-4" header="Prices">
          <PagesShopRangeFilter
            v-model="priceRangeFilter"
            :max="priceMaxMinRange[1]"
            :min="priceMaxMinRange[0]"
          />
        </PagesShopFIlterContainer>
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
          :total-products-found="filteredProducts?.length ?? 0"
          class="my-16px w-full"
          @on-sort-by-option-change="(mode: string) => (productSortBy = mode)"
          @on-view-by-option-change="
            (optionValue: string) => (productViewBy = optionValue)
          "
        />

        <PagesShopProductsList
          :products="filteredProducts || []"
          :sort-by="productSortBy"
          :view-by="productViewBy"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
