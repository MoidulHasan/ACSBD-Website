<template>
  {{ heroSlider }}
  <!-- <Carousel
    :items="heroSlider"
    :num-visible="1"
    :num-scroll="3"
    :responsive-options="responsiveOptions"
  >
    <div class="mb-3"><img :src="imageUrl" alt="" />;</div>
  </Carousel> -->
</template>

<script setup lang="ts">
// import Carousel from "primevue/carousel";
import { getHeroSliderData } from "~/app/api/heroSlider";

const { data: heroSlider, error, pending, refresh } = await getHeroSliderData();
</script>
