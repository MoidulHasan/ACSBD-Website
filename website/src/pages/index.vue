<template>
  <div>
    <div class="container section">
      <PagesHomeOurShopSection />
    </div>

    <div class="section">
      <PagesHomeAtaGlance />
    </div>

    <div class="container section">
      <PagesHomeCustomerReviewSection />
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
