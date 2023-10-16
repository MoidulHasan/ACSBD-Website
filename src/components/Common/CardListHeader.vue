<template>
  <div class="header flex justify-content-between">
    <slot name="leftSideContent">
      <div
        v-if="label"
        class="label flex justify-content-between align-items-center text-color-primary-navy-blue"
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

  .label {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
  }
}

@media (max-width: 768px) {
  .header {
    height: 40px;

    .label {
      font-size: 14px;
    }
  }
}
</style>
