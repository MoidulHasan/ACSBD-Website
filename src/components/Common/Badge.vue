<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <div
    class="badget fony-heading-5-semi-bold text-dark-gray-85 bg-envitect-sam-blue-10"
  >
    {{ label }}
  </div>
</template>

<style scoped lang="scss">
.badget {
  padding: 7px 24px;
}
</style>
