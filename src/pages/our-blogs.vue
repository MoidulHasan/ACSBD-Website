<script setup lang="ts">
import { getBlog } from "~/app/api/blog";

definePageMeta({
  title: "Our Blogs",
  name: "our-blogs",
});

const { data: blogs } = await getBlog();

const categories = computed(() => {
  return blogs.value?.map((blog) => {
    return blog.category;
  });
});

provide("blogCategoris", categories);
</script>
<template>
  <div class="container">
    <div class="mt-5 mb-80px">
      <CommonSectionHeader
        header="Our Blogs"
        sub-header="AC SERVICE always posts AC-related news and company news regularly. So stay connected with us to know about our latest news."
      />
      <div class="mt-28px mb-52px">
        <PagesBlogsFeaturedBlog :featured="blogs[0]" />
      </div>
      <div class="blogs-section grid mt-6 mb-8">
        <div class="col-12 lg:col-9">
          <PagesBlogsBlogList :blogs="blogs" />
          <div class="flex justify-content-center mt-6">
            <CommonViewAllButton label="Load More" class="w-12rem" />
          </div>
        </div>
        <div class="col-12 lg:col-3">
          <PagesBlogsBlogSideBarOptions />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
