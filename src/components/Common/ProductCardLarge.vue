<template>
  <div class="product-card">
    <NuxtLink class="w-full" :to="`/products/${slug}`">
      <div class="w-full grid">
        <div class="col-4">
          <div class="h-full flex justify-content-center relative">
            <img :alt="name" :src="images[0]" class="product-image" />
            <div v-if="price.discountPercentage" class="discount-percentage">
              {{ price.discountPercentage }}% Off
            </div>
          </div>
        </div>

        <div class="col-8">
          <div class="product-info">
            <h3 class="product-name">
              {{ name }}
            </h3>

            <Rating v-model="productRating" :cancel="false" readonly />

            <p class="product-price-container">
              <span v-if="price.discounted" class="product-price">
                ৳ {{ price.discounted }}
              </span>
              <span
                :class="[
                  { 'product-price': !price.discounted },
                  { 'initial-price': price.discounted },
                ]"
              >
                {{ price.currency }} {{ price.regular }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<ProductI>();

const productRating = ref(props.ratings.average);
</script>

<style lang="scss" scoped>
.product-card {
  width: 100%;

  border-radius: 8px;
  background: var(--product-Front-color);

  transition: all 0.5s ease-in-out;

  cursor: pointer;

  .product-image {
    max-width: 100%;

    vertical-align: bottom;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: opacity 150ms linear;
    user-select: none;
  }

  .discount-percentage {
    position: absolute;
    right: 12px;
    top: 12px;

    padding: 2px 12px;
    align-items: flex-start;
    gap: 8px;

    border-radius: 2px;
    background: var(--navy-blue-80);

    color: var(--primary-color-white);
    text-align: center;

    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }

  .product-image:hover {
    opacity: 0.8;
  }

  .product-info {
    padding: 12px;

    :deep(.p-rating-icon) {
      color: #f2994a;
    }

    .product-name {
      margin-top: 8px;
      color: var(--dark-gray-100, #565656);

      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }

    .product-price-container {
      margin-top: 10px;
      display: flex;
      align-items: center;
      gap: 8px;

      .product-price {
        color: var(--primary-color-envitect-sam-blue);

        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }

      .initial-price {
        color: var(--dark-gray-40);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        text-decoration-line: line-through;
      }
    }
  }
}

.product-card:hover {
  transform: scale(1.005);
}
</style>
