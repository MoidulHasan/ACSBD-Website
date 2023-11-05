<template>
  <div class="container">
    <div class="grid w-full mt-3">
      <div class="col-12 lg:col-6">
        <PagesContactGetinTouch />
      </div>

      <div class="col-12 lg:col-6">
        <PagesContactAnyQuestion />
      </div>

      <div class="col-12 py-5">
        <PagesContactLocation />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  title: "Contact Us",
  name: "contact-us",
});
</script>
