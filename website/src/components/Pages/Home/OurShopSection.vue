<template>
  <CommonSectionHeader
    header="Our Shop"
    sub-header="Dear customers, we have been selling AC service for 17 years in the Bangladesh market with reliability and honesty of global brands at reasonable prices. Apart from this, all types of spare parts for AC are sold wholesale and retail."
  />

  <CommonCardSlider />
  <CommonCardSlider1 :items="items" :number-of-scroll="1" :visible-slider="3" />
</template>

<script lang="ts" setup>
const items = ref([
  {
    name: "Kin Khao",
    image: "https://source.unsplash.com/200x200?girl",
    tag: ["Thai"],
  },
  {
    name: "Jū-Ni",
    image: "https://source.unsplash.com/200x200?natural",
    tag: ["Sushi", "Japanese", "$$$$"],
  },
  {
    name: "Delfina",
    image: "https://source.unsplash.com/200x200?beautiful",
    tag: ["Pizza", "Casual"],
  },
  {
    name: "San Tung",
    image: "https://source.unsplash.com/200x200?attraction",
    tag: ["Chinese", "$$"],
  },
  {
    name: "Anchor Oyster Bar",
    image: "https://source.unsplash.com/200x200?rose",
    tag: ["Seafood", "Cioppino"],
  },
  {
    name: "Locanda",
    image: "https://source.unsplash.com/200x200?beach",
    tag: ["Italian"],
  },
  {
    name: "Garden Creamery",
    image: "https://source.unsplash.com/200x200?forest",
    tag: ["Ice cream"],
  },
]);
</script>

<style scoped></style>
