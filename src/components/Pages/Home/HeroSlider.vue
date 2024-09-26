<script lang="ts" setup>
import type { MediaItem } from "~/contracts/api-contracts/bannerSliderInterface";

defineProps<{ sliders: MediaItem[] }>();

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

<template>
  <div class="min-w-100 min-h-100">
    <Galleria
      :num-visible="2"
      :responsive-options="responsiveOptions"
      :show-indicators="true"
      :show-indicators-on-item="true"
      :show-thumbnails="false"
      :value="sliders"
      auto-play
      circular
      class="slider"
      container-style="min-width: 100%"
    >
      <template #item="slotProps">
        <img
          :alt="`ACSBD ${slotProps.item?.type}`"
          :src="slotProps.item?.path"
          style="width: 100%; display: block; max-height: 600px"
        />
      </template>
    </Galleria>
  </div>
</template>

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

:deep(.p-galleria-indicators .p-galleria-indicator) {
  margin-left: 7px !important;
}
</style>
