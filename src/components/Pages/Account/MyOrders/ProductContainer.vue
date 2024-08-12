<script setup lang="ts">
import type { ProductInWishList } from "~/contracts/common";

defineProps<{
  product: ProductInWishList;
}>();
</script>

<template>
  <div class="product-container flex flex-wrap justify-content-start">
    <div
      class="image-container flex-1 flex align-items-center justify-content-center"
    >
      <img class="product-image" :alt="product.name" :src="product.image" />
    </div>
    <div
      class="product-detail flex flex-column justify-content-between flex-wrap flex-1"
    >
      <h2 class="product-title heading-8">
        {{ product.name }}
      </h2>
      <h2 class="">
        <!--        <span class="heading-8 font-normal quantity-text">-->
        <!--          Qty: {{ product.quantity }}-->
        <!--        </span>-->
        <span class="font-heading-7 font-semibold price-text">
          TK. {{ product.final_price }}
        </span>
      </h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-container {
  gap: 12px;

  .image-container {
    max-height: 80px;
    max-width: 80px;
    border-radius: 4px;
    background-color: #f5f5f5;

    .product-image {
      width: 68px;
      height: 69.333px;
    }
  }

  .product-detail {
    max-width: 226px !important;

    .product-title {
      color: var(--primary-color-dark-gray);
      max-width: 226px !important;
    }

    .quantity-text {
      color: var(--primary-color-dark-gray);
      margin-right: 19px;
    }

    .price-text {
      color: var(--primary-color-envitect-sam-blue);
    }
  }
}
</style>
