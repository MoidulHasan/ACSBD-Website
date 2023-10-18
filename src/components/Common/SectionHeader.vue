<template>
  <div>
    <h1
      class="text-primary-color-navy-blue font-heading-2 text-center mb-2 md:mb-3"
    >
      {{ header }}
    </h1>
    <p class="subtitle text-regular-3 text-color-primary-dark-gray mx-auto">
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
.subtitle {
  max-width: 1100px;
}
</style>
