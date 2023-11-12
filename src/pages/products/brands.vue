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
      class="brand-flex-container flex flex-wrap pt-3 pb-4 md:pb-6 align-items-center justify-content-center xl:justify-content-start"
    >
      <div
        v-for="brand in brands"
        :key="brand.title"
        class="single-brand bg-envitect-sam-blue-5 border-envitect-sam-blue-20 text-center flex align-items-center justify-content-center flex-wrap"
      >
        <img class="brand-image " :src="brand.img" :alt="brand.title" />
      </div>
    </div>
    <div class="text-center mb-5 lg:mb-8">
      <Button
        class="lode-more-button border-primary-color-envitect-sam-blue bg-primary-color-white text-primary-color-envitect-sam-blue text-semi-bold-1"
      >
        Load More
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'assets/styles/scss/base/mixins' as *;

.brand-container {
  min-height: 30rem;
  .brand-flex-container {
    gap: 15px;
    @include media-query(sm) {
      gap: 8px;
    }
  }
  .single-brand {
    width: 227px;
    height: 100px;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    @include media-query(sm) {
      border-radius: 2px;
      width: 104px;
      height: 56px;
    }
  }
  .brand-image {
    @include media-query(sm) {
      max-width: 83.932px;
      max-height: 38px;
    }
  }

  .lode-more-button {
    display: inline-flex;
    padding: 12px 48px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
  }
  *:focus {
    box-shadow: none !important;
  }
}
</style>
