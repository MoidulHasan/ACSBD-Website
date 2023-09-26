<template>
  <div class="container">
    <CommonSliderSection
      :items="blogData"
      :number-of-scroll="1"
      :visible-item="4"
      slide-component="SingleBlogCard"
    >
      <template #header>

        <h1 class="heading2">Our Latest Blogs</h1>
        <p class="paragraph3">
          AC SERVICE always posts AC-related news and company news regularly. So
          stay connected with us to know about our latest news.
        </p>
        
      </template>

      <template #footer>
        <CommonViewAllButton label="View All Blogs" />
      </template>
    </CommonSliderSection>
  </div>
</template>

<script lang="ts" setup>
import { getBlog } from "~/app/api/blog";

const { data: blogData, pending, error, refresh } = await getBlog();
</script>

<style lang="scss" scoped>
.paragraph3 {
  color: var(--dark-gray-100, #565656);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
</style>
