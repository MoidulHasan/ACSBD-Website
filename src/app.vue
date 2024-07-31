<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <ClientOnly>
        <Toast />
      </ClientOnly>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "~/stores";
import { useWishListStore } from "#imports";

const route = useRoute();
const store = useStore();
const wishListStore = useWishListStore();
const token = useCookie("token");

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
    if (token.value) {
      wishListStore.getWishListProduct();
    }
    store.setCartFromLocalStorage();
    store.setFavoritesFromLocalStorage();
  }
});
</script>

<style lang="scss">
:deep(.p-dialog-top) {
  top: 171px;
}
</style>
