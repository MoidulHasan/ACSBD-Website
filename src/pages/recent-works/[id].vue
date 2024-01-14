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
</script>

<template>
  <div class="container mb-8 mt-3 work-detail">
    <CommonSectionHeader
      :header="recentWork.company"
      :sub-header="recentWork.brief"
    />
    <div class="work-summary grid">
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
        <div class="key-details border-round-lg bg-color-product-bg p-4">
          <h2
            class="font-heading-4-semi-bold mb-4 text-primary-color-dark-gray"
          >
            Product Details
          </h2>
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
