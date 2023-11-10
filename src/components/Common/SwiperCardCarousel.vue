<script lang="ts" setup>
import { Navigation } from "swiper/modules";
import { swiperSliderBreakpoints } from "constants/common";
import type { SwiperSliderBreakpointsI } from "~/contracts/common";

interface CarouselProps {
  items: any;
  visibleSlider?: number;
  numberOfScroll?: number;
  teleportPrevButton?: string;
  teleportNextButton?: string;
  carouselResponsiveOptions?: SwiperSliderBreakpointsI;
}

const props = withDefaults(defineProps<CarouselProps>(), {
  items: null,
  visibleSlider: 1,
  numberOfScroll: 1,
  teleportPrevButton: undefined,
  teleportNextButton: undefined,
  carouselResponsiveOptions: undefined,
});

const breakPoints = ref(
  props.carouselResponsiveOptions ?? swiperSliderBreakpoints,
);

const swiperSliderContainer = ref(null);
const nextButton = ref(null);
const prevButton = ref(null);

const isPrevButtonDisabled = ref(true);
const isNextButtonDisabled = ref(false);

const changeButtonState = () => {
  isPrevButtonDisabled.value = prevButton.value.classList.value.includes(
    "swiper-button-disabled",
  );

  isNextButtonDisabled.value = nextButton.value.classList.contains(
    "swiper-button-disabled",
  );
};

const handleButtonClick = (direction: "next" | "prev") => {
  if (direction === "prev") {
    prevButton.value.click();
  } else {
    nextButton.value.click();
  }
};
</script>

<template>
  <div>
    <swiper
      ref="swiperSliderContainer"
      :allow-slide-next="true"
      :breakpoints="breakPoints"
      :modules="[Navigation]"
      :navigation="{
        prevEl: prevButton,
        nextEl: nextButton,
      }"
      @active-index-change="changeButtonState"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="'card-carousel-slide-' + index"
      >
        <slot :data="item" :index="index" name="item" />
      </swiper-slide>

      <div v-show="false" ref="prevButton" />
      <div v-show="false" ref="nextButton" />
    </swiper>

    <ClientOnly>
      <teleport v-if="teleportPrevButton" :to="teleportPrevButton">
        <slot :is-disabled="isPrevButtonDisabled" name="prevButton">
          <button
            :disabled="isPrevButtonDisabled"
            class="button-primary"
            @click="() => handleButtonClick('prev')"
          >
            <i class="pi pi-chevron-left" />
          </button>
        </slot>
      </teleport>

      <slot v-else :is-disabled="isPrevButtonDisabled" name="prevButton">
        <button
          :disabled="isPrevButtonDisabled"
          class="button-primary"
          @click="() => handleButtonClick('prev')"
        >
          <i class="pi pi-chevron-left" />
        </button>
      </slot>
    </ClientOnly>

    <ClientOnly>
      <teleport v-if="teleportPrevButton" :to="teleportNextButton">
        <slot :is-disabled="isNextButtonDisabled" name="prevButton">
          <button
            :disabled="isNextButtonDisabled"
            class="button-primary"
            @click="() => handleButtonClick('next')"
          >
            <i class="pi pi-chevron-right" />
          </button>
        </slot>
      </teleport>

      <slot v-else :is-disabled="isNextButtonDisabled" name="prevButton">
        <button
          :disabled="isNextButtonDisabled"
          class="button-primary"
          @click="() => handleButtonClick('next')"
        >
          <i class="pi pi-chevron-right" />
        </button>
      </slot>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  overflow: hidden;
}
</style>
