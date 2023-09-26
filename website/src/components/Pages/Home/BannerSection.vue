<template>
  <div class="grid">
    <div
      v-for="(image, index) in images"
      :key="'banner-image-' + index"
      class="col-12 md:col-4"
    >
      <img
        :src="image?.imageUrl"
        :style="{ maxWidth: '100%', borderRadius: '4px' }"
        :title="image?.title"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getHomePageBannerImages } from "~/app/api/getHomePageBannerImages";

const { data: images } = await getHomePageBannerImages();
</script>

<style scoped></style>
