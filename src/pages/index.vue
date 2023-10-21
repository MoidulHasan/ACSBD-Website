<template>
  <div>
    <div>
      <PagesHomeHeroSlider />
    </div>
    <div class="container mt-5">
      <PagesHomeBannerSection />
    </div>
    <div>
      <PagesHomeServicesSection />
    </div>
    <div class="container section">
      <PagesHomeOurShopSection />
    </div>
    <div>
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
    <div>
      <PagesHomeTopBrandsSection />
    </div>
    <div class="container section">
      <PagesHomeBlogSection />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "AC Service BD",
});
</script>

<style lang="scss" scoped>
.section {
  margin: 100px auto;
}
</style>
