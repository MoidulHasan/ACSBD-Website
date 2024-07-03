<script setup lang="ts">
import { getAirConditioners } from "~/app/api/getAirConditioners";

const { data: airConditioners } = await getAirConditioners();

const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<template>
  <div class="related-product-section">
    <CommonSliderSection
      :items="airConditioners"
      :responsive-options="responsiveOptions"
      :number-of-scroll="1"
      :visible-item="5"
      slide-component="ProductCard"
    >
      <template #header>
        <CommonSectionHeader
          class="mb-32px"
          header="Our Latest Blogs"
          sub-header="AC SERVICE always posts AC-related news and company news regularly. So stay connected with us to know about our latest news."
        />
      </template>
    </CommonSliderSection>
  </div>
</template>

<style scoped lang="scss">
.related-product-section {
  :deep(.p-carousel-item) {
    padding: 8px;
  }
}
</style>
