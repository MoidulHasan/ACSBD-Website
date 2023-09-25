<template>
  <!-- <div class="container pb-8">
    <div class="blog-card align-items-center justify-content-center pt-4">
      <div class="">
        <div class="blog-image-container">
          <img alt="blog-card-image" src="/images/blog/blog-1.png" />
        </div>
      </div>
      <div class="blog-view-container flex justify-content-between">
        <div>
          <a href="#" class="blog-tips no-underline">AC Tips</a>
        </div>
        <div class="flex">
          <i class="pi pi-eye views-icon"></i>
          <p class="view-text">5940 View(s)</p>
        </div>
      </div>
      <h1 class="blog-title">
        How to Figure out What Size Air Condition Will Cool a Room?
      </h1>
      <p class="blog-content">
        How to Figure out What Size Air Conditioner Will Cool a Room? to talk to
        you about the best way to conditioner you...
      </p>
      <div class="blog-explore-container">
        <a href="#" class="no-underline blog-explore-text">
          Explore More
          <i class="pi pi-arrow-right blog-explore-icon"></i>
        </a>
      </div>
    </div>
  </div> -->
  <div class="container pb-8">
    <div class="blog-card align-items-center justify-content-center pt-4">
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
        {{
          content.length > 90 ? `"${content.slice(0, 90)}...` : `"${content}"`
        }}
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
  .blog-image-container {
    position: relative;
    img {
      width: 359.03px;
      height: 308.826px;
      flex-shrink: 0;
    }
  }
  .blog-view-container {
    padding-top: 3px;

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
  }
  .blog-title {
    color: var(--dark-gray-100, #565656);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .blog-content {
    color: var(--dark-gray-80, #787878);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .blog-explore-container {
    padding-top: 13px;
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
  }
}
</style>
