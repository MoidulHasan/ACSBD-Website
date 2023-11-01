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
      <DataTable :value="orders" show-gridlines table-style="min-width: 50rem">
        <Column field="status" header="Status"></Column>
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
}
</style>
