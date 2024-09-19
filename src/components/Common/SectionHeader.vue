<script lang="ts" setup>
defineProps<{
  header: string;
  subHeader?: string;
}>();
</script>

<template>
  <div>
    <h1
      class="text-primary-color-navy-blue font-heading-2 text-center mb-2 md:mb-3 pt-6"
    >
      {{ header }}
    </h1>
    <p
      class="subtitle text-regular-3 text-primary-color-dark-gray mx-auto text-center"
    >
      {{ subHeader }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.subtitle {
  max-width: 1100px;
  @include media-query(md) {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  @include media-query(sm) {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
