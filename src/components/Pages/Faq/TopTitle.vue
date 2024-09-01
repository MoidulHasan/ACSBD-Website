<script lang="ts" setup>
const emit = defineEmits<{
  (e: "search", payload: string): void;
}>();
const searchQuestion = ref("");
</script>

<template>
  <div class="flex flex-column align-items-center text-center">
    <h1 class="font-heading-2 text-primary-color-navy-blue mb-24px">
      Frequently Asked Questions
    </h1>
    <div class="p-inputgroup searchbar">
      <InputText
        v-model="searchQuestion"
        type="text"
        class="py-12px pl-24px"
        placeholder="Search FAQs Here"
        @update:model-value="emit('search', searchQuestion)"
      />
      <Button
        class="px-32px py-12px bg-primary-color-envitect-sam-blue"
        icon="pi pi-search"
        @click="emit('search', searchQuestion)"
      />
    </div>
  </div>
</template>

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
