<script lang="ts" setup>
defineProps<{
  title: string;
  image: string;
  views: string;
  description: string;
  category: string;
  slug: string;
}>();
</script>

<template>
  <div class="blog-card-container">
    <div class="blog-card align-items-center justify-content-center">
      <div class="blog-image-container">
        <img :src="image" alt="blog-card-image" />
      </div>

      <div class="blog-view-container flex justify-content-between">
        <div>
          <a class="blog-tips no-underline" href="#">{{ category }}</a>
        </div>

        <div class="flex">
          <i class="pi pi-eye views-icon"></i>
          <p class="view-text">{{ views }}</p>
        </div>
      </div>

      <h1 class="blog-title">
        {{ title }}
      </h1>

      <ClientOnly>
        <p class="blog-content" v-html="description" />
      </ClientOnly>

      <div class="blog-explore-container">
        <NuxtLink
          :to="{ name: 'blog-description', params: { blogSlug: slug } }"
          class="no-underline blog-explore-text"
        >
          Explore More
          <i class="pi pi-arrow-right blog-explore-icon"></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.blog-card-container {
  height: 524px;
  flex-shrink: 0;
  border-radius: 4px;
  padding: 16px;

  @include media-query(sm) {
    padding: 0;
  }
}

.blog-card {
  padding-bottom: 21px;
  background: var(--product-Front-color, #f9f9f9);
}

.blog-image-container {
  img {
    width: 100%;
    height: 308.826px;
    flex-shrink: 0;
  }
}

.blog-view-container {
  padding: 3px 12px 0px 12px;
}

.blog-tips {
  color: var(--navy-blue-80, #4a5d85);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}

.views-icon {
  width: 17.796px;
  height: 17.796px;
  padding: 2.102px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--dark-gray-80, #787878);
}

.view-text {
  color: var(--dark-gray-80, #787878);
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px;
  padding-left: 4px;
}

.blog-title {
  color: var(--dark-gray-100, #565656);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  padding-left: 12px;
  padding-right: 12px;
}

.blog-content {
  color: var(--dark-gray-80, #787878);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding-left: 12px;
  padding-right: 12px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.blog-explore-container {
  padding: 13px 12px 0px 12px;
}

.blog-explore-text {
  color: var(--dark-gray-100, #565656);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}

.blog-explore-icon {
  padding-left: 8px;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
}
</style>
