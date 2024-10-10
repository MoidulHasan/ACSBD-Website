<script lang="ts" setup>
import type { Blog } from "~/contracts/api-contracts/BlogsInterfaces";

defineProps<{
  blogHeader?: string;
}>();

const { data: blogData } = await useFetch<Blog[]>("/api/proxy/blogs", {
  transform: (response) => response.data.data,
});
</script>

<template>
  <CommonSliderSection
    :items="blogData"
    :number-of-scroll="1"
    :visible-item="4"
    slide-component="SingleBlogCard"
  >
    <template #header>
      <CommonSectionHeader
        :header="blogHeader ?? 'Our Latest Blogs'"
        class="mb-32px"
        sub-header="AC SERVICE always posts AC-related news and company news regularly. So stay connected with us to know about our latest news."
      />
    </template>
    <template #footer>
      <CommonViewAllButton
        label="View All Blogs"
        redirect-page-url="our-blogs"
      />
    </template>
  </CommonSliderSection>
</template>
