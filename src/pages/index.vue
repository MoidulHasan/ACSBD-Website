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
    <PagesHomeHeroSlider :sliders="bannerSliderImages.slider" />
    <div class="container mt-2 md:mt-4">
      <PagesHomeBannerSection :banners="bannerSliderImages.banner" />
    </div>
    <div class="container px-2 mt-5 md:mt-6">
      <PagesHomeServicesSection />
    </div>
    <div class="container mt-5 md:mt-6">
      <!--      <PagesHomeOurShopSection />-->
    </div>
    <div class="mt-5 md:mt-6">
      <PagesHomeClientsSection />
    </div>

    <div class="container section">
      <PagesHomeCoreValues />
    </div>

    <div class="section">
      <PagesHomeAtaGlance />
    </div>

    <div class="section">
      <PagesHomeRecentWork />
    </div>

    <div class="container section">
      <PagesHomeCustomerReviewSection />
    </div>

    <PagesHomeTopBrandsSection />

    <div class="container section">
      <PagesHomeBlogSection />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  margin: 80px auto;
}
</style>
