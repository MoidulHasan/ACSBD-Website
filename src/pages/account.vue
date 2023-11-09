<template>
  <div>
    <ClientOnly>
      <NuxtPage />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  name: "my-account",
  title: "My Account",
  redirect: "my-details",
  layout: "dashboard",
});
</script>

<style scoped></style>
