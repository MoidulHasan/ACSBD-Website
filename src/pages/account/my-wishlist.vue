<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { formatDate } from "~/utils/formatDate";
import type { ProductInWishList } from "~/contracts/common";
import { useWishListStore } from "#imports";

definePageMeta({
  name: "my-wishlist",
  title: "My Wishlist",
});

const store = useStore();
const wishListStore = useWishListStore();
const toast = useToast();

await useAsyncData<ProductInWishList[]>("wishlist-data", () =>
  wishListStore.fetchWishListProducts(),
);

const initialLength = ref(5);
const wishListToShow = computed(() => {
  return wishListStore.wishListedProduct.slice(0, initialLength.value);
});

const showMoreWishedProduct = () => {
  if (initialLength.value < wishListStore.wishListedProduct?.length) {
    initialLength.value += 5;
  }
};

const addProductsToCart = (product: ProductInWishList) => {
  if (process.client) {
    const isAlreadyExists = store.cart.findIndex(
      (cartedItem) => cartedItem.id === product.id,
    );
    if (isAlreadyExists === -1) {
      store.addToCart(product);
      store.deleteItemFromFav(product, true);
    } else {
      toast.add({
        severity: "info",
        summary: `${store.cart[isAlreadyExists]?.name} is already exists in you Cart`,
        life: 3000,
      });
    }
  }
};

const deleteProductFromWishlist = async (product: ProductInWishList) => {
  try {
    store.loading = true;
    const response = await wishListStore.deleteProductFromWishListBySlug(
      product.slug,
    );
    store.loading = false;

    toast.add({
      severity: "success",
      summary: "Deleted",
      detail: `${product.name} removed from your wishlist`,
      life: 3000,
    });
  } catch (error) {
    store.loading = false;

    toast.add({
      severity: "error",
      summary: error?.statusMessage ?? "Could not remove from wishlist",
      detail: error?.data?.error ?? "Unknown Issue Occurred",
      life: 3000,
    });
  }
};
</script>

