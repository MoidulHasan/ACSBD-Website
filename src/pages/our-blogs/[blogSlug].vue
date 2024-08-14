<script setup lang="ts">
const route = useRoute();

const { data: singleBlog, error } = await useAsyncData(
  `blog-${route.params.blogSlug}`,
  () => $fetch(`/api/proxy/blogs/${route.params.blogSlug}`),
);
if (error.value) {
  console.error("Error Fetching Blog");
}
</script>

<template>
  <div class="container">
    <div class="mt-5 mb-80px">
      <div class="blogs-section grid mb-6 lg:mb-8">
        <div class="col-12 lg:col-9">
          <PagesBlogsBlogDetail :blog="singleBlog.data" />
        </div>
        <div class="col-12 lg:col-3">
          <PagesBlogsSideBarOptions />
        </div>
      </div>
      <PagesHomeBlogSection blog-header="Related Blogs" />
    </div>
  </div>
</template>

<style scoped></style>
