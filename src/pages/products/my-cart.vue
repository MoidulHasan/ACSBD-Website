<script setup lang="ts">
definePageMeta({
  title: "My Cart",
  name: "my-cart",
});

// const cart = ref([{}, {}, {}]);
</script>

<template>
  <div class="container">
    <div class="mt-4 mb-5 lg:mb-8">
      <h2 class="font-heading-2 text-primary-color-navy-blue mb-4">
        View Cart
      </h2>
      <div class="grid">
        <div class="col lg:col-8 cart">
          <!--          <div class="order-table hidden lg:block">-->
          <!--            <DataTable :value="orders">-->
          <!--              <Column header="Products">-->
          <!--                <template #body="slotProps">-->
          <!--                  &lt;!&ndash;                  <PagesAccountMyOrdersProductContainer :product="slotProps.data" />&ndash;&gt;-->
          <!--                  {{ slotProps.data }}-->
          <!--                </template>-->
          <!--              </Column>-->
          <!--              <Column header="Order No#">-->
          <!--                <template #body="slotProps">-->
          <!--                  <h2 class="order_number">{{ slotProps.data.order_no }}</h2>-->
          <!--                </template>-->
          <!--              </Column>-->
          <!--              <Column header="Date:">-->
          <!--                <template #body="slotProps">-->
          <!--                  <h2 class="font-heading-7 date-text">-->
          <!--                    {{ formatDate(slotProps.data.timestamp) }}-->
          <!--                  </h2>-->
          <!--                </template>-->
          <!--              </Column>-->
          <!--            </DataTable>-->
          <!--            <div class="flex justify-content-center">-->
          <!--              <Button class="load-more-button mt-5"> Load More</Button>-->
          <!--            </div>-->
          <!--          </div> -->
        </div>
        <div class="col lg:col-4"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  .cart-table {
    border-spacing: 0 !important;
    border-radius: 4px;
  }
}
</style>
