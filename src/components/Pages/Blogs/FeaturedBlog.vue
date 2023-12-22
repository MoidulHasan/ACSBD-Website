<template>
  <div class="blog-card grid w-full">
    <div class="blog-image-container col-12 lg:col-6">
      <img
        class="w-full feature-blog-img"
        :src="featured.imageUrl"
        :alt="featured.title"
      />
    </div>
    <div class="blog-details col-12 lg:col-6">
      <h2>{{ featured.tag }}</h2>
      <h1>{{ featured.title }}</h1>
      <p>{{ featured.content }}</p>
      <Button />
      <div class="meta-infos">
        <p>{{ featured.published_date }}</p>
        <p>{{ featured.views }}</p>
        <p>{{ featured.comments }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface blog {
  title: string;
  views: number;
  imageUrl: string;
  content: string;
  published_date: string;
  comments: number;
  tag: string;
  id: string;
}
defineProps<{
  featured: blog;
}>();
</script>

<style scoped lang="scss">
.blog-card {
  .feature-blog-img {
    max-height: 351px;
    border-radius: 12px;
  }
}
</style>
