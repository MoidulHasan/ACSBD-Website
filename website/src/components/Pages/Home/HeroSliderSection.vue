<template>
  <Carousel
    :items="heroSlider"
    :num-visible="1"
    :num-scroll="3"
    :responsive-options="responsiveOptions"
  >
    <div class="mb-3"><img :src="imageUrl" alt="" />;</div>
  </Carousel>
</template>

<script setup>
import Carousel from "primevue/carousel";
import { getHeroSliderImage } from "~/app/api/heroSlider";

const {
  data: heroSlider,
  error,
  pending,
  refresh,
} = await getHeroSliderImage();
</script>
