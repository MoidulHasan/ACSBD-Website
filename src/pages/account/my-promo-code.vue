<script setup lang="ts">
definePageMeta({
  name: "my-promo-code",
  title: "My Promo-codes",
});
const promoCode = ref(null);
</script>

<template>
  <div class="promo-container">
    <div class="mb-3 md:mb-5">
      <h2 class="container-title font-heading-3 mb-3">My Promo Code</h2>
      <p class="font-header-7 font-medium promo-sub-title">
        Simply enter your promo code at the top of this page and click the
        "Check code" button. Your promo code expiration date and details will
        display.
      </p>
    </div>
    <div
      class="promo-code-list-container flex align-items-center justify-content-between flex-wrap flex-column md:flex-row"
    >
      <div class="flex align-items-center justify-content-center mb-5 md:mb-0">
        <i class="pi pi-copy copy-icon cursor-pointer" />
        <h2 ref="promoCode" class="font-heading-3 promo-code ml-4">AC1258AP</h2>
      </div>
      <div class="social-medias flex align-items-center flex-wrap">
        <p class="font-header-7 font-semibold social-media-title">
          Share it on-
        </p>
        <div class="media-icons">
          <NuxtLink class="ml-3">
            <img class="media-icon" src="@/assets/images/facebook_svg.svg" />
          </NuxtLink>
          <NuxtLink class="ml-3">
            <img class="media-icon" src="@/assets/images/linkedin_svg.svg" />
          </NuxtLink>
          <NuxtLink class="ml-3">
            <img class="media-icon" src="@/assets/images/twitter_svg.svg" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "assets/styles/scss/base/mixins" as *;

.promo-container {
  min-height: 616px;
  padding: 32px 60px;
  border-radius: 8px;
  background-color: var(--product-Front-color);
  @include media-query(sm) {
    padding: 0;
    background-color: transparent;
    min-height: 200px !important;
  }

  .container-title {
    color: var(--navy-blue-80);
  }

  .promo-sub-title {
    color: var(--dark-gray-80);
  }

  .promo-code-list-container {
    padding: 24px 32px;
    border-radius: 8px;
    border: 1px solid #f5f5f5;
    background-color: var(--primary-color-white);
    box-shadow: 0px 2px 12px 0px rgba(216, 216, 216, 0.25);

    .copy-icon {
      min-height: 20px;
      min-width: 16px;
      color: var(--dark-gray-80);
    }

    .promo-code {
      color: var(--primary-color-envitect-sam-blue);
      letter-spacing: 2.8px;
      border-bottom: 2px dashed var(--primary-color-navy-blue);
    }

    .social-media-title {
      color: var(--navy-blue-80);
    }

    .media-icon {
      min-width: 24px !important;
      min-height: 24px !important;
    }
  }
}
</style>
