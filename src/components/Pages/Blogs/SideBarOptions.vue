<script setup lang="ts">
const props = withDefaults(defineProps<{
  blogDetailPage?: boolean
}>(), {
  blogDetailPage: false,
})

const emit = defineEmits<{
  (e: 'searchBlog', value: string): void
}>()
function handleSearchResult(value: string) {
  emit('searchBlog', value)
}
</script>

<template>
  <div class="blog-sidebar">
    <CommonSearch
      placeholder="Search blogs here"
      class="mb-3"
      @search="handleSearchResult"
    />
    <PagesBlogsBlogCategories />
    <PagesBlogsRecentPosts class="mt-4" :class="[props.blogDetailPage ? '' : 'hidden md:block']" />
    <PagesBlogsBlogTags class="mt-3 md:mt-4" :class="[props.blogDetailPage ? '' : 'hidden md:block']" />
  </div>
</template>

<style scoped lang="scss">
.blog-sidebar {
}
</style>
