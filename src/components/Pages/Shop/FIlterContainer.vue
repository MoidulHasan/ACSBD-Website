<script lang="ts" setup>
defineProps<{
  header?: string;
}>();
</script>

<template>
  <div class="filter-container">
    <div
      class="bg-dark-gray-80 flex align-items-center justify-content-center filter-header"
    >
      <h3 class="text-center text-semi-bold-1 text-primary-color-white">
        {{ header }}
      </h3>
    </div>

    <div class="px-12px pt-12px pb-24px">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-container {
  background: var(--product-Front-color);
  border-radius: 4px;

  .filter-header {
    border-radius: 4px 4px 0 0;
    height: 40px;
  }
}
</style>
