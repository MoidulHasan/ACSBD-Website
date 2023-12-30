<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="container">
    <div class="grid mt-5 mb-8">
      <div class="col-12 lg:col-9">
        {{ route?.params.id }}
      </div>
      <div class="col-12 lg:col-3">
        <PagesBlogsSideBarOptions />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
