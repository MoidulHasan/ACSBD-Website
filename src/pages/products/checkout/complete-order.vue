<script setup lang="ts">
definePageMeta({
  title: "Complete Order",
  name: "complete-order",
});
</script>

<template>
  <div class="container">
    <div
      class="mt-5 mb-5 lg:mb-8 flex flex-column align-items-center justify-content-center"
    >
      <svg
        width="130"
        height="130"
        viewBox="0 0 130 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1532_156024)">
          <path
            d="M64.999 130C29.101 130 0 100.899 0 64.999C0 29.101 29.101 0 64.999 0C100.897 0 129.998 29.101 129.998 64.999C130 100.899 100.897 130 64.999 130Z"
            fill="#1476BF"
          />
          <path
            d="M51.1672 98.0871L22.8477 69.7676L33.0366 59.5786L51.1672 77.7092L96.9633 31.9131L107.152 42.102L51.1672 98.0871Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1532_156024">
            <rect width="130" height="130" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div class="text-center checkout-container">
        <h3 class="font-heading-3 text-primary-color-navy-blue mb-4 mt-4">
          Your Order Is Completed!
        </h3>
        <p class="checkout-text text-regular-3 text-dark-gray-80 mb-4">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <NuxtLink to="/products">
          <CommonButton title="Continue Shopping" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.checkout-container {
  max-width: 715px;
}
</style>
