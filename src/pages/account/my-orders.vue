<script setup lang="ts">
import { getOrders } from "~/app/api/getOrders";
import { formatDate } from "~/utils/formatDate";

definePageMeta({
  layout: "dashboard",
  title: "My Orders",
  name: "my-order",
});

const { data: orderData } = await getOrders();

const orders: Ref<any[] | null> = ref(orderData);

const showActions = ref(false);
const showActionByClick = () => {
  showActions.value = true;
};
</script>

<template>
  <div class="order-table-container">
    <h2 class="container-title font-heading-3 mb-3 md:mb-5">My Orders</h2>
    <div class="order-table hidden lg:block">
      <DataTable :value="orders">
        <Column header="Products">
          <template #body="slotProps">
            <PagesAccountMyOrdersProductContainer :product="slotProps.data" />
          </template>
        </Column>
        <Column header="Order No#">
          <template #body="slotProps">
            <h2 class="order_number">{{ slotProps.data.order_no }}</h2>
          </template>
        </Column>
        <Column header="Date:">
          <template #body="slotProps">
            <h2 class="font-heading-7 date-text">
              {{ formatDate(slotProps.data.timestamp) }}
            </h2>
          </template>
        </Column>

        <Column field="Status" header="Status">
          <template #body="slotProps">
            <h2
              class="status"
              :class="[
                slotProps.data.status.trim().toLowerCase() === 'cancelled'
                  ? 'cancelled'
                  : slotProps.data.status.trim().toLowerCase() === 'completed'
                  ? 'completed'
                  : '',
              ]"
            >
              {{ slotProps.data.status }}
            </h2>
          </template>
        </Column>
        <Column header="Action" class="cursor-pointer">
          <template #body="slotProps">
            <p class="" @click="showActionByClick">
              <i
                class="pi pi-ellipsis-h action-button"
                style="font-size: 2rem"
              ></i>
            </p>
            <LayoutsDashboardOtherOrderOptions />
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
      <div v-for="order in orders" :key="order.order_no">
        <div class="product-container-mobile mb-4">
          <h2 class="heading-7 mb-3 font-medium product-title-text">Product</h2>
          <PagesAccountMyOrdersProductContainer :product="order" />
          <ul class="order-items-container mt-26px">
            <li class="flex align-items-center order-item-list mb-14px">
              <p class="order-item-title heading-7 mr-12px">Order No#</p>
              <p class="order_number">{{ order.order_no }}</p>
            </li>
            <li class="flex align-items-center order-item-list mb-14px">
              <p class="order-item-title heading-7 mr-12px">Date:</p>
              <p class="font-heading-7 date-text">
                {{ formatDate(order.timestamp) }}
              </p>
            </li>
            <li class="flex align-items-center order-item-list mb-14px">
              <p class="order-item-title heading-7 mr-12px">Status</p>
              <p
                class="status"
                :class="[
                  order.status.trim().toLowerCase() === 'cancelled'
                    ? 'cancelled'
                    : order.status.trim().toLowerCase() === 'completed'
                    ? 'completed'
                    : '',
                ]"
              >
                {{ order.status }}
              </p>
            </li>
            <li class="flex align-items-center order-item-list">
              <p class="order-item-title heading-7 mr-12px">Action</p>
              <div
                class="mobile-action-container cursor-pointer"
                @click="showActionByClick"
              >
                <p class="action-pointer">
                  <i
                    class="pi pi-ellipsis-h action-button"
                    style="font-size: 2rem"
                  ></i>
                </p>
                <LayoutsDashboardOtherOrderOptions />
              </div>
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
  .order_number {
    color: var(--primary-color-envitect-sam-blue);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding: 2px 12px;
    background-color: var(--envitect-sam-blue-5);
    max-width: 102px;
  }
  .status {
    color: var(--navy-blue-60);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding: 2px 12px;
    background-color: #f0f5fd;
    max-width: 102px;
    border-radius: 2px;
  }
  .cancelled {
    background-color: #ffefea;
    color: #f00;
  }
  .completed {
    background-color: #f4fff5;
    color: #27ae60;
  }
  .product-title-text,
  .date-text,
  .order-item-title {
    color: var(--dark-gray-80);
  }
  .order-item-title {
    min-width: 86px;
  }

  .action-button {
    color: #a5aec2 !important;
  }

  .mobile-action-container {
    position: relative;
  }
  .cursor-pointer:hover + .other-actions {
    display: block;
    transition: 0.7s;
    animation: fadeInOut 0.7s ease;
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

:deep(
    .p-datatable
      .p-datatable-tbody
      > tr
      > td.cursor-pointer:hover
      .other-actions
  ) {
  display: block;
  animation: fadeInOut 0.7s ease;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(10px);
  } // Initial state
  100% {
    opacity: 1;
    transform: translateY(0);
  } // Final state
}
</style>
