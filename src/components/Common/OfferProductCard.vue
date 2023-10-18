<template>
  <div class="card-container">
    <div class="card-image flex justify-content-center align-items-center">
      <img :alt="name" :src="image" />
    </div>

    <div class="product-info flex flex-column">
      <p class="dark-gray-100 text-semi-bold-1">
        Black 1.5 Ton GMCC Rotary Compressor
      </p>

      <div class="price mt-2">
        <span class="discount-price text-semi-bold-1">
          TK {{ discount_percentage }}
        </span>

        <span
          class="dark-gray-40 line-through text-semi-bold-5 flex justify-content-center align-items-center"
        >
          TK {{ price }}
        </span>
      </div>

      <div class="flex gap-3 align-items-center mt-2">
        <div class="text-semi-bold-1 flex gap-2 align-items-center">
          <span>
            <img alt="star" src="~/assets/images/star.svg" />
          </span>

          <span>{{ rating }}</span>
        </div>

        <div class="review dark-gray-100 text-center text-regular-3">
          {{ total_review }} Reviews
        </div>
      </div>

      <hr class="divider" />

      <p class="text-semi-bold-1 dark-gray-100">Hurry UP !</p>
      <p class="text-regular-4 dark-gray-100">Offers end in:</p>

      <CommonTimeCounter :count-down-to-time="offerEndsAt" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Product } from "~/contracts/common";

defineProps<Product>();
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: row;

  min-width: 460px;
  max-width: 100%;
  min-height: 286px;
  flex-shrink: 0;

  border-radius: 8px;
  background: var(--product-Front-color);

  transition: all 0.5s ease-in-out;

  .card-image {
    width: 45%;

    img {
      max-width: 100%;
    }
  }

  .product-info {
    width: 55%;
    padding: 16px 12px;

    .price {
      display: flex;
      gap: 16px;

      .discount-price {
        color: var(--envitect-sam-blue-100);
      }
    }

    .divider {
      width: 100%;
      height: 0.5px;
      color: var(--dark-gray-20);
    }
  }
}

.card-container:hover {
  transform: scale(1.03);
}

@media only screen and (max-width: 600px) {
  .card-container {
    min-width: 328px;
    min-height: 204px;
    flex-shrink: 0;
  }
}
</style>
