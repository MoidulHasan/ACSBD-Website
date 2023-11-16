<template>
  <div class="image-slide-container">
    <div class="flex">
      <div
        v-for="(image, index) in images"
        :key="'banner-image-' + index"
        class="image-slide"
      >
        <img
          :alt="image?.title"
          :src="image?.imageUrl"
          :style="{ width: '100%', height: '100%', borderRadius: '4px' }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getHomePageBannerImages } from "~/app/api/getHomePageBannerImages";

const { data: images } = await getHomePageBannerImages();
</script>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.image-slide-container {
  width: 100%;
  height: fit-content;
  overflow-x: scroll;
  border-radius: 2px;
}

.image-slide-container::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.image-slide {
  width: 469px;
  height: 170px;
  flex-shrink: 0;

  border-radius: 2px;
  margin-right: 16px;

  @include media-query(sm) {
    width: 280px;
    height: 100px;
    margin-right: 8px;
  }

  @include media-query(md) {
    width: 280px;
    height: 100px;
    margin-right: 8px;
  }

  @include media-query(lg) {
    width: 280px;
    height: 100px;
    margin-right: 8px;
  }
}
</style>
