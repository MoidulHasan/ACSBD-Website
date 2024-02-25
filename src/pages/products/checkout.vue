<script setup lang="ts">
definePageMeta({
  title: "Checkout",
  name: "checkout",
});

const store = useStore();
let cartedProduct;

if (process.client) {
  cartedProduct = store.cart;
}
</script>

<template>
  <div class="container">
    <div class="mt-4 mb-5 lg:mb-8">
      <h2 class="font-heading-2 text-primary-color-navy-blue mb-4">Checkout</h2>
      <div class="grid">
        <ClientOnly>
          <div class="col-12 lg:col-8 cart">
            <div class="checkout-address-summary">
              <div
                class="bg-color-product-bg p-3 flex align-items-center justify-content-between"
              >
                <h3
                  class="text-heading-4-semi-light-bold text-primary-color-envitect-sam-blue"
                >
                  Shipping Address
                </h3>
              </div>
            </div>
          </div>
          <div class="col-12 lg:col-4">
            <div class="cart-summary border-round-sm">
              <h3
                class="text-heading-4-semi-light-bold text-primary-color-envitect-sam-blue bg-color-product-bg p-3"
              >
                Cart Item Summary
              </h3>
              <div class="cart-detail p-3 bg-color-product-front">
                <h4
                  class="flex align-items-center justify-content-between text-regular-3 pt-2 pb-3"
                >
                  <span class="text-dark-gray-80">Products</span>
                  <span class="text-primary-color-dark-gray"
                    >{{ store.getTotalCartProducts() }} Pcs</span
                  >
                </h4>
                <h4
                  class="flex align-items-center justify-content-between text-regular-3 pb-3 subtotal-text"
                >
                  <span class="text-dark-gray-80">Subtotals</span>
                  <span
                    class="text-primary-color-envitect-sam-blue text-semi-bold-1"
                  >
                    ৳
                    {{
                      store.getTotalCartPrice().toLocaleString("en-IN")
                    }}</span
                  >
                </h4>
                <div class="promo-code-container mb-4">
                  <h4 class="font-heading-6 pt-3 pb-3 text-dark-gray-80">
                    Promo Code (If)
                  </h4>
                  <div class="flex-1 promoSearchBar w-full">
                    <div class="p-inputgroup flex-1 flex-wrap w-full">
                      <InputText
                        placeholder="Enter Promo Code ( If Applicable )"
                      />
                      <Button class="search-button" label="Submit" />
                    </div>
                  </div>
                </div>
                <h4
                  class="flex align-items-center justify-content-between font-heading-6-light-semi-bold pb-4 total-amount"
                >
                  <span class="text-dark-gray-80">Total Payments</span>
                  <span
                    class="text-primary-color-envitect-sam-blue font-heading-4-semi-bold"
                  >
                    ৳
                    {{
                      store.getTotalCartPrice().toLocaleString("en-IN")
                    }}</span
                  >
                </h4>
                <NuxtLink to="/products/checkout">
                  <CommonButton title="Proceed To Checkout" full-width />
                </NuxtLink>
              </div>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.cart-summary {
  overflow: hidden;
}

.subtotal-text {
  border-bottom: 1px solid var(--dark-gray-10);
}

:deep(.p-inputgroup .p-inputtext) {
  @include media-query(sm) {
    max-height: 38px;
  }
  @include media-query(lg) {
    max-height: 38px;
  }
}

:deep(.p-inputgroup .p-button) {
  @include media-query(sm) {
    max-height: 38px;
  }
  @include media-query(lg) {
    max-height: 38px;
  }
}

.search-button,
.search-button:hover {
  background-color: var(--primary-color-envitect-sam-blue);
  padding: 14px 32px;

  @include media-query(sm) {
    padding: 14px 16px;
  }
}
</style>
