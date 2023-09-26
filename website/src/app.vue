<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const route = useRoute();

useHead({
  title: computed(() => `${route.meta.title} | AC Service BD`),
});
</script>
