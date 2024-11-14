<script setup lang="ts">
import type {
  DataResponse,
  PaginationResponse,
} from '~/contracts/api-contracts/apiResponse'
import type { ProductMinimalI } from '~/contracts/api-contracts/ProductsInterfaces'

const props = defineProps<{
  currentProductSlug: string
  currentProductCategory: {
    name: string
    slug: string
  }
}>()

const { $apiClient } = useNuxtApp()

const {
  data: relatedProductData,
  status,
  error,
} = await useAsyncData<
  DataResponse<PaginationResponse<ProductMinimalI>>,
  unknown,
  PaginationResponse<ProductMinimalI>
>(
  `related-product-data-for-${props.currentProductCategory.slug}`,
  () =>
    $apiClient(`/products`, {
      query: {
        category: props.currentProductCategory.name,
        is_latest: true,
        per_page: 100,
      },
    }),
  {
    transform: response => response.data,
  },
)

const relatedProductsToShow = computed(() => {
  if (!relatedProductData.value?.data.length)
    return []
  return props.currentProductSlug
    ? relatedProductData.value?.data?.filter(product => product.slug !== props.currentProductSlug)
    : relatedProductData.value?.data
})
</script>

<template>
  <div class="">
    <CommonSliderSection
      v-if="relatedProductsToShow.length"
      :items="relatedProductsToShow"
      :number-of-scroll="1"
      :visible-item="4"
      slide-component="RelatedProductCard"
    >
      <template #header>
        <CommonSectionHeader class="mb-32px" header="Related Product" />
      </template>
    </CommonSliderSection>
  </div>
</template>

<style lang="scss" scoped></style>
