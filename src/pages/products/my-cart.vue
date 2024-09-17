<script setup lang="ts">
definePageMeta({
  title: "My Cart",
  name: "my-cart",
});

const store = useStore();
let cartedProduct;

if (process.client) {
  cartedProduct = store.cart;
}

const modifyCartProductQuantity = (id: number, quantity: number) => {
  store.modifyCartItems(id, quantity);
};
</script>

<template>
  <div class="container">
    <div class="mt-4 mb-5 lg:mb-8">
      <h2 class="font-heading-2 text-primary-color-navy-blue mb-4">
        View Cart
      </h2>
      <div class="grid">
        <ClientOnly>
          <div class="col-12 lg:col-8 cart">
            <div class="order-table hidden lg:block">
              <p v-if="!cartedProduct.length" class="text-center">
                Your Cart Is Empty
              </p>
              <DataTable v-if="cartedProduct.length" :value="cartedProduct">
                <Column header="Products">
                  <template #body="slotProps">
                    <div class="flex gap-3 flex-wrap align-items-center">
                      <NuxtImg
                        class="carted-prod-image flex align-items-center justify-content-center"
                        :src="slotProps.data.image"
                        :alt="slotProps.data.name"
                      />
                      <p class="text-semi-bold-5 text-primary-color-dark-gray">
                        {{ slotProps.data.name }}
                      </p>
                    </div>
                  </template>
                </Column>
                <Column header="Prices">
                  <template #body="slotProps">
                    <p class="text-semi-bold-5 text-primary-color-dark-gray">
                      {{ slotProps.data.price }}
                    </p>
                  </template>
                </Column>
                <Column header="QTY">
                  <template #body="slotProps">
                    <CommonQuantityInput
                      v-model="slotProps.data.quantity"
                      small
                      :stock="slotProps.data.stock"
                      @update:model-value="
                        modifyCartProductQuantity(
                          slotProps.data.id,
                          slotProps.data.quantity,
                        )
                      "
                    />
                  </template>
                </Column>
                <Column header="Subtotal">
                  <template #body="slotProps">
                    <div
                      class="flex align-items-center justify-content-between"
                    >
                      <p
                        class="text-semi-bold-5 text-primary-color-envitect-sam-blue"
                      >
                        ৳
                        {{
                          (
                            +slotProps.data.price * +slotProps.data.quantity
                          ).toLocaleString("en-IN")
                        }}
                      </p>
                      <i
                        class="pi pi-trash text-2xl ml-3 block cursor-pointer"
                        @click="store.deleteItemFromCart(slotProps.data.id)"
                      />
                    </div>
                  </template>
                </Column>
              </DataTable>
            </div>
            <div class="order-table-small blog lg:hidden">
              <p v-if="!cartedProduct.length" class="text-center">
                Your Cart Is Empty
              </p>
              <div v-else>
                <div
                  v-for="item in cartedProduct"
                  :key="item.id"
                  class="small-cart-item mb-3 p-3 flex justify-content-between gap-3"
                >
                  <NuxtImg
                    :src="item.image"
                    :alt="item.name"
                    class="small-cart-image"
                  />
                  <div class="small-product-detail flex-1">
                    <h3 class="flex justify-content-between">
                      <span
                        class="product-name mr-2 text-semi-bold-5 text-primary-color-dark-gray"
                        >{{ item.name }}</span
                      >
                      <span
                        class="product-delete-icon text-center bg-color-product-bg"
                      >
                        <i
                          class="pi pi-trash delete-icon cursor-pointer text-dark-gray-60"
                          @click="store.deleteItemFromCart(item.id)"
                        />
                      </span>
                    </h3>
                    <h4 class="text-dark-gray-80 text-semi-bold-6">
                      Brand: {{ item.brand }}
                    </h4>
                    <h4 class="text-dark-gray-80 text-semi-bold-6 pb-2">
                      <!--                      Capacity: {{ item.capacity }}-->
                    </h4>
                    <div
                      class="quantity-container flex flex-wrap align-items-center justify-content-between"
                    >
                      <CommonQuantityInput
                        v-model="item.quantity"
                        :stock="item.stock"
                        small
                        @update:model-value="
                          store.modifyCartItems(item.id, item.quantity)
                        "
                      />
                      <h4
                        class="text-semi-bold-1 text-primary-color-envitect-sam-blue"
                      >
                        ৳ {{ +item.price.final_price * item.quantity }}
                      </h4>
                    </div>
                  </div>
                </div>
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

.order-table {
  border-radius: 4px;
  overflow: hidden;

  :deep(.p-row-even) {
    background-color: var(--product-Front-color);
  }

  :deep(.p-row-odd) {
    background-color: var(--product-Front-color);
  }

  .carted-prod-image {
    height: 100px;
    width: 100px;
    border-radius: 4px;
    background-color: #fdfdfd;
    border: 0.5px solid #ededed;
  }
}

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

.order-table-small {
  .small-cart-item {
    border-radius: 4px;
    border: 1px solid var(--dark-gray-10);

    .small-cart-image {
      height: 100px;
      width: 100px;
      border-radius: 4px;
      background-color: #fdfdfd;
      border: 0.5px solid #ededed;
    }

    .product-name {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }

    .product-delete-icon {
      height: 24px !important;
      width: 24px !important;
      border-radius: 2px;

      .delete-icon {
        font-size: 14px;
        padding: 5px 5px;
      }
    }
  }
}
</style>
