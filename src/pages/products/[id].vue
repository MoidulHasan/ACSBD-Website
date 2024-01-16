<script setup lang="ts">
import { getProducts } from "~/app/api/getProducts";
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const route = useRoute();

const { data: productsData } = await getProducts();

const singleProductData = computed<ProductI>(() => {
  return productsData.value.find((product) => {
    return product.id === Number(route.params.id);
  });
});

const showReviewNumbers = (count: number) => {
  if (count >= 0) {
    if (count < 10) {
      return `0${count} Review(s)`;
    }
    return `${count} Review(s)`;
  }
  return "0 Review";
};
const isAvailableProduct = (isInStock: boolean) => {
  return isInStock ? "In Stock" : "Out of Stock";
};
</script>

<template>
  <div class="container single-product">
    <div class="grid mt-3">
      <div class="col-12 lg:col-5">Image Slider</div>
      <div class="col-12 lg:col-7">
        <div class="product-summary">
          <h1 class="product-title font-heading-4-semi-bold">
            {{ singleProductData.name }}
          </h1>
          <div class="product-stock-rating flex align-items-center flex-wrap">
            <p
              class="pr-2 md:pr-5 text-medium-2 text-color-primary-dark-gray lg:pt-1"
            >
              Available:
              <span
                :class="[
                  'product-stock',
                  singleProductData.stock.inStock
                    ? 'text-color-success'
                    : 'text-color-danger',
                ]"
              >
                {{ isAvailableProduct(singleProductData.stock.inStock) }}
              </span>
            </p>
            <div class="product-rating flex flex-wrap align-items-center">
              <Rating
                v-model="singleProductData.ratings.average"
                :cancel="false"
                readonly
              />
              <p
                class="pl-2 lg:pt-1 text-semi-bold-5 text-primary-color-navy-blue"
              >
                {{ showReviewNumbers(singleProductData.ratings.count) }}
              </p>
            </div>
          </div>
          <p
            class="text-regular-3 text-primary-color-dark-gray flex flex-column meta-info"
          >
            <span> Brand: {{ singleProductData.brand }} </span>
            <span> Model: {{ singleProductData.model }} </span>
            <span> Color: {{ singleProductData.attributes.acType }} </span>
            <span>
              Capacity: {{ singleProductData.attributes.capacity }} ({{
                singleProductData.attributes.BTU
              }})
            </span>
            <span
              >Type Air Conditioner:
              {{ singleProductData.attributes.acType }}</span
            >
            <span
              >Compressor:
              {{ singleProductData.attributes.compressorType }}</span
            >
            <span>Energy Saving</span>
          </p>
          <h1 class="product-price">
            <span class="font-heading-3 text-primary-color-envitect-sam-blue">
              ৳{{ singleProductData.price.discounted }}
            </span>
            <span
              class="font-heading-3-thin product-previous-price text-dark-gray-60 line-through"
              >৳{{ singleProductData.price.discounted }}</span
            >
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-summary {
  .product-title {
    margin-bottom: 0.75rem;
    max-width: 44.0625rem;
  }

  .product-stock-rating {
    margin-bottom: 0.75rem;
  }

  .product-rating {
    :deep(.p-rating-icon) {
      color: var(--color-orange);
    }
  }

  .meta-info {
    margin-bottom: 0.75rem;
  }

  .product-previous-price {
    margin-left: 20px;
  }
}
</style>
