<template>
  <div class="flex justify-content-between">
    <slot name="leftSideContent">
      <div v-if="label" class="label">
        {{ label }}
      </div>
    </slot>

    <div>
      <slot name="rightSideContent" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label?: string;
}>();
</script>

<style scoped></style>
