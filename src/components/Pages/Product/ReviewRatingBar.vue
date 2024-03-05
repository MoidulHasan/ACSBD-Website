<script setup lang="ts">
const props = defineProps<{
  rating: number;
}>();

const ratingBarWidth = computed(() => {
  return `${20 * Number(props.rating)}%`;
});
const ratingCount = ref(props.rating);
</script>

<template>
  <div>
    <Rating v-model="ratingCount" readonly :cancel="false" />

    <div class="rating-bar bg-dark-gray-20">
      <span class="h-full rating-bar-stat"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "assets/styles/scss/base/_mixins.scss" as *;

.rating-bar {
  border-radius: 4px;
  height: 24px;
  width: 500px;
  overflow: hidden;

  @include media-query(sm) {
    width: 150px;
    height: 18px;
  }

  @include media-query(md) {
    width: 250px;
  }
  @include media-query(lg) {
    width: 350px;
  }

  .rating-bar-stat {
    display: block;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    content: " ";
    width: v-bind(ratingBarWidth);
    background-color: var(--color-orange);
  }
}
</style>
