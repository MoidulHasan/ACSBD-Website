<template>
  <div class="flex flex-column align-items-center text-center">
    <h1 class="font-heading-2 text-primary-color-navy-blue mb-24px">
      Frequently Asked Questions
    </h1>
    <div class="p-inputgroup searchbar">
      <InputText class="py-12px pl-24px" placeholder="Search FAQs Here" />
      <Button
        class="px-32px py-12px bg-primary-color-envitect-sam-blue"
        icon="pi pi-search"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use "assets/styles/scss/base/_mixins.scss" as *;

.searchbar {
  width: 617px;

  @include media-query(sm) {
    max-width: 80vw;
  }

  @include media-query(md) {
    max-width: 80vw;
  }
}
</style>
