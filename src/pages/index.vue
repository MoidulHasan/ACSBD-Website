<template>
  <div>
    <PagesHomeHeroSlider />
    <div class="container mt-2 md:mt-4">
      <PagesHomeBannerSection />
    </div>
    <div class="container mt-5 md:mt-6">
      <PagesHomeServicesSection />
    </div>
    <div class="container mt-5 md:mt-6">
      <PagesHomeOurShopSection />
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

    <div class="container section">
      <PagesHomeCustomerReviewSection />
    </div>

    <PagesHomeTopBrandsSection />

    <div class="container section">
      <PagesHomeBlogSection />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: "Home",
  layout: "default",
  name: "home-page",
});
</script>

<style lang="scss" scoped>
.section {
  margin: 80px auto;
}
</style>
