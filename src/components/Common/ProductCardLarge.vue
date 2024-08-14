<script lang="ts" setup>
import type { ProductMinimalI } from "~/contracts/api-contracts/ProductsInterfaces";

interface IProps {
  productData: ProductMinimalI;
}

const props = defineProps<IProps>();

const productRating = ref(props.productData.avg_ratings);
</script>

<template>
  <div class="product-card">
    <NuxtLink :to="`/products/${productData.slug}`">
      <div class="w-full grid">
        <div class="col-4">
          <div class="image-container">
            <img
              :alt="productData.name"
              :src="productData.image"
              class="product-image"
            />

            <div
              v-if="
                productData.price.base_price !== productData.price.final_price
              "
              class="discount-percentage"
            >
              {{ productData.price.discount_amount }}
              {{ productData.price.is_percent ? "%" : "Tk" }} Off
            </div>
          </div>
        </div>

        <div class="col-8">
          <div class="product-info">
            <Rating v-model="productRating" :cancel="false" readonly />

            <h3 class="product-name">
              {{ productData.name }}
            </h3>

            <div
              class="short-description"
              v-html="productData.short_description"
            />

            <p class="product-price-container">
              <span
                v-if="productData.price.discount_amount"
                class="product-price"
              >
                ৳ {{ productData.price.final_price }}
              </span>

              <span
                v-if="
                  productData.price.base_price !== productData.price.final_price
                "
                :class="[
                  {
                    'text-medium-2 text-primary-color-envitect-sam-blue':
                      !productData.price.discount_amount,
                  },
                  {
                    'text-regular-4 text-dark-gray-40 line-through':
                      productData.price.discount_amount,
                  },
                ]"
              >
                ৳ {{ productData.price.base_price }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  width: 100%;

  border-radius: 8px;
  background: var(--product-Front-color);

  transition: all 0.5s ease-in-out;

  cursor: pointer;

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
  }

  .product-info {
    padding: 12px;

    .short-description {
      color: #565656;
      font-size: 16px;
      font-weight: 400;

      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    :deep(.p-rating-icon) {
      color: #f2994a;
    }

    .product-name {
      margin-top: 8px;
      color: var(--dark-gray-100, #565656);

      font-size: 16px;
      font-style: normal;
      font-weight: 600;
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
