<script setup lang="ts">
defineProps<{
  label?: string;
  icon?: string;
}>();
</script>
<template>
  <div
    class="text-semi-bold-1 text-primary-color-envitect-sam-blue flex align-items-center mt-12px mb-4 cursor-pointer"
  >
    <span>{{ label ?? "Explore More" }}</span>
    <i :class="['arrow-icon', 'ml-2', 'mt-1', icon ?? 'pi pi-arrow-right']" />
  </div>
</template>

<style scoped lang="scss">
.arrow-icon {
  height: 22px;
  width: 22px;
}
</style>
