<template>
  <div>
    <CommonSectionHeader
      class="mb-32px"
      header="Our Shop"
      sub-header="Dear customers, we have been selling AC service for 17 years in the Bangladesh market with reliability and honesty of global brands at reasonable prices. Apart from this, all types of spare parts for AC are sold wholesale and retail."
    />

    <CommonCardListHeader class="mt-5 mb-3" label="Best Offer Products">
      <template #rightSideContent>
        <div class="button-container">
          <NuxtLink class="button-primary no-underline px-16px" to="/shop">
            View All
          </NuxtLink>
          <div id="offerProductSecPrevButton" />
          <div id="offerProductSecNextButton" />
        </div>
      </template>
    </CommonCardListHeader>

    <CommonCardCarosel
      :carousel-responsive-options="offerProductResponsiveOptions"
      :items="offerProducts"
      :number-of-scroll="1"
      :visible-slider="3"
      teleport-next-button="#offerProductSecNextButton"
      teleport-prev-button="#offerProductSecPrevButton"
    >
      <template #item="slotProps">
        <div class="mr-3 md:mr-5">
          <CommonOfferProductCard v-bind="{ ...slotProps.data }" />
        </div>
      </template>
    </CommonCardCarosel>

    <CommonCardListHeader class="mt-5 mb-3" label="Air Conditioner">
      <template #rightSideContent>
        <div class="button-container">
          <NuxtLink class="button-primary no-underline px-16px" to="/shop">
            View All
          </NuxtLink>
          <div id="acSecPrevButton" />
          <div id="acSecNextButton" />
        </div>
      </template>
    </CommonCardListHeader>

    <CommonCardCarosel
      :carousel-responsive-options="responsiveOptions"
      :items="airConditioners"
      :visible-slider="3"
      teleport-next-button="#acSecNextButton"
      teleport-prev-button="#acSecPrevButton"
    >
      <template #item="slotProps">
        <div class="mr-2 md:mr-3">
          <CommonProductCard v-bind="{ ...slotProps.data }" />
        </div>
      </template>
    </CommonCardCarosel>

    <CommonCardListHeader
      class="mt-5 mb-3"
      label="AC Spare Parts"
      style="margin-top: 100px"
    >
      <template #rightSideContent>
        <div class="button-container">
          <NuxtLink class="button-primary no-underline px-16px" to="/shop">
            View All
          </NuxtLink>
          <div id="acSparePartsPrevButton" />
          <div id="acSparePartsNextButton" />
        </div>
      </template>
    </CommonCardListHeader>

    <CommonCardCarosel
      :carousel-responsive-options="responsiveOptions"
      :items="acSpareSparts"
      :visible-slider="6"
      teleport-next-button="#acSparePartsNextButton"
      teleport-prev-button="#acSparePartsPrevButton"
    >
      <template #item="slotProps">
        <div class="mr-2 md:mr-3">
          <CommonProductCard v-bind="{ ...slotProps.data }" />
        </div>
      </template>
    </CommonCardCarosel>
  </div>
</template>

<script lang="ts" setup>
import { getAirConditioners } from "~/app/api/getAirConditioners";
import { getACSpareSparts } from "~/app/api/getACSpareSparts";
import { getOfferProducts } from "~/app/api/getOfferProducts";

const { data: offerProducts } = await getOfferProducts();
const { data: airConditioners } = await getAirConditioners();
const { data: acSpareSparts } = await getACSpareSparts();

const responsiveOptions = [
  {
    breakpoint: 1290,
    numVisible: 6,
    numScroll: 1,
  },
  {
    breakpoint: 860,
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: 645,
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: 320,
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: 215,
    numVisible: 1,
    numScroll: 1,
  },
];

const offerProductResponsiveOptions = [
  {
    breakpoint: 1290,
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: 860,
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: 645,
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: 320,
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: 215,
    numVisible: 1,
    numScroll: 1,
  },
];
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}
</style>
