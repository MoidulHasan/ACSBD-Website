<script setup lang="ts">
interface ProjectImage {
  image: string;
}

interface GalleryPath {
  path: string;
}

const props = defineProps<{
  productImages: GalleryPath[];
}>();

const newProjectImages: ProjectImage = props.productImages.map((imagePath) => ({
  image: imagePath.path,
}));
</script>

<template>
  <div class="photo-gallery mb-5 md:mb-7">
    <h1 class="mb-4 text-primary-color-navy-blue font-heading-2">
      Photo Gallery
    </h1>
    <CommonSliderSection
      :items="newProjectImages"
      :number-of-scroll="1"
      :visible-item="4"
      slide-component="ProjectImageCard"
    />
  </div>
</template>

<style lang="scss" scoped>
.photo-gallery {
}
</style>
