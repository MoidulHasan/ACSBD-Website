<template>
  <div>
    <ClientOnly>
      <div>
        <NuxtLayout name="dashboard">
          <NuxtPage />
        </NuxtLayout>
      </div>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  name: "my-account",
  title: "My Account",
  redirect: "my-details",
  middleware: ["auth"],
  layout: false,
});
</script>

<style scoped></style>
