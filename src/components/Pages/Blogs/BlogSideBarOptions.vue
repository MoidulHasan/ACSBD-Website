<script setup lang="ts">
const handleSearchResult = (value: string) => {
  console.log(value);
};
</script>

<template>
  <div class="blog-sidebar">
    <CommonSearch
      placeholder="Search blogs here"
      class="mb-3"
      @search="handleSearchResult"
    />
    <PagesBlogsBlogCategories />
  </div>
</template>

<style scoped lang="scss">
.blog-sidebar {
}
</style>
