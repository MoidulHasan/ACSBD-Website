<template>
  <div class="carousel-container">
    <teleport v-if="teleportPrevButton" :to="teleportPrevButton">
      <slot name="prevButton">
        <button
          :disabled="atHeadOfList"
          class="button-primary"
          @click="moveCarousel(-1)"
        >
          <i class="pi pi-chevron-left" />
        </button>
      </slot>
    </teleport>

    <slot v-else name="prevButton">
      <button
        :disabled="atHeadOfList"
        class="button-primary"
        @click="moveCarousel(-1)"
      >
        <i class="pi pi-chevron-left" />
      </button>
    </slot>

    <div ref="slideContainer" class="slider-container">
      <div
        :style="{
          transform: 'translateX(' + currentOffset + 'px)',
        }"
        class="slider"
      >
        <div
          v-for="(item, index) in items"
          :key="'slide-' + index"
          :style="{ width: slideWidth + 'px' }"
          class="slide"
        >
          <slot :data="item" :index="index" name="item" />
        </div>
      </div>
    </div>

    <teleport v-if="teleportNextButton" :to="teleportNextButton">
      <slot name="nextButton">
        <button
          :disabled="atEndOfList"
          class="button-primary"
          @click="moveCarousel(1)"
        >
          <i class="pi pi-chevron-right" />
        </button>
      </slot>
    </teleport>

    <slot v-else name="nextButton">
      <button
        :disabled="atEndOfList"
        class="button-primary"
        @click="moveCarousel(1)"
      >
        <i class="pi pi-chevron-right" />
      </button>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { responsiveOptions } from "constants/common";

interface CarouselResponsiveOptions {
  breakpoint: number;
  numVisible: number;
  numScroll: number;
}

interface CarouselProps {
  items: any;
  visibleSlider: number;
  numberOfScroll: number;
  teleportPrevButton?: string;
  teleportNextButton?: string;
  carouselResponsiveOptions?: CarouselResponsiveOptions[];
}

const props = withDefaults(defineProps<CarouselProps>(), {
  items: null,
  visibleSlider: 1,
  numberOfScroll: 1,
  teleportPrevButton: undefined,
  teleportNextButton: undefined,
  carouselResponsiveOptions: undefined,
});

const slideContainer = ref(null);
const currentOffset = ref(0);
const numOfVisibleSlider = ref(props.visibleSlider);
const numOfScroll = ref(props.numberOfScroll);

const slideWidth = computed(
  () => slideContainer.value?.offsetWidth / numOfVisibleSlider.value,
);

const atHeadOfList = computed(() => {
  return currentOffset.value === 0;
});

const atEndOfList = computed(() => {
  return (
    currentOffset.value <=
    Math.round(slideWidth.value) *
      -1 *
      (props.items.length - numOfVisibleSlider.value)
  );
});

const moveCarousel = (direction: number) => {
  if (direction === 1 && !atEndOfList.value) {
    currentOffset.value -= Math.round(slideWidth.value) * numOfScroll.value;
  } else if (direction === -1 && !atHeadOfList.value) {
    currentOffset.value += Math.round(slideWidth.value) * numOfScroll.value;
  }
};

const dragStartX = ref(0);

const handleDragStart = (event: MouseEvent | TouchEvent) => {
  dragStartX.value = getEventX(event);
};

const handleDragEnd = (event: MouseEvent | TouchEvent) => {
  const x = getEventX(event);
  if (x < dragStartX.value) {
    moveCarousel(1);
  } else if (x > dragStartX.value) {
    moveCarousel(-1);
  }
};

const getEventX = (event: MouseEvent | TouchEvent) => {
  return event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
};

const resizeSlide = () => {
  const responsiveOption = getResponsiveOption(
    slideContainer.value?.offsetWidth,
  );

  numOfVisibleSlider.value = responsiveOption.numVisible;
  numOfScroll.value = responsiveOption.numScroll;
};

onMounted(() => {
  resizeSlide();

  const container = slideContainer.value;
  container?.addEventListener("mousedown", handleDragStart);
  container?.addEventListener("touchstart", handleDragStart);

  container?.addEventListener("mouseup", handleDragEnd);
  container?.addEventListener("touchend", handleDragEnd);

  window.addEventListener("resize", resizeSlide);
});

onUnmounted(() => {
  container?.removeEventListener("mousedown");
  container?.removeEventListener("touchstart");

  container?.removeEventListener("mouseup");
  container?.removeEventListener("touchend");
  window.removeEventListener("resize", resizeSlide);
});

const getResponsiveOption = (value: number) => {
  const options = props?.carouselResponsiveOptions ?? responsiveOptions;

  for (let i = 0; i < options.length; i++) {
    if (value >= options[i].breakpoint) {
      return options[i];
    }
  }

  return options[options.length - 1];
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  .slider-container {
    display: flex;
    overflow: hidden;

    .slider {
      display: flex;
      flex-direction: row;

      transition: transform 250ms ease-out;
      transform: translatex(0px);

      .slide {
        display: grid;
        place-items: center;
        cursor: pointer;
      }
    }
  }
}
</style>