<template>
  <div
    class="order-table-container"
    :class="{ 'flex flex-column': !wishListStore.wishListedProduct.length }"
  >
    <h2 class="container-title font-heading-3 mb-3 md:mb-5">
      My Wishlist / Favourite
    </h2>

    <div
      v-if="!wishListStore.wishListedProduct.length"
      class="empty-container flex-1 flex flex-column gap-4 align-items-center justify-content-center"
    >
      <CommonSvgEmptyBox height="200" width="240" />
      <h3 class="font-heading-4-semi-light-bold text-dark-gray-90">
        No Product added to your Wishlist!
      </h3>
    </div>
    <div v-else>
      <div class="order-table hidden lg:block">
        <DataTable :value="wishListToShow">
          <Column header="Products">
            <template #body="slotProps">
              <PagesAccountMyOrdersProductContainer :product="slotProps.data" />
            </template>
          </Column>
          <Column header="Brand">
            <template #body="slotProps">
              <h2 class="item-title font-heading-7">
                {{ slotProps.data.brand_id }}
              </h2>
            </template>
          </Column>
          <Column header="Date:">
            <template #body="slotProps">
              <h2 class="font-heading-7 item-title">
                {{ formatDate(slotProps.data.created_at) }}
              </h2>
            </template>
          </Column>

          <Column header="Stock">
            <template #body="slotProps">
              <h2
                class="item-title font-heading-7"
                :class="[
                  slotProps.data.stock !== 'In Stock' ? 'stock-out' : '',
                ]"
              >
                {{ slotProps.data.stock }}
              </h2>
            </template>
          </Column>
          <Column header="Action">
            <template #body="slotProps">
              <p>
                <NuxtLink
                  :to="`/products/${slotProps.data.id}`"
                  class="action-button-box mr-2"
                >
                  <i
                    class="pi pi-eye action-button cursor-pointer"
                    title="See Details"
                  />
                </NuxtLink>
                <span
                  class="action-button-box mr-2"
                  @click="addProductsToCart(slotProps.data)"
                >
                  <i
                    class="pi pi-shopping-cart action-button cursor-pointer"
                    title="Add to Cart"
                  />
                </span>
                <span
                  class="action-button-box"
                  @click="deleteProductFromWishlist(slotProps.data)"
                >
                  <i
                    class="pi pi-trash action-button cursor-pointer"
                    title="Delete from Wishlist"
                  />
                </span>
              </p>
            </template>
          </Column>
        </DataTable>
        <div class="flex justify-content-center">
          <Button
            v-if="
              wishListToShow?.length !== wishListStore.wishListedProduct?.length
            "
            class="load-more-button mt-5"
            @click="showMoreWishedProduct"
          >
            Load More
          </Button>
        </div>
      </div>
      <!--    mobile content -->
      <div class="order-table-mobile block md:hidden">
        <Divider class="mobile-divider mb-3" />
        <div v-for="favorite in wishListToShow" :key="favorite.slug">
          <div class="product-container-mobile mb-4">
            <h2 class="font-heading-7 mb-3 font-medium product-title-text">
              Product
            </h2>
            <PagesAccountMyOrdersProductContainer :product="favorite" />
            <ul class="order-items-container mt-26px">
              <li class="flex align-items-center order-item-list mb-14px">
                <p class="order-item-title font-heading-7 mr-12px">Brand</p>
                <p class="font-heading-7 item-title">{{ favorite.brand_id }}</p>
              </li>
              <li class="flex align-items-center order-item-list mb-14px">
                <p class="order-item-title font-heading-7 mr-12px">Date:</p>
                <p class="font-heading-7 item-title">
                  {{ formatDate(favorite.created_at) }}
                </p>
              </li>
              <li class="flex align-items-center order-item-list mb-14px">
                <p class="order-item-title font-heading-7 mr-12px">Stock</p>
                <p
                  class="font-heading-7 item-title"
                  :class="[favorite.stock !== 'In Stock' ? 'stock-out' : '']"
                >
                  {{ favorite.stock }}
                </p>
              </li>
              <li class="flex align-items-center order-item-list">
                <p class="order-item-title font-heading-7 mr-12px">Action</p>
                <p>
                  <NuxtLink
                    :to="`/product/${favorite.slug}`"
                    class="action-button-box mr-2"
                  >
                    <i
                      class="pi pi-eye action-button cursor-pointer"
                      title="See Details"
                    />
                  </NuxtLink>
                  <span
                    class="action-button-box mr-2"
                    @click="addProductsToCart(favorite)"
                  >
                    <i
                      class="pi pi-shopping-cart action-button cursor-pointer"
                      title="Add to Cart"
                    />
                  </span>
                  <span
                    class="action-button-box"
                    @click="deleteProductFromWishlist(favorite)"
                  >
                    <i
                      class="pi pi-trash action-button cursor-pointer"
                      title="Remove form Wishlist"
                    />
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-content-center">
          <Button
            v-if="
              wishListToShow?.length !== wishListStore.wishListedProduct?.length
            "
            class="load-more-button mt-2"
            @click="showMoreWishedProduct"
          >
            Load More
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "assets/styles/scss/base/mixins" as *;

.order-table-container {
  min-height: 616px;
  padding: 32px 60px;
  border-radius: 8px;
  background-color: var(--product-Front-color);
  @include media-query(sm) {
    padding: 0px;
    background-color: transparent;
  }

  .container-title {
    color: var(--navy-blue-80);
  }

  .product-title-text,
  .item-title,
  .order-item-title {
    color: var(--dark-gray-80);
  }

  .stock-out {
    color: var(--color-danger);
  }

  .order-item-title {
    min-width: 86px;
  }

  .action-button-box {
    width: 24px;
    height: 24px;
    text-align: center;
    border-radius: 4px;
    transition: 0.5s;

    &:hover {
      box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }

  .action-button {
    width: 24px;
    color: #a5aec2 !important;
  }

  .mobile-divider {
    background-color: #e8ebf0;
  }

  .product-container-mobile {
    padding: 16px;
    border: 1px solid #f5f5f5;
  }

  .order-item-list {
    margin-bottom: 14px;
  }

  .load-more-button {
    color: var(--primary-color-envitect-sam-blue);
    background-color: var(--primary-color-white);
    border-radius: 6px;
    padding: 12px 48px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    outline: none !important;
    border: 1px solid var(--primary-color-envitect-sam-blue);

    &:hover,
    &:active {
      color: var(--primary-color-envitect-sam-blue);
      background-color: var(--primary-color-white);
      outline: none !important;
      border: 1px solid var(--primary-color-envitect-sam-blue);
    }
  }
}

:deep(.p-datatable .p-datatable-tbody > tr > td) {
  border-radius: 4px;
  border-top: 16px solid var(--product-Front-color);
  padding: 16px !important;
}

.empty-container {
  place-items: center;
}
</style>
