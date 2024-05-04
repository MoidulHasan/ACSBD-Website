<script setup lang="ts">
const props = defineProps<{
  image: string;
}>();
</script>

<template>
  <div class="p-1">
    <NuxtImg class="project-image w-full" :src="image" alt="project image" />
  </div>
</template>

<style lang="scss" scoped>
.project-image {
  height: 310px;
  border-radius: 4px;
}
</style>
