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

const selectedPaymentMethod = ref("cod");
const checked = ref(false);

const toggleDeliveryOptions = (option: string) => {
  selectedPaymentMethod.value = option;
};

const edit = ref(false);
const date = ref(null);

const toggleEditOption = () => {
  edit.value = !edit.value;
};
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
                <Button class="edit-button" @click="toggleEditOption">
                  <img
                    class="mr-2"
                    alt="Edit"
                    src="@/assets/images/carbon_edit.svg"
                  />
                  <span>Edit Here</span>
                </Button>
              </div>
              <div class="personal-info-container bg-color-product-front p-6">
                <form @submit.prevent="">
                  <div class="details grid">
                    <div class="col-12">
                      <InputText
                        class="w-full text-input mb-2 font-heading-7 font-semibold"
                        placeholder="Dulal Hossain"
                        :disabled="!edit"
                        :class="{ ' cursor-not-allowed ': !edit }"
                      />
                    </div>
                    <div class="col-12">
                      <div class="p-inputgroup w-full mb-2">
                        <span class="p-inputgroup-addon">
                          <i class="pi pi-phone"></i>
                        </span>
                        <InputText
                          type="number"
                          class="text-input font-heading-7 font-semibold"
                          placeholder="014545454545454"
                          :disabled="!edit"
                          :class="{ ' cursor-not-allowed ': !edit }"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <InputText
                        class="w-full text-input mb-2 font-heading-7 font-semibold"
                        placeholder="Occation"
                        :disabled="!edit"
                        :class="{ ' cursor-not-allowed ': !edit }"
                      />
                    </div>
                    <div class="col-12">
                      <InputText
                        class="w-full text-input mb-2 font-heading-7 font-semibold"
                        placeholder="House 765"
                        :disabled="!edit"
                        :class="{ ' cursor-not-allowed ': !edit }"
                      />
                    </div>
                    <div class="col-12">
                      <InputText
                        class="w-full text-input mb-2 font-heading-7 font-semibold"
                        placeholder="District"
                        :disabled="!edit"
                        :class="{ ' cursor-not-allowed ': !edit }"
                      />
                    </div>
                    <div class="col-12 lg:col-6">
                      <InputText
                        class="w-full text-input font-heading-7 font-semibold"
                        placeholder="Area"
                        :disabled="!edit"
                        :class="{ ' cursor-not-allowed ': !edit }"
                      />
                    </div>
                    <div class="col-12 lg:col-6">
                      <InputText
                        class="w-full text-input font-heading-7 font-semibold"
                        placeholder="PostCode"
                        :disabled="!edit"
                        :class="{ ' cursor-not-allowed ': !edit }"
                      />
                    </div>
                    <div class="col-12 mt-4">
                      <Button
                        type="submit"
                        class="submit-button font-heading-7 font-semibold"
                        label="Submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-12 lg:col-4">
            <div class="cart-summary border-round-sm">
              <h3
                class="text-heading-4-semi-light-bold text-primary-color-envitect-sam-blue bg-color-product-bg p-3"
              >
                Order Summary
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
                  class="flex align-items-center justify-content-between text-regular-3 pb-3"
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
                <h4
                  class="flex align-items-center justify-content-between text-regular-3 pb-3"
                >
                  <span class="text-dark-gray-80">Delivery Charge</span>
                  <span
                    class="text-primary-color-envitect-sam-blue text-semi-bold-1"
                  >
                    ৳ 500
                  </span>
                </h4>
                <h4
                  v-if="true"
                  class="flex align-items-center justify-content-between text-regular-3 pb-3 subtotal-text"
                >
                  <span class="text-dark-gray-80"
                    >Promo Code:
                    <span
                      v-if="true"
                      class="text-primary-color-envitect-sam-blue"
                    >
                      AC1258AP</span
                    ></span
                  >
                  <span
                    class="text-primary-color-envitect-sam-blue text-semi-bold-1"
                  >
                    -৳ 500
                  </span>
                </h4>
                <div class="delivery-options-container mb-4 mt-3">
                  <div
                    class="flex align-items-center gap-3 delivery-option p-3 mb-3 border-round-sm"
                    :class="{
                      'bg-primary-color-white': selectedPaymentMethod !== 'cod',
                    }"
                    @click="toggleDeliveryOptions('cod')"
                  >
                    <i
                      class="block pi text-xl text-navy-blue-80"
                      :class="[
                        selectedPaymentMethod === 'cod'
                          ? 'text-primary-color-envitect-sam-blue pi-check-circle'
                          : 'text-navy-blue-80 pi-circle',
                      ]"
                    />
                    <div>
                      <h4
                        class="text-semi-bold-1"
                        :class="[
                          selectedPaymentMethod === 'cod'
                            ? 'text-primary-color-envitect-sam-blue'
                            : 'text-dark-gray-80',
                        ]"
                      >
                        Cash on Delivery
                      </h4>
                      <p class="semi-bold-5-light text-dark-gray-80">
                        Pay with cash upon delivery
                      </p>
                    </div>
                  </div>
                  <div
                    class="flex align-items-center gap-3 delivery-option p-3 mb-3 border-round-sm"
                    :class="{
                      'bg-primary-color-white':
                        selectedPaymentMethod !== 'online',
                    }"
                    @click="toggleDeliveryOptions('online')"
                  >
                    <i
                      class="block pi text-xl text-navy-blue-80"
                      :class="[
                        selectedPaymentMethod === 'online'
                          ? 'text-primary-color-envitect-sam-blue pi-check-circle'
                          : 'text-navy-blue-80 pi-circle',
                      ]"
                    />
                    <div>
                      <h4
                        class="text-semi-bold-1"
                        :class="[
                          selectedPaymentMethod === 'online'
                            ? 'text-primary-color-envitect-sam-blue'
                            : 'text-dark-gray-80',
                        ]"
                      >
                        Online Payment
                      </h4>
                    </div>
                  </div>
                </div>
                <div class="flex mb-3">
                  <Checkbox v-model="checked" :binary="true" />
                  <label class="ml-2 semi-bold-5-light text-dark-gray-80">
                    I have read and agree to the website terms & conditions
                  </label>
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
                <NuxtLink :to="checked ? '/products/checkout' : ''">
                  <CommonButton
                    title="Proceed To Checkout"
                    full-width
                    :disabled="!checked"
                  />
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

.edit-button {
  display: inline-flex;
  padding: 4px 16px;
  align-items: flex-start;
  gap: 8px;
  background-color: var(--primary-color-white);
  color: var(--navy-blue-80);
  border-radius: 2px;
  border: none !important;
}

.delivery-option {
  border: 1.3px solid var(--dark-gray-30);
  min-height: 80px;
}

.personal-info-container {
  .details {
    .text-input {
      padding: 12px 16px;
      color: var(--primary-color-dark-gray);
    }
  }
}
</style>
