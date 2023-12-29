<script setup lang="ts">
defineProps<{
  label?: string;
  icon?: string;
  text?: string;
}>();
</script>
<template>
  <div
    :class="[
      text ?? 'text-semi-bold-1',
      'text-primary-color-envitect-sam-blue',
      'flex',
      'align-items-center',
      'cursor-pointer',
    ]"
  >
    <span>{{ label ?? "Explore More" }}</span>
    <i :class="['arrow-icon', 'ml-2', icon ?? 'pi pi-arrow-right']" />
  </div>
</template>

<style scoped lang="scss">
.arrow-icon {
  font-size: 1.375rem;
}
</style>
