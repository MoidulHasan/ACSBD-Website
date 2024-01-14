<script setup lang="ts">
import { getRecentWorks } from "~/app/api/getRecentWorks";
import type { RecentWork } from "~/contracts/api-contracts/recent-works";

const route = useRoute();

definePageMeta({
  title: "Recent Work",
  name: "Work",
});

const { data: recentWorks } = await getRecentWorks();
const recentWork = ref<RecentWork>({});
recentWork.value = recentWorks.value?.find(
  (work) => work.id === Number(route.params.id),
);

const formattedDate = (date: string) => {
  const dateString = new Date(date);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = dateString.toLocaleDateString("en-GB", options);
  return formattedDate;
};
</script>

<template>
  <div class="container mb-8 mt-3 work-detail">
    <CommonSectionHeader
      :header="recentWork.company"
      :sub-header="recentWork.brief"
    />
    <div class="work-summary mt-5 grid">
      <div class="col-12 md:col-6 lg:col-8">
        <div class="banner-image w-full">
          <NuxtImg
            class="top-image w-full border-round-sm"
            :src="recentWork.images[1]"
            :alt="recentWork.company"
          />
        </div>
      </div>
      <div class="col-12 md:col-6 lg:col-4">
        <div class="key-details border-round-lg bg-color-product-bg p-4 h-full">
          <h2
            class="font-heading-4-semi-bold mb-4 text-primary-color-dark-gray"
          >
            Product Details
          </h2>
          <div class="key-info mb-5">
            <h2 class="text-primary-color-dark-gray font-heading-5 pb-2">
              Date
            </h2>
            <p class="text-medium-2 text-dark-gray-80">
              {{ formattedDate(recentWork.startDate) }} to
              {{ formattedDate(recentWork.endDate) }}
            </p>
          </div>
          <div class="key-info mb-5">
            <h2 class="text-primary-color-dark-gray font-heading-5 pb-2">
              Client
            </h2>
            <p class="text-medium-2 text-dark-gray-80">
              {{ recentWork.company }}
            </p>
          </div>
          <div class="key-info mb-5">
            <h2 class="text-primary-color-dark-gray font-heading-5 pb-2">
              Project Type
            </h2>
            <p class="text-medium-2 text-dark-gray-80">
              {{ recentWork.type }}
            </p>
          </div>
          <div class="key-info mb-5">
            <h2 class="text-primary-color-dark-gray font-heading-5 pb-2">
              Completed By
            </h2>
            <p class="text-medium-2 text-dark-gray-80">AC Service BD</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-detail {
  .top-image {
    //max-height: 514px;
    //border-radius: 4px;
  }
}
</style>
