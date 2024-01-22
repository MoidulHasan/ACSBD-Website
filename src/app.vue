<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();

useHead({
  title: computed(() => `${route.meta.title} | AC Service BD`),
});

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - AC Service BD`
      : `${route.meta.title} | AC Service BD`;
  },
});
</script>
