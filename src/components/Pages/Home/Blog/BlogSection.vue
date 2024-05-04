<template>
  <CommonSliderSection
    :items="blogData"
    :number-of-scroll="1"
    :visible-item="4"
    slide-component="SingleBlogCard"
  >
    <template #header>
      <CommonSectionHeader
        class="mb-32px"
        :header="blogHeader ?? 'Our Latest Blogs'"
        sub-header="AC SERVICE always posts AC-related news and company news regularly. So stay connected with us to know about our latest news."
      />
    </template>
    <template #footer>
      <CommonViewAllButton label="View All Blogs" />
    </template>
  </CommonSliderSection>
</template>

<script lang="ts" setup>
import { getBlog } from "~/app/api/blog";
defineProps<{
  blogHeader?: string;
}>();

const { data: blogData } = await getBlog();
</script>
