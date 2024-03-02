<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { getWishlist } from "~/app/api/getWishlist";
import { formatDate } from "~/utils/formatDate";

const toast = useToast();

definePageMeta({
  name: "my-wishlist",
  title: "My Orders",
});
const store = useStore();
const { data: wishData } = await getWishlist();

const wishLists = ref(wishData);

const modifyCartProductQuantity = (id: number, quantity: number) => {
  store.modifyCartItems(id, quantity);
};

interface FavProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  brand: string;
  capacity: string;
  quantity: number;
  stock: number;
  timeStamp: string;
}

const addProductsToCart = (product: FavProduct) => {
  store.addToCart(product);
  store.deleteItemFromFav(product);
  toast.add({
    severity: "success",
    summary: `${product.name} is added to Cart`,
    life: 3000,
  });
};
</script>

<template>
  <div class="order-table-container">
    <h2 class="container-title font-heading-3 mb-3 md:mb-5">
      My Wishlist / Favourite
    </h2>

    <div
      v-if="!store.favorites.length"
      class="flex align-items-center justify-content-center"
    >
      <h3 class="font-heading-4 text-dark-gray-90">
        No Product added to your Wishlist!
      </h3>
    </div>
    <div v-else>
      <div class="order-table hidden lg:block">
        <DataTable :value="store.favorites">
          <Column header="Products">
            <template #body="slotProps">
              <PagesAccountMyOrdersProductContainer :product="slotProps.data" />
            </template>
          </Column>
          <Column header="Brand">
            <template #body="slotProps">
              <h2 class="item-title font-heading-7">
                {{ slotProps.data.brand }}
              </h2>
            </template>
          </Column>
          <Column header="Date:">
            <template #body="slotProps">
              <h2 class="font-heading-7 item-title">
                {{ formatDate(slotProps.data.timeStamp) }}
              </h2>
            </template>
          </Column>

          <Column header="Stock">
            <template #body="slotProps">
              <h2
                class="item-title font-heading-7"
                :class="[slotProps.data.stock < 1 ? 'stock-out' : '']"
              >
                {{ slotProps.data.stock ? "In Stock" : "Out of Stock" }}
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
                  @click="store.deleteItemFromFav(slotProps.data)"
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
          <Button class="load-more-button mt-5"> Load More</Button>
        </div>
      </div>
      <!--    mobile content -->
      <div class="order-table-mobile block md:hidden">
        <Divider class="mobile-divider mb-3" />
        <div v-for="favorite in store.favorites">
          <div class="product-container-mobile mb-4">
            <h2 class="font-heading-7 mb-3 font-medium product-title-text">
              Product
            </h2>
            <PagesAccountMyOrdersProductContainer :product="favorite" />
            <ul class="order-items-container mt-26px">
              <li class="flex align-items-center order-item-list mb-14px">
                <p class="order-item-title font-heading-7 mr-12px">Brand</p>
                <p class="font-heading-7 item-title">{{ favorite.brand }}</p>
              </li>
              <li class="flex align-items-center order-item-list mb-14px">
                <p class="order-item-title font-heading-7 mr-12px">Date:</p>
                <p class="font-heading-7 item-title">
                  {{ formatDate(favorite.timeStamp) }}
                </p>
              </li>
              <li class="flex align-items-center order-item-list mb-14px">
                <p class="order-item-title font-heading-7 mr-12px">Stock</p>
                <p
                  class="font-heading-7 item-title"
                  :class="[favorite.stock < 1 ? 'stock-out' : '']"
                >
                  {{ favorite.stock ? "In Stock" : "Out of Stock" }}
                </p>
              </li>
              <li class="flex align-items-center order-item-list">
                <p class="order-item-title font-heading-7 mr-12px">Action</p>
                <p>
                  <NuxtLink
                    :to="`/product/${favorite.id}`"
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
                    @click="store.deleteItemFromFav(favorite)"
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
          <Button class="load-more-button mt-2"> Load More</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "assets/styles/scss/base/mixins" as *;

.order-table-container {
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
</style>
