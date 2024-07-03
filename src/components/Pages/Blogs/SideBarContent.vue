<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="side-bar-block p-3 bg-color-product-bg">
    <h3 class="pb-3 text-semi-bold-1 text-primary-color-navy-blue">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.side-bar-block {
  border-radius: 4px;
}
</style>
