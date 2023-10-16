<template>
  <div>
    <h1 class="font-heading-2 title mb-16">{{ header }}</h1>
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

<style lang="scss" scoped>
.title {
  color: var(--primary-color-navy-blue);
  text-align: center;
}

.subtitle {
  max-width: 1100px;
}
</style>
