<script setup lang="ts">
import { getProducts } from "~/app/api/getProducts";
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";
import { useStore } from "~/stores/index.ts";

interface CartedProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  brand: string;
  capacity: string;
  quantity: number;
}

const route = useRoute();

const { data: productsData } = await getProducts();

const singleProductData = computed<ProductI>(() => {
  return productsData.value.find((product) => {
    return product.id === Number(route.params.id);
  });
});

useHead({
  title: singleProductData.value.name,
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

const value = ref(10);
const favorite = ref(false);
const store = useStore();

const toggleFavorite = (product: CartedProduct) => {
  favorite.value = !favorite.value;
  if (favorite.value) {
    addToFav(product);
  } else {
    store.deleteItemFromFav(product);
  }
};

const quantity = ref(1);

const addToCart = (product: ProductI) => {
  const { id, name, images, price, brand, attributes } = product;
  const modifiedProduct: CartedProduct = {
    id,
    name,
    image: images[0],
    price: price.discounted ?? price.regular,
    brand,
    capacity: attributes.capacity,
    quantity: quantity.value,
  };
  store.addToCart(modifiedProduct);
};

function addToFav(product: ProductI) {
  const { id, name, images, price, brand, attributes } = product;
  const modifiedProduct: CartedProduct = {
    id,
    name,
    image: images[0],
    price: price.discounted ?? price.regular,
    brand,
    capacity: attributes.capacity,
    quantity: quantity.value,
  };
  store.addToFavorite(modifiedProduct);
}

onMounted(() => {
  if (process.client) {
    const favoriteProduct = store.favorites.find(
      (product) => product.id === singleProductData.value.id,
    );
    if (favoriteProduct) {
      favorite.value = !!favoriteProduct;
    }
  }
});
</script>

<template>
  <div class="container single-product">
    <div class="grid mt-3 mb-6">
      <div class="col-12 lg:col-5">
        <PagesProductImageGallerySlider :images="singleProductData.images" />
      </div>
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
            class="text-regular-3 text-primary-color-dark-gray flex flex-column meta-info gap-1"
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
              >৳{{ singleProductData.price.regular }}</span
            >
          </h1>
          <p class="text-medium-2 text-dark-gray-80 my-4">
            Promotions:
            <span
              v-if="singleProductData.price.discountPercentage"
              class="discount-container text-primary-color-navy-blue ml-4 text-semi-bold-1"
            >
              Get upto {{ singleProductData.price.discountPercentage }}% off
            </span>
          </p>
          <p
            class="text-medium-2 text-dark-gray-80 mb-3 flex align-items-center"
          >
            Installment:
            <span
              class="text-primary-color-navy-blue ml-4 flex align-items-center"
            >
              <i class="pi pi-calendar text-2xl mr-2" />
              <span>Upto 12 months, 3000/- per month </span>
            </span>
          </p>
          <!--          quantity button -->
          <div class="mb-4 flex align-items-center flex-wrap quantity-wrapper">
            <p class="text-medium-2 text-dark-gray-80 mr-4 lg:mr-6">
              Quantity:
            </p>
            <CommonQuantityInput v-model="quantity" :stock="100" />
          </div>
          <div class="flex align-items-center flex-wrap gap-3 mb-3">
            <CommonButton
              to="/"
              title="Buy Now"
              text-color="text-primary-color-envitect-sam-blue"
              background="bg-primary-color-white"
            />
            <ClientOnly>
              <CommonButton
                title="Add to Card"
                @click="addToCart(singleProductData)"
              />
            </ClientOnly>

            <i
              :class="[
                'pi',
                'text-6xl',
                favorite
                  ? 'pi-heart-fill text-color-danger'
                  : 'pi-heart text-primary-color-dark-gray',
              ]"
              @click="toggleFavorite(singleProductData)"
            />
          </div>
          <p class="text-medium-2 text-dark-gray-80">
            Product SKU:
            <span class="text-semi-bold-1">
              {{ singleProductData.model }}
            </span>
          </p>
          <div
            class="social-medias text-dark-gray-80 bg-color-product-front border-round-md px-3 py-12px flex flex-wrap align-items-center gap-3 mt-3"
          >
            <p class="text-medium-2">Share:</p>
            <div class="flex gap-3 mt-1">
              <NuxtLink><i class="pi pi-facebook text-2xl" /></NuxtLink>
              <NuxtLink><i class="pi pi-twitter text-2xl" /></NuxtLink>
              <NuxtLink><i class="pi pi-linkedin text-2xl" /></NuxtLink>
              <NuxtLink><i class="pi pi-instagram text-2xl" /></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <PagesProductDetailDescription :product="singleProductData" />
    </div>
    <div class="mt-5 lg:mt-8">
      <PagesProductRelatedProducts />
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

  .discount-container {
    border-radius: 4px;
    border: 1px solid var(--envitect-sam-blue-5);
    padding: 0.5rem 1.5rem;
  }

  .quantity-wrapper {
    .quantity-button-wrapper {
      :deep(.p-inputnumber-input) {
        max-width: 4.187rem;
      }

      :deep(.p-inputnumber-button) {
        width: 4.125rem;
      }
    }
  }

  .social-medias {
    max-width: 379px;
  }
}
</style>
