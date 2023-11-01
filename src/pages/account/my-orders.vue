<script setup lang="ts">
import { getOrders } from "~/app/api/getOrders";

definePageMeta({
  layout: "dashboard",
  title: "My Orders",
});

const { data: orderData } = await getOrders();

const orders = ref(orderData);
</script>

<template>
  <div class="order-table-container">
    <h2 class="container-title font-heading-3 mb-5">My Orders</h2>
    <div class="order-table">
      <DataTable :value="orders">
        <Column header="Products">
          <template #body="slotProps">
            <div class="product-container flex flex-wrap justify-content-start">
              <div class="image-container flex-1 flex align-items-center justify-content-center">
                <img
                  class="product-image"
                  :alt="slotProps.data.name"
                  :src="slotProps.data.images[0]"
                />

              </div>
              <div
                class="product-detail flex flex-column justify-content-between flex-wrap flex-1"
              >
                <h2 class="product-title heading-8">
                  {{ slotProps.data.name }}
                </h2>
                <h2 class="">
                  <span class="heading-8 font-normal quantity-text">
                    Qty: {{ slotProps.data.quantity }}
                  </span>
                  <span class="heading-7 font-semibold price-text">
                    TK. {{ slotProps.data.price.discounted }}
                  </span>
                </h2>
              </div>
            </div>
          </template>
        </Column>
        <Column header="Order No#">
          <template #body="slotProps">
            <h2>{{slotProps.data.order_no}}</h2>
          </template>
        </Column>
        <Column header="Products"> </Column>

        <Column field="status" header="Status"></Column>
        <Column header="Action"> </Column>
      </DataTable>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-table-container {
  padding: 32px 60px;
  border-radius: 8px;
  background-color: var(--product-Front-color);

  .container-title {
    color: var(--navy-blue-80);
  }

  .product-container {
    gap: 12px;
    .image-container {
      max-height: 80px;
      max-width: 80px;
      border-radius: 4px;
      background-color: #f5f5f5;
      .product-image {
        //border-radius: 4px;
        width: 68px;
        height: 69.333px;
      }
    }
    .product-detail {
      max-width: 226px !important;
      .product-title {
        color: var(--primary-color-dark-gray);
        max-width: 226px !important;
      }
      .quantity-text {
        color: var(--primary-color-dark-gray);
        margin-right: 19px;
      }
      .price-text {
        color: var(--primary-color-envitect-sam-blue);
      }
    }
  }
}

:deep(.p-datatable .p-datatable-tbody > tr > td) {
  border-radius: 4px;
  border-top: 16px solid var(--product-Front-color);
  padding: 16px !important;
}
</style>
