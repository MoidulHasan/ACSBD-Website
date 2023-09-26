<template>
  <div class="min-w-100 min-h-100">
    <Galleria
      :num-visible="2"
      :responsive-options="responsiveOptions"
      :show-indicators="true"
      :show-indicators-on-item="true"
      :show-thumbnails="false"
      :value="heroSliderImages"
      auto-play
      circular
      class="slider"
      container-style="min-width: 100%"
    >
      <template #item="slotProps">
        <img
          :alt="slotProps.item?.title"
          :src="slotProps.item?.imageUrl"
          style="width: 100%; display: block"
        />
      </template>
    </Galleria>
  </div>
</template>

<script lang="ts" setup>
import { getHomePageHeroSliderImages } from "~/app/api/getHomePageHeroSliderImages";

const { data: heroSliderImages } = await getHomePageHeroSliderImages();

const responsiveOptions = ref([
  {
    breakpoint: "991px",
    numVisible: 4,
  },
  {
    breakpoint: "767px",
    numVisible: 3,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);
</script>

<style lang="scss" scoped>
.slider {
  min-height: 600px;
}

@media (max-width: 768px) {
  .slider {
    height: 140px;
  }
}

:deep(.p-galleria-indicators) {
  background: transparent !important;
}
</style>
