<template>
  <main>
    <slot />
    <ClientOnly>
      <Toast />
    </ClientOnly>
  </main>
</template>
<script setup lang="ts"></script>
