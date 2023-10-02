<template>
  <div class="product-card">
    <div class="flex justify-content-center relative">
      <img :alt="name" :src="image" class="product-image" />
      <div class="discount-percentage">{{ discount_percentage }}% Off</div>
    </div>

    <div class="product-info">
      <Rating v-model="productRating" :cancel="false" readonly />

      <h3 class="product-name">
        {{ name }}
      </h3>

      <p class="product-price-container">
        <span v-if="discount_price" class="product-price">
          ৳ {{ discount_price }}
        </span>
        <span
          :class="[
            { 'product-price': !discount_price },
            { 'initial-price': discount_price },
          ]"
        >
          ৳ {{ price }}
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Product } from "~/contracts/common";

const props = defineProps<Product>();

const productRating = ref(props.rating);
</script>

<style lang="scss" scoped>
.product-card {
  width: 100%;
  min-height: 377px;

  border-radius: 8px;
  background: var(--product-Front-color);

  transition: all 0.5s ease-in-out;

  .product-image {
    height: 220px;
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
        color: var(--envitect-sam-blue-100);

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
  transform: scale(1.03);
}
</style>
