<template>
  <div class="container pt-4" style="width: 22rem; padding-bottom: 160px">
    <div class="blog-card align-items-center justify-content-center">
      <div class="">
        <div class="blog-image-container">
          <img :src="imageUrl" alt="blog-card-image" />
        </div>
      </div>
      <div class="blog-view-container flex justify-content-between">
        <div>
          <a href="#" class="blog-tips no-underline">AC Tips</a>
        </div>
        <div class="flex">
          <i class="pi pi-eye views-icon"></i>
          <p class="view-text">{{ views }}</p>
        </div>
      </div>
      <h1 class="blog-title">
        {{ title }}
      </h1>
      <p class="blog-content">
        {{ content }}
      </p>
      <div class="blog-explore-container">
        <a href="#" class="no-underline blog-explore-text">
          Explore More
          <i class="pi pi-arrow-right blog-explore-icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  imageUrl: string;
  views: string;
  content: string;
}>();
</script>

<style lang="scss" scoped>
.blog-card {
  width: 348px;
  height: 524px;
  flex-shrink: 0;
  border-radius: 4px;
  padding-bottom: 21px;
  background: var(--product-Front-color, #f9f9f9);
}
.blog-image-container {
  img {
    width: 348px;
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
