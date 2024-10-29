<script lang="ts" setup>
defineProps<{
  title: string
  image: string
  isActive: boolean
}>()

const emits = defineEmits<{
  (e: 'handleStateChange'): void
}>()
</script>

<template>
  <div
    :style="{
      border: isActive
        ? '1px solid var(--primary-color-envitect-sam-blue)'
        : '',
    }"
    class="tab flex flex-column justify-content-center align-items-center"
    @click="() => emits('handleStateChange')"
  >
    <div class="image-container flex align-items-center justify-content-center">
      <img
        :src="image"
        :style="{
          opacity: isActive ? 1 : 0.5,
        }"
        alt=""
        class="tab-image"
      >
    </div>
    <h3
      class="text-heading-1-semi-bold" :class="[
        isActive ? 'text-primary-color-envitect-sam-blue' : 'text-dark-gray-80',
      ]"
    >
      {{ title }}
    </h3>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.tab {
  width: 150px;
  height: 148px;
  padding: 32px 24px;
  flex-shrink: 0;
  cursor: pointer;

  border-radius: 4px;
  background: var(--primary-color-white);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 8px;

  &:hover {
    border: 1px solid var(--primary-color-envitect-sam-blue);
  }

  @include media-query(sm) {
    width: 120px;
    height: 118px;
    padding: 18px 10px;
  }

  .image-container {
    background-color: var(--product-Front-color);
    border-radius: 50%;

    width: 70px;
    height: 70px;
    flex-shrink: 0;
    padding: 15px;
    margin-bottom: 12px;

    overflow: hidden;

    @include media-query(sm) {
      width: 50px;
      height: 50px;
      padding: 10px;
      margin-bottom: 8px;
    }
  }

  .tab-image {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
