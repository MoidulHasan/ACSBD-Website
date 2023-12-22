<script setup lang="ts">
import { getBlog } from "~/app/api/blog";

definePageMeta({
  title: "Our Blogs",
  name: "our-blogs",
});

const { data: blogs } = await getBlog();
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
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
