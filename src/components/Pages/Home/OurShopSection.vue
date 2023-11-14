<template>
  <div>
    <CommonSectionHeader
      class="mb-32px"
      header="Our Shop"
      sub-header="Dear customers, we have been selling AC service for 17 years in the Bangladesh market with reliability and honesty of global brands at reasonable prices. Apart from this, all types of spare parts for AC are sold wholesale and retail."
    />

    <CommonCardListHeader class="mt-5 mb-3">
      <template #leftSideContent>
        <div class="flex justify-content-between align-items-center">
          <h3
            class="font-heading-4 text-primary-color-navy-blue mr-1 md:mr-3 label"
          >
            Best Offer Products
          </h3>

          <div class="hidden md:block">
            <CommonTimeCounter
              :count-down-to-time="'2023-12-28T09:00:00Z'"
              show-value-only
            />
          </div>
        </div>
      </template>

      <template #rightSideContent>
        <div class="button-container">
          <NuxtLink
            :to="{ name: 'products' }"
            class="button-primary no-underline p-1 md:p-3 mr-2 md:mr-3"
          >
            View All
          </NuxtLink>
          <div
            id="offerProductSecPrevButton"
            class="flex justify-content-center align-items-center mr-1 md:mr-2"
          />
          <div
            id="offerProductSecNextButton"
            class="flex justify-content-center align-items-center"
          />
        </div>
      </template>
    </CommonCardListHeader>

    <CommonSwiperCardCarousel
      :items="offerProducts"
      :number-of-scroll="1"
      :visible-slider="3"
      teleport-next-button="#offerProductSecNextButton"
      teleport-prev-button="#offerProductSecPrevButton"
    >
      <template #item="slotProps">
        <div>
          <CommonProductCard v-bind="{ ...slotProps.data }" />
        </div>
      </template>
    </CommonSwiperCardCarousel>

    <CommonCardListHeader class="mt-5 mb-3" label="Air Conditioner">
      <template #rightSideContent>
        <div class="button-container">
          <NuxtLink
            :to="{ name: 'products' }"
            class="button-primary no-underline p-1 md:p-3 mr-2 md:mr-3"
          >
            View All
          </NuxtLink>
          <div
            id="acSecPrevButton"
            class="flex justify-content-center align-items-center mr-1 md:mr-2"
          />
          <div
            id="acSecNextButton"
            class="flex justify-content-center align-items-center"
          />
        </div>
      </template>
    </CommonCardListHeader>

    <CommonSwiperCardCarousel
      ref="swiperContainer"
      :items="airConditioners"
      :visible-slider="3"
      teleport-next-button="#acSecNextButton"
      teleport-prev-button="#acSecPrevButton"
    >
      <template #item="slotProps">
        <div>
          <CommonProductCard v-bind="{ ...slotProps.data }" />
        </div>
      </template>
    </CommonSwiperCardCarousel>

    <CommonCardListHeader
      class="mt-5 mb-3"
      label="AC Spare Parts"
      style="margin-top: 100px"
    >
      <template #rightSideContent>
        <div class="button-container">
          <NuxtLink
            :to="{ name: 'products' }"
            class="button-primary no-underline p-1 md:p-3 mr-2 md:mr-3"
          >
            View All
          </NuxtLink>
          <div
            id="acSparePartsPrevButton"
            class="flex justify-content-center align-items-center mr-1 md:mr-2"
          />
          <div
            id="acSparePartsNextButton"
            class="flex justify-content-center align-items-center"
          />
        </div>
      </template>
    </CommonCardListHeader>

    <CommonSwiperCardCarousel
      ref="swiperContainer"
      :items="acSpareSparts"
      :visible-slider="3"
      teleport-next-button="#acSparePartsNextButton"
      teleport-prev-button="#acSparePartsPrevButton"
    >
      <template #item="slotProps">
        <div>
          <CommonProductCard v-bind="{ ...slotProps.data }" />
        </div>
      </template>
    </CommonSwiperCardCarousel>
  </div>
</template>

<script lang="ts" setup>
import { getAirConditioners } from "~/app/api/getAirConditioners";
import { getACSpareSparts } from "~/app/api/getACSpareSparts";
import { getOfferProducts } from "~/app/api/getOfferProducts";

const { data: offerProducts } = await getOfferProducts();
const { data: airConditioners } = await getAirConditioners();
const { data: acSpareSparts } = await getACSpareSparts();
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.label {
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}

@media (max-width: 768px) {
  .label {
    font-size: 14px;
  }
}
</style>
