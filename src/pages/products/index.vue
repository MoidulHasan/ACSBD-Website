<script lang="ts" setup>
import type {
  DataResponse,
  PaginationResponse,
} from "~/contracts/api-contracts/apiResponse";
import type { ProductMinimalI } from "~/contracts/api-contracts/ProductsInterfaces";
import type { CategoryDataResponse } from "~/contracts/api-contracts/categoryInterface";
import type { FilterItem } from "~/contracts/common";
import { generateFilterItems } from "~/utils/common";

definePageMeta({
  title: "Products",
  name: "products",
});

useHead({ title: "Products" });

const { $apiClient } = useNuxtApp();

const currentPage = ref<number>(1);
const productViewBy = ref("grid");
const productSortBy = ref("latest");
const priceMinMaxRange = [0, 100000];
const priceRangeFilter = ref(priceMinMaxRange);
const products = ref<ProductMinimalI[]>([]);
const showFilterModal = ref(false);

const filterCategories = computed(() =>
  categories.value ? collectAllValues(categories.value) : [],
);

const { data: categories } = await useAsyncData<
  CategoryDataResponse,
  unknown,
  FilterItem[]
>(`category-data`, () => $apiClient(`/categories`), {
  transform: (response) => generateFilterItems(response.data),
});

// const { data: attributes } = await useAsyncData<
//   DataResponse<Attribute[]>,
//   unknown,
//   Attribute[]
// >(`attributes-data`, () => $apiClient(`/attributes`), {
//   transform: (response) => response.data,
// });
//
// const filterAttributes = computed(() =>
//   attributes.value ? collectAllValues(categories.value) : [],
// );

const {
  data: productsData,
  status,
  refresh: refreshProductsData,
} = await useAsyncData<
  DataResponse<PaginationResponse<ProductMinimalI>>,
  unknown,
  PaginationResponse<ProductMinimalI>
>(
  `product-data`,
  () =>
    $apiClient(`/products`, {
      query: {
        page: currentPage.value,
        min_price: priceRangeFilter.value[0],
        max_price: priceRangeFilter.value[1],
        category: filterCategories.value,
        is_latest: productSortBy.value === "latest",
        order_by:
          productSortBy.value.split(".")[0] === "price"
            ? productSortBy.value.split(".")[1]
            : undefined,
      },
    }),
  {
    transform: (response) => response.data,
  },
);

products.value = productsData.value?.data ?? [];

const handleProductSortByChange = (sortBy: string) => {
  productSortBy.value = sortBy;
};

const loadMoreProducts = async () => {
  if (productsData.value?.has_more_page) {
    currentPage.value += 1;
    await refreshProductsData();
  }
};

watch(
  () => productsData.value?.current_page,
  () => {
    if (!productsData.value?.data.length) return;

    products.value =
      productsData.value?.current_page === 1
        ? productsData.value?.data
        : [...products.value, ...productsData.value?.data];
  },
);

watch([priceRangeFilter, filterCategories, productSortBy], async () => {
  currentPage.value = 1;
  await refreshProductsData();
});
</script>

<template>
  <div class="container">
    <div
      class="flex justify-content-center align-content-center p-0 mt:pt-16px pb-80px grid"
    >
      <div class="col-0 lg:col-2 hidden md:block">
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
            :max="priceMinMaxRange[1]"
            :min="priceMinMaxRange[0]"
          />
        </PagesShopFIlterContainer>
      </div>

      <Sidebar
        v-model:visible="showFilterModal"
        position="bottom"
        style="height: auto"
      >
        <div class="p-2">
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
              :max="priceMinMaxRange[1]"
              :min="priceMinMaxRange[0]"
            />
          </PagesShopFIlterContainer>
        </div>
      </Sidebar>

      <div class="col-12 lg:col-10">
        <div class="w-full">
          <img
            alt="AC Service BD"
            class="w-full"
            src="/images/shop-page-banner.jpeg"
          />
        </div>

        <PagesShopProductListHeader
          :total-products-found="productsData?.total ?? 0"
          class="my-16px w-full"
          @on-sort-by-option-change="handleProductSortByChange"
          @on-view-by-option-change="
            (optionValue: string) => (productViewBy = optionValue)
          "
          @on-filter-button-click="showFilterModal = true"
        />

        <PagesShopProductsList
          :disable-load-more-button="!productsData?.has_more_page"
          :is-loading="status === 'pending'"
          :products="products || []"
          :sort-by="productSortBy"
          :view-by="productViewBy"
          @load-more-items="loadMoreProducts"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
