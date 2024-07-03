<script setup lang="ts">
import { getBlog } from "~/app/api/blog";

const route = useRoute();

const { data: blogs } = await getBlog();

const categories = computed(() => {
  return blogs.value?.map((blog) => {
    return blog.category;
  });
});

const selectedBlogs = computed(() => {
  return blogs.value.slice(0, 4);
});

const selectedBlog = computed(() => {
  return blogs.value?.find((blog) => blog.id === route.params.blogId);
});

provide("blogCategoris", categories);
provide("selectedBlogs", selectedBlogs);
definePageMeta({
  title: "Blog",
  name: "Blog",
});
</script>

<template>
  <div class="container">
    <div class="mt-5 mb-80px">
      <div class="blogs-section grid mb-6 lg:mb-8">
        <div class="col-12 lg:col-9">
          <PagesBlogsBlogDetail :blog="selectedBlog" />
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
