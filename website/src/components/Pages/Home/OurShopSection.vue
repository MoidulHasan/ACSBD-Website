<template>
  <div>
    <CommonSectionHeader
      header="Our Shop"
      sub-header="Dear customers, we have been selling AC service for 17 years in the Bangladesh market with reliability and honesty of global brands at reasonable prices. Apart from this, all types of spare parts for AC are sold wholesale and retail."
    />

    <CommonCardListHeader label="Air Conditioner">
      <template #rightSideContent>
        <div class="button-container">
          <div id="prevButton" class="mb-5" />
          <div id="nextButton" class="mb-5" />
        </div>
      </template>
    </CommonCardListHeader>
    <CommonCardSlider1
      :items="items"
      :number-of-scroll="1"
      :visible-slider="6"
      teleport-next-button="#nextButton"
      teleport-prev-button="#prevButton"
    >
      <template #item="slotProps">
        <CommonProductCard v-bind="{ ...slotProps.data }" />
      </template>
    </CommonCardSlider1>
  </div>
</template>

<script lang="ts" setup>
const items = ref([
  {
    id: 1,
    name: "Whirlpool Fantasia AC SPOW 224 1.0 Ton",
    image: "https://source.unsplash.com/200x200?girl",
    rating: 4.5,
    price: 59000,
    discount_price: 48000,
    discount_percentage: 30,
  },
  {
    id: 2,
    name: "Black 1.5 Ton GMCC Rotary Compressor",
    image: "https://source.unsplash.com/200x200?natural",
    rating: 4.5,
    price: 59000,
    discount_price: 48000,
    discount_percentage: 30,
  },
  {
    id: 3,
    name: "Whirlpool Supreme Cool Inverter 3S Corp INV 1 Ton",
    image: "https://source.unsplash.com/200x200?beautiful",
    rating: 4.5,
    price: 59000,
    discount_price: 48000,
    discount_percentage: 30,
  },
  {
    id: 4,
    name: "Vacuum Rotary vane pump Air conditioning",
    image: "https://source.unsplash.com/200x200?attraction",
    rating: 4.5,
    price: 59000,
    discount_price: 48000,
    discount_percentage: 30,
  },
  {
    id: 5,
    name: "Midea 1.0 MS-12KBTU Ton Wall Type AC",
    image: "https://source.unsplash.com/200x200?rose",
    rating: 4.5,
    price: 59000,
    discount_price: 48000,
    discount_percentage: 30,
  },
  {
    id: 6,
    name: "Round Copper Pipes, Thickness: 4 mm",
    image: "https://source.unsplash.com/200x200?beach",
    rating: 4.5,
    price: 59000,
    discount_price: 48000,
    discount_percentage: 30,
  },
  {
    id: 7,
    name: "Midea R410A DC VRF (VC pro Modular series)",
    image: "https://source.unsplash.com/200x200?forest",
    rating: 4.5,
    price: 59000,
    discount_price: 48000,
    discount_percentage: 30,
  },
  {
    id: 8,
    name: "Round Copper Pipes, Thickness: 4 mm",
    image: "https://source.unsplash.com/200x200?beach",
    rating: 4.5,
    price: 59000,
    discount_price: 48000,
    discount_percentage: 30,
  },
  {
    id: 9,
    name: "Midea R410A DC VRF (VC pro Modular series)",
    image: "https://source.unsplash.com/200x200?forest",
    rating: 4.5,
    price: 59000,
    discount_price: 48000,
    discount_percentage: 30,
  },
]);
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}
</style>
