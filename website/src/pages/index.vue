<template>
  <div>
    <PagesHomeCustomerReviewSection />

    <div class="mt-8 pt-8 mb-8 pb-8">
      <h1 class="text-center mb-4">Common Service Card</h1>
      <CommonServiceCard />
      <div class="my-8">
        <ServicesSection />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ServicesSection from "~/components/Pages/Home/ServicesSection.vue";
</script>

<style scoped></style>
