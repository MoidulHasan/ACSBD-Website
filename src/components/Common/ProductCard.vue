<script lang="ts" setup>
import type { ProductMinimalI } from "~/contracts/api-contracts/ProductsInterfaces";

interface IProps {
  productData: ProductMinimalI;
}

const props = defineProps<IProps>();


const priceInt = (price: string) => {
  const splitedPrice = price.split(".");

  return splitedPrice.length ? splitedPrice[0] : price;
};

const productRating = ref(props.productData.avg_ratings ?? 0);
</script>

<template>
  <NuxtLink :to="`/products/${productData.slug}`">
    <div class="product-card w-full bg-color-product-front">
      <div class="image-container">
        <img
          :alt="productData.name"
          :src="productData.image"
          class="product-image"
        />

        <div
          v-if="productData.price.base_price !== productData.price.final_price"
          class="discount-percentage text-center text-semi-bold-5 text-primary-color-white bg-navy-blue-80"
        >
          {{ productData.price.discount_amount }}
          {{ productData.price.is_percent ? "%" : "Tk" }} Off
        </div>
      </div>

      <div class="product-info-container px-12px pt-12px pb-16px">
        <div>
          <Rating v-model="productRating" :cancel="false" readonly />

          <h3
            class="product-title mt-8px text-primary-color-dark-gray text-regular-4"
          >
            {{ productData.name }}
          </h3>
        </div>

        <p class="mt-8px flex align-items-center gap-8px">
          {{ productData.price.final_price }}
          <!--          <span-->
          <!--            v-if="productData.price.discount_amount"-->
          <!--            class="text-caption-regular-1 md:text-medium-2 text-primary-color-envitect-sam-blue"-->
          <!--          >-->
          <!--            ৳ {{ priceInt(productData.price.final_price) }}-->
          <!--          </span>-->
          <!--          <span-->
          <!--            v-if="-->
          <!--              productData.price.base_price !== productData.price.final_price-->
          <!--            "-->
          <!--            :class="[-->
          <!--              {-->
          <!--                'text-medium-2 text-primary-color-envitect-sam-blue':-->
          <!--                  !productData.price.discount_amount,-->
          <!--              },-->
          <!--              {-->
          <!--                'text-regular-4 text-dark-gray-40 line-through':-->
          <!--                  productData.price.discount_amount,-->
          <!--              },-->
          <!--            ]"-->
          <!--          >-->
          <!--            ৳ {{ priceInt(productData.price.base_price) }}-->
          <!--          </span>-->
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.product-card {
  border-radius: 8px;
  transition: all ease-in-out 0.6s;
  cursor: pointer;
  height: 368px;

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 220px;

    .product-image {
      max-width: 100%;
      max-height: 100%;

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
  }

  .product-info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .product-title {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    :deep(.p-rating-icon) {
      color: var(--color-orange);
    }
  }
}

.product-card:hover {
  transform: scale(1.03);
}
</style>
