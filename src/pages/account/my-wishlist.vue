<script setup lang="ts">
import { getWishlist } from "~/app/api/getWishlist";

definePageMeta({
  name: "my-wishlist",
  title: "My Orders",
});

const { data: wishData } = await getWishlist();

const wishLists = ref(wishData);
const formatDate = (inputDate: string) => {
  const inputDateObj = new Date(inputDate);
  const year = inputDateObj.getUTCFullYear();
  const month = inputDateObj.getUTCMonth();
  const day = inputDateObj.getUTCDate();

  // Convert month number to month name
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[month];

  // Convert day to include 'st', 'nd', 'rd', or 'th'
  let daySuffix: string;
  if (day >= 11 && day <= 13) {
    daySuffix = "th";
  } else {
    switch (day % 10) {
      case 1:
        daySuffix = "st";
        break;
      case 2:
        daySuffix = "nd";
        break;
      case 3:
        daySuffix = "rd";
        break;
      default:
        daySuffix = "th";
    }
  }
  return `${day}${daySuffix} ${monthName}, ${year}`;
};
</script>

<template>
  <div class="order-table-container">
    <h2 class="container-title font-heading-3 mb-3 md:mb-5">
      My Wishlist / Favourite
    </h2>
    <div class="order-table hidden lg:block">
      <DataTable :value="wishLists">
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
              {{ formatDate(slotProps.data.timestamp) }}
            </h2>
          </template>
        </Column>

        <Column header="Stock">
          <template #body="slotProps">
            <h2
              class="item-title font-heading-7"
              :class="[
                slotProps.data.stock === 'Out of stock' ? 'stock-out' : '',
              ]"
            >
              {{ slotProps.data.stock }}
            </h2>
          </template>
        </Column>
        <Column header="Action">
          <template #body="slotProps">
            <p>
              <span class="action-button-box mr-2">
                <i class="pi pi-eye action-button cursor-pointer" />
              </span>
              <span class="action-button-box mr-2">
                <i class="pi pi-shopping-cart action-button cursor-pointer" />
              </span>
              <span class="action-button-box">
                <i class="pi pi-trash action-button cursor-pointer" />
              </span>
            </p>
          </template>
        </Column>
      </DataTable>
      <div class="flex justify-content-center">
        <Button class="load-more-button mt-5"> Load More </Button>
      </div>
    </div>
    <!--    mobile content -->
    <div class="order-table-mobile block md:hidden">
      <Divider class="mobile-divider mb-3" />
      <div v-for="favorite in wishLists">
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
                {{ formatDate(favorite.timestamp) }}
              </p>
            </li>
            <li class="flex align-items-center order-item-list mb-14px">
              <p class="order-item-title font-heading-7 mr-12px">Stock</p>
              <p
                class="font-heading-7 item-title"
                :class="[favorite.stock === 'Out of stock' ? 'stock-out' : '']"
              >
                {{ favorite.stock }}
              </p>
            </li>
            <li class="flex align-items-center order-item-list">
              <p class="order-item-title font-heading-7 mr-12px">Action</p>
              <p>
                <span class="action-button-box mr-2">
                  <i class="pi pi-eye action-button cursor-pointer" />
                </span>
                <span class="action-button-box mr-2">
                  <i class="pi pi-shopping-cart action-button cursor-pointer" />
                </span>
                <span class="action-button-box">
                  <i class="pi pi-trash action-button cursor-pointer" />
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-content-center">
        <Button class="load-more-button mt-2"> Load More </Button>
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
