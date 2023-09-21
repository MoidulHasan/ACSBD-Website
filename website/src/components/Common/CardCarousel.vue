<template>
  <div ref="carouselCard" class="card-carousel-wrapper">
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

    <div class="card-carousel">
      <div
        :style="{
          transform: 'translateX(' + currentOffset + 'px)',
        }"
        class="card-carousel-cards"
      >
        <div
          v-for="(item, index) in items"
          :key="'card-slide-' + index"
          :style="{ width: singleCardWidth + 'px' }"
          class="single-card"
        >
          <slot :data="item" :index="index" name="item"></slot>
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
interface CarouselProps {
  items: any;
  visibleSlider: number;
  numberOfScroll: number;
  teleportPrevButton?: string;
  teleportNextButton?: string;
}

const props = withDefaults(defineProps<CarouselProps>(), {
  items: null,
  visibleSlider: 1,
  numberOfScroll: 1,
});

const currentOffset = ref(0);

const carouselCard = ref();

const singleCardWidth = computed(() => {
  return carouselCard.value?.offsetWidth / props.visibleSlider;
});

const atHeadOfList = computed(() => {
  return currentOffset.value === 0;
});

const atEndOfList = computed(() => {
  return (
    currentOffset.value <=
    singleCardWidth.value * -1 * (props.items.length - props.visibleSlider)
  );
});

const moveCarousel = (direction: number) => {
  if (direction === 1 && !atEndOfList.value) {
    currentOffset.value -=
      Math.round(singleCardWidth.value) * props.numberOfScroll;
  } else if (direction === -1 && !atHeadOfList.value) {
    currentOffset.value +=
      Math.round(singleCardWidth.value) * props.numberOfScroll;
  }
};
</script>

<style lang="scss" scoped>
.card-carousel-wrapper {
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;

  .card-carousel {
    .card-carousel-cards {
      display: flex;
      overflow: hidden;
      width: 100%;

      transition: transform 150ms ease-out;
      transform: translatex(0px);

      .single-card {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
