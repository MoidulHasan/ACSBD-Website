<script setup lang="ts">
const emit = defineEmits<{
  (e: "searchBlog", value: string): void;
}>();
const handleSearchResult = (value: string) => {
  emit("searchBlog", value);
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
    <PagesBlogsRecentPosts class="mt-4" />
    <PagesBlogsBlogTags class="mt-4" />
  </div>
</template>

<style scoped lang="scss">
.blog-sidebar {
}
</style>
