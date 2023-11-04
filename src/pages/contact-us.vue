<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="grid w-full mt-3">
      <div class="grid col-12 w-full">
        <div class="col-12 lg:col-6">
          <PagesContactGetinTouch />
        </div>
        <div class="col-12 lg:col-6"><PagesContactAnyQuestion /></div>
      </div>
      <div class="col-12 py-5"><PagesContactLocation /></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  title: "Contact-Us",
});
</script>
