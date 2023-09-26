<template>
  <div>
    <h1 class="heading2 mb-16">{{ header }}</h1>
    <p class="subtitle mx-auto">
      {{ subHeader }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  header: string;
  subHeader: string;
}>();
</script>

<style scoped>
.subtitle {
  max-width: 1100px;
}
</style>
