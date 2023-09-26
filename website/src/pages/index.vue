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

    <div class="section">
      <PagesHomeAtaGlance />
    </div>

    <div class="container section">
      <PagesHomeCustomerReviewSection />
    </div>
    <div>
      <PagesHomeTopBrandsSection />
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
