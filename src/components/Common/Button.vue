<script setup lang="ts">
const props = defineProps<{
  paddingX?: string;
  paddingY?: string;
  textColor?: string;
  text?: string;
  background?: string;
  title: string;
  to?: string;
}>();
</script>

<template>
  <NuxtLink :to="to">
    <Button
      :class="[
        'common-button',
        textColor ?? 'text-primary-color-white',
        background ?? 'bg-primary-color-envitect-sam-blue',
        paddingX ?? 'px-6',
        paddingY ?? 'py-12px',
        text ?? 'text-semi-bold-1',
      ]"
    >
      {{ title }}
    </Button>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.common-button {
  border-radius: 4px;
  border: 1px solid var(--primary-color-envitect-sam-blue);
}
</style>
