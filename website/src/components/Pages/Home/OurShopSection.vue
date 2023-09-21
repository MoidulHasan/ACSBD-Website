<template>
  <div>
    <CommonSectionHeader
      class="mb-32px"
      header="Our Shop"
      sub-header="Dear customers, we have been selling AC service for 17 years in the Bangladesh market with reliability and honesty of global brands at reasonable prices. Apart from this, all types of spare parts for AC are sold wholesale and retail."
    />

    <CommonCardListHeader class="mb-16px" label="Air Conditioner">
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

    <CommonCardCarousel
      :items="airConditioners"
      :number-of-scroll="1"
      :visible-slider="6"
      teleport-next-button="#acSecNextButton"
      teleport-prev-button="#acSecPrevButton"
    >
      <template #item="slotProps">
        <CommonProductCard v-bind="{ ...slotProps.data }" />
      </template>
    </CommonCardCarousel>

    <CommonCardListHeader
      class="mb-16px"
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

    <CommonCardCarousel
      :items="airConditioners"
      :number-of-scroll="1"
      :visible-slider="6"
      teleport-next-button="#acSparePartsNextButton"
      teleport-prev-button="#acSparePartsPrevButton"
    >
      <template #item="slotProps">
        <CommonProductCard v-bind="{ ...slotProps.data }" />
      </template>
    </CommonCardCarousel>
  </div>
</template>

<script lang="ts" setup>
import { getAirConditioners } from "~/app/api/getAirConditioners";

const { data: airConditioners } = await getAirConditioners();
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}
</style>
