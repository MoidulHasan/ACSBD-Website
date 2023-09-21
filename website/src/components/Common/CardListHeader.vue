<template>
  <div class="flex justify-content-between">
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
