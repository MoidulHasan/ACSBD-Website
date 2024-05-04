<script setup lang="ts">
defineProps<{
  profile: string;
  date: string;
}>();
</script>
<template>
  <div class="flex gap-3 lg:gap-5 align-items-center">
    <span class="text-primary-color-dark-gray font-heading-6">
      {{ profile }}
    </span>
    <p
      class="meta-info text-regular-4 bg-envitect-sam-blue-5 text-dark-gray-80"
    >
      <i class="pi pi-calendar-times arrow-icon mr-3" />
      <span>{{ date }}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.meta-info {
  padding: 9px 22px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .arrow-icon {
    font-size: 1.375rem;
  }
}
</style>
