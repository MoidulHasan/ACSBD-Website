<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "~/stores";

const route = useRoute();
const store = useStore();

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

onBeforeMount(() => {
  if (process.client) {
    store.setCartFromLocalStorage();
  }
});
</script>
