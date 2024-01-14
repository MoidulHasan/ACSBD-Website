<script setup lang="ts">
defineProps<{
  works;
}>();
</script>

<template>
  <div>
    {{ works.length }}
    {{ works }}
  </div>
</template>

<style lang="scss" scoped></style>
