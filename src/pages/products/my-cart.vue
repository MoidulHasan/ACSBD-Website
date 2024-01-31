<script setup lang="ts">
definePageMeta({
  title: "My Cart",
  name: "my-cart",
});
</script>

<template>
  <div class="container">
    <div class="mt-4 mb-5 lg:mb-8">
      <h2 class="font-heading-2 text-primary-color-navy-blue mb-4">
        View Cart
      </h2>
      <div class="grid">
        <div class="col lg:col-8 cart">
          <!--          <table class="cart-table">-->
          <!--            <thead>-->
          <!--              <tr class="bg-color-product-bg text-navy-blue-80">-->
          <!--                <th class="px-4 py-20px font-heading-4-semi-light-bold">-->
          <!--                  Product-->
          <!--                </th>-->
          <!--                <th class="px-4 py-20px font-heading-4-semi-light-bold">-->
          <!--                  Price-->
          <!--                </th>-->
          <!--                <th class="px-4 py-20px font-heading-4-semi-light-bold">Qty</th>-->
          <!--                <th class="px-4 py-20px font-heading-4-semi-light-bold">-->
          <!--                  Subtotal-->
          <!--                </th>-->
          <!--              </tr>-->
          <!--            </thead>-->
          <!--            <tbody>-->
          <!--              <tr>-->
          <!--                <td></td>-->
          <!--              </tr>-->
          <!--            </tbody>-->
          <!--          </table>-->
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
