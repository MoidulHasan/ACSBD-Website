<script lang="ts" setup>
import type { DataResponse } from "~/contracts/api-contracts/apiResponse";
import type { Campaign } from "~/contracts/api-contracts/ProductsInterfaces";

const { $apiClient } = useNuxtApp();

const { data: campaignData } = useAsyncData<
  DataResponse<Campaign[]>,
  unknown,
  Campaign[]
>("our-shop-products", () => $apiClient(`/our-shop-products`), {
  transform: (response) => response?.data || [],
});
</script>

<template>
  <div>
    <CommonSectionHeader
      class="mb-32px"
      header="Our Shop"
      sub-header="Dear customers, we have been selling AC service for 17 years in the Bangladesh market with reliability and honesty of global brands at reasonable prices. Apart from this, all types of spare parts for AC are sold wholesale and retail."
    />

    <div v-for="campaign in campaignData" :key="campaign.slug">
      <CommonCardListHeader class="mt-5 mb-3">
        <template #leftSideContent>
          <div class="flex justify-content-between align-items-center">
            <h3
              class="font-heading-4 text-primary-color-navy-blue mr-1 md:mr-3 label"
            >
              {{ campaign.name }}
            </h3>

            <div v-if="campaign.campaign_ending_date" class="hidden md:block">
              <CommonTimeCounter
                :count-down-to-time="campaign.campaign_ending_date"
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
        :items="campaign.products"
        :number-of-scroll="1"
        :visible-slider="3"
        teleport-next-button="#offerProductSecNextButton"
        teleport-prev-button="#offerProductSecPrevButton"
      >
        <template #item="slotProps">
          <div>
            <CommonProductCard :product-data="slotProps.data" />
          </div>
        </template>
      </CommonSwiperCardCarousel>
    </div>
  </div>
</template>

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
