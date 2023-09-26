<template>
  <div class="header flex justify-content-between">
    <slot name="leftSideContent">
      <div
        v-if="label"
        class="flex justify-content-between align-items-center heading4"
      >
        {{ label }}
      </div>
    </slot>

    <div>
      <slot name="rightSideContent" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label?: string;
}>();
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 48px;
  flex-shrink: 0;
  padding: 8px 16px;

  border-radius: 4px;
  background: var(--product-Front-color);
}
</style>
