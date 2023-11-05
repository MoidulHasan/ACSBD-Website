<script setup lang="ts">
import { getBrands } from "~/app/api/getBrands";
definePageMeta({
  title: "Brands",
  name: "brands",
});

const { data: brands } = await getBrands();
</script>

<template>
  <div class="container brand-container">
    <div
      class="brand-flex-container flex flex-wrap py-3 align-items-center justify-content-center lg:justify-content-start"
    >
      <div
        v-for="brand in brands"
        class="single-brand bg-envitect-sam-blue-5 border-envitect-sam-blue-20 text-center flex align-items-center justify-content-center flex-wrap"
      >
        <img :src="brand.img" :alt="brand.title" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brand-container {
  min-height: 30rem;
  .brand-flex-container {
    gap: 15px;
  }
  .single-brand {
    width: 227px;
    height: 100px;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
  }
}
</style>
