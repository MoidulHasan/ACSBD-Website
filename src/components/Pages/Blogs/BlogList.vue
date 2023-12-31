<script setup lang="ts">
import type { Blog } from "~/contracts/api-contracts/BlogsInterfaces";
defineProps<{
  blogs: Blog[];
}>();
</script>

<template>
  <div class="grid">
    <div v-for="blog in blogs" :key="blog.id" class="col-12 lg:col-4">
      <PagesBlogsBlogCard :blog="blog" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
