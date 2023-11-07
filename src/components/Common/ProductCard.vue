<template>
  <div class="product-card w-full bg-color-product-front">
    <div class="flex justify-content-center relative">
      <img :alt="name" :src="images[0]" class="product-image" />
      <div
        v-if="price.discountPercentage"
        class="discount-percentage text-center text-semi-bold-5 text-primary-color-white bg-navy-blue-80"
      >
        {{ price.discountPercentage }}% Off
      </div>
    </div>

    <div
      class="product-info flex flex-column justify-content-between px-12px pt-12px pb-16px"
    >
      <div>
        <Rating v-model="productRating" :cancel="false" readonly />

        <h3 class="mt-8px text-primary-color-dark-gray text-regular-3">
          {{
            name.slice(0, Math.min(name.length, 45)).trim() +
            (name.length > 45 ? "..." : "")
          }}
        </h3>
      </div>

      <p class="mt-8px flex align-items-center gap-8px">
        <span
          v-if="price.discounted"
          class="text-medium-2 text-primary-color-envitect-sam-blue"
        >
          ৳ {{ price.discounted }}
        </span>
        <span
          :class="[
            {
              'text-medium-2 text-primary-color-envitect-sam-blue':
                !price.discounted,
            },
            {
              'text-regular-4 text-dark-gray-40 line-through': price.discounted,
            },
          ]"
        >
          {{ price.currency }} {{ price.regular }}
        </span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<ProductI>();

const productRating = ref(props.ratings.average);
</script>

<style lang="scss" scoped>
.product-card {
  border-radius: 8px;
  transition: all ease-in-out 0.6s;
  cursor: pointer;

  .product-image {
    max-width: 100%;
    min-height: 220px;

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
    border-radius: 2px;
  }

  .product-image:hover {
    opacity: 0.8;
  }

  .product-info {
    :deep(.p-rating-icon) {
      color: var(--color-orange);
    }
  }
}

.product-card:hover {
  transform: scale(1.03);
}
</style>
