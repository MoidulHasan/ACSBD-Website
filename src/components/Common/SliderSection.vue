<template>
  <div>
    <div>
      <slot name="header" />
    </div>

    <div class="slider">
      <Carousel
        :num-scroll="numberOfScroll"
        :num-visible="visibleItem"
        :responsive-options="responsiveOptions"
        :show-indicators="false"
        :value="items"
        circular
      >
        <template #item="slotProps">
          <component :is="slideComponent" v-bind="{ ...slotProps.data }" />
        </template>

        <template #previousicon>
          <i class="pi pi-arrow-left" />
        </template>

        <template #nexticon>
          <i class="pi pi-arrow-right" />
        </template>
      </Carousel>
    </div>

    <div class="flex justify-content-center">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface SliderProps {
  slideComponent: string;
  items: any;
  visibleItem: number;
  numberOfScroll: number;
  showIndicators?: boolean;
}

withDefaults(defineProps<SliderProps>(), {
  showIndicators: false,
});

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

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;
.slider {
  margin-top: 32px;
  margin-bottom: 44px;
}

::v-deep(.p-carousel-next) {
  padding: 8px !important;

  border-radius: 2px !important;
  background: var(--primary-color-dark-gray) !important;
  color: var(--primary-color-white) !important;
  @include media-query(sm) {
    position: absolute;
    right: 8px;
    background: var(--dark-gray-20) !important;
  }
}

::v-deep(.p-carousel-next:hover) {
  background: var(--primary-color-envitect-sam-blue) !important;
}

::v-deep(.p-carousel-prev) {
  padding: 8px !important;
  border-radius: 2px !important;
  background: var(--primary-color-dark-gray) !important;
  color: var(--primary-color-white) !important;
  @include media-query(sm) {
    position: absolute;
    left: 8px;
    z-index: 1;
    background: var(--dark-gray-20) !important;
  }
}

::v-deep(.p-carousel-prev:hover) {
  background: var(--primary-color-envitect-sam-blue) !important;
}
</style>
