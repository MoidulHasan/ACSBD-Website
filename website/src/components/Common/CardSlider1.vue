<template>
  <div class="card-carousel-wrapper">
    <div
      :disabled="atHeadOfList"
      class="card-carousel--nav__left"
      @click="moveCarousel(-1)"
    >
      <slot name="prevButton">
        <!--        <button class="carousel-prev-button">-->
        <i class="pi pi-chevron-left" />
        <!--        </button>-->
      </slot>
    </div>

    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div
          ref="carouselCard"
          :style="{
            transform: 'translateX(' + currentOffset + 'px)',
          }"
          class="card-carousel-cards"
        >
          <div v-for="item in items" class="card-carousel--card">
            <img :alt="item.name" :src="item.image" />
          </div>
        </div>
      </div>
    </div>

    <div
      :disabled="atEndOfList"
      class="card-carousel--nav__right"
      @click="moveCarousel(1)"
    />
  </div>
</template>

<script lang="ts" setup>
interface CarouselProps {
  items: any;
  visibleSlider: number;
  numberOfScroll: number;
}

const props = withDefaults(defineProps<CarouselProps>(), {
  items: null,
  visibleSlider: 1,
  numberOfScroll: 1,
});

const currentOffset = ref(0);
const windowSize = ref(3);
const paginationFactor = ref(220);

const carouselCard = ref();

const atHeadOfList = computed(() => {
  return currentOffset.value === 0;
});

const atEndOfList = computed(() => {
  return (
    currentOffset.value <=
    paginationFactor.value * -1 * (props.items.length - windowSize.value)
  );
});

const moveCarousel = (direction) => {
  console.log(carouselCard.value.offsetWidth / props.items.length);

  if (direction === 1 && !atEndOfList.value) {
    currentOffset.value -= paginationFactor.value;
  } else if (direction === -1 && !atHeadOfList.value) {
    currentOffset.value += paginationFactor.value;
  }

  console.log(currentOffset.value);
};
</script>

<style lang="scss" scoped>
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  //margin: 20px 0 40px;

  width: 100%;
}

.card-carousel--nav__left,
.card-carousel--nav__right {
  //box-sizing: border-box;

  //margin: 0 20px;
  //transition: transform 150ms linear;

  padding: 8px;
  border-radius: 2px;
  cursor: pointer;
  background: var(--primary-color-dark-gray);
  color: var(--primary-color-white);
}

.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}

.card-carousel--nav__left:active {
  //transform: rotate(-135deg) scale(0.9);
  background: var(--primary-color-envitect-sam-blue);
}

.card-carousel--nav__right {
  transform: rotate(45deg);
}

.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}

.card-carousel {
  display: flex;
  justify-content: center;
}

.card-carousel--overflow-container {
  overflow: hidden;
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}

.carousel-prev-button {
  padding: 8px !important;

  border-radius: 2px !important;
  background: var(--primary-color-dark-gray) !important;

  color: var(--primary-color-white) !important;
}

.carousel-prev-button:hover {
  background: var(--primary-color-envitect-sam-blue) !important;
}
</style>
