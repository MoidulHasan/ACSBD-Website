<script lang="ts" setup>
import type { ImageResponse } from "~/contracts/api-contracts/bannerSliderInterface";

definePageMeta({
  title: "Home",
  layout: "default",
  name: "home-page",
});

const { $apiClient } = useNuxtApp();

const { data: bannerSliderImages } = await useAsyncData<ImageResponse>(
  "banner-and-slider-images",
  () => $apiClient(`/banner-and-sliders`),
);
</script>

<template>
  <div id="home-page">
    <PagesHomeHeroSlider
      v-if="bannerSliderImages?.slider"
      :sliders="bannerSliderImages?.slider"
    />

    <div class="container px-2 mt-2 md:mt-4">
      <PagesHomeBannerSection
        v-if="bannerSliderImages?.banner?.length"
        :banners="bannerSliderImages?.banner"
      />
    </div>

    <div class="container px-2 mt-2 md:mt-6">
      <PagesHomeServicesSection />
    </div>

    <div class="container mt-2 md:mt-6">
      <PagesHomeOurShopSection />
    </div>

    <div class="mt-2 md:mt-6">
      <PagesHomeClientsSection />
    </div>

    <div class="container px-2 section">
      <PagesHomeCoreValues />
    </div>

    <div class="section">
      <PagesHomeAtaGlance />
    </div>

    <div class="section px-2">
      <PagesHomeRecentWork />
    </div>

    <div class="container section px-2">
      <PagesHomeCustomerReviewSection />
    </div>

    <PagesHomeTopBrandsSection />

    <div class="container section px-2">
      <PagesHomeBlogSection />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.section {
  margin: 80px auto;

  @include media-query(sm) {
    margin: 32px auto;
  }
}
</style>
