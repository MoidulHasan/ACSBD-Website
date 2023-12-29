<template>
  <div class="">
    <CommonSearch
      placeholder="Search blogs here"
      class="mb-3"
      @search="handleSearchResult"
    />
    <div class="all-category-block p-3 bg-color-product-bg">
      <h3 class="pb-3 text-semi-bold-1 text-primary-color-navy-blue">
        All Categories
      </h3>
      <div class="flex category-list">
        <p
          class="py-4px px-16px bg-envitect-sam-blue-2 text-dark-gray-80 text-regular-4"
        >
          Ac Category
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleSearchResult = (value: string) => {
  console.log(value);
};
</script>

<style scoped lang="scss">
.all-category-block {
  border-radius: 4px;

  .category-list {
    gap: 12px;
  }
}
</style>
