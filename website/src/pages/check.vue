<template>
  <div class="card flex justify-content-center">
    <Checkbox v-model="checked" :binary="true" />
  </div>
</template>

<script setup>
const checked = ref(false);
</script>