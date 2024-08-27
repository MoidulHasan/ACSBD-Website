<script setup lang="ts">
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<{
  product: ProductI;
}>();
const productRating = computed(() => {
  return Math.round(props.product.avg_ratings ?? 0);
});
const ratings = ref([5, 4, 3, 2, 1]);
</script>

<template>
  <div class="rating-section">
    <h1 class="font-heading-4-semi-bold text-primary-color-navy-blue mb-6">
      Ratings & Reviews of {{ product.name }}
    </h1>
    <div
      class="login-section flex flex-column flex-wrap align-items-center justify-content-center bg-color-product-bg border-round-lg py-85px mb-85px"
    >
      <CommonButton
        class="mb-3"
        title="Log In"
        background="bg-envitect-sam-blue-5"
        text-color="text-primary-color-envitect-sam-blue"
      />
      <p class="text-medium-2 text-primary-color-dark-gray">
        For submit your review, you need to login first.
      </p>
    </div>
    <div
      class="rating-summary flex flex-column md:flex-row align-items-center justify-content-between lg:justify-content-start gap-5 lg:gap-7"
    >
      <div class="flex flex-column gap-3">
        <h2 class="font-heading-2">
          <span class="text-primary-color-envitect-sam-blue">{{
            product.avg_ratings ?? 0
          }}</span>
          / 5
        </h2>
        <Rating v-model="productRating" :cancel="false" readonly />
        <p class="text-dark-gray-80 text-heading-5-semi-bold">
          {{ product.review_details?.length }} Ratings
        </p>
      </div>
      <div class="rating-bar">
        <PagesProductReviewRatingBar
          v-for="rating in ratings"
          :key="rating"
          :rating="rating"
          class="flex align-items-center gap-4 mb-3"
        />
      </div>
    </div>
    <div class="product-reviews mt-6">
      <h1 class="font-heading-3 text-primary-color-navy-blue mb-12px">
        Product Reviews
      </h1>
      <div class="customer-review">
        <!--        <PagesProductCustomerReview :reviews="product.reviews" /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rating-section {
  .login-section {
    border: 1px dashed var(--primary-color-envitect-sam-blue);
  }
}
</style>
