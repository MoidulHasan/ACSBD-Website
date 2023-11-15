<template>
  <div>
    <div class="section">
      <PagesAboutUs />
    </div>
    <div class="section">
      <PagesAboutMissionVision />
    </div>
    <div class="section">
      <PagesAboutMakingTechnology />
    </div>

    <div class="section">
      <PagesHomeCoreValues />
    </div>
    <div class="section">
      <PagesHomeAtaGlance />
    </div>
    <div class="section">
      <PagesHomeCustomerReviewSection />
    </div>
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: "About",
});
</script>
<style lang="scss" scoped>
.section {
  margin: 100px auto;
}
</style>
