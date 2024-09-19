<script setup lang="ts">
import type { WorkResponse } from "~/contracts/api-contracts/recentWorkInterfaces";

const route = useRoute();

definePageMeta({
  title: "Recent Work",
  name: "Work",
});

const { $apiClient } = useNuxtApp();

const { data: recentWorksData } = await useAsyncData<WorkResponse>(
  "recent-works",
  () =>
    $apiClient(`/works`, {
      params: {
        is_latest: true,
      },
    }),
);

const recentWork = computed(() => {
  return recentWorksData.value?.data?.data.find(
    (work) => work.slug === route.params.slug,
  );
});

const relatedWorks = computed(() => {
  return recentWorksData.value?.data?.data.filter(
    (work) => work.type === recentWork.value?.type,
  );
});

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
      :header="recentWork.title"
      :sub-header="recentWork.sub_title"
    />
    <div class="work-summary mt-5 grid mb-3">
      <div class="col-12 md:col-6 lg:col-8">
        <div class="banner-image w-full md:h-full relative">
          <NuxtImg
            class="top-image w-full border-round-sm md:h-full"
            :src="recentWork.image"
            :alt="recentWork.client"
          />
          <p
            class="absolute work-type text-regular-4 text-primary-color-envitect-sam-blue bg-envitect-sam-blue-10"
          >
            {{ recentWork.type }}
          </p>
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
              {{ formattedDate(recentWork.from_date) }} to
              {{
                recentWork?.to_date
                  ? formattedDate(recentWork.to_date)
                  : "Running"
              }}
            </p>
          </div>
          <div class="key-info mb-5">
            <h2 class="text-primary-color-dark-gray font-heading-5 pb-2">
              Client
            </h2>
            <p class="text-medium-2 text-dark-gray-80">
              {{ recentWork.client }}
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
    <p class="text-primary-color-dark-gray mb-6 text-justify">
      <span class="font-semibold">Project's Brief: </span>
      {{ recentWork.description }}
    </p>
    <PagesRecentWorksProjectGallery
      :product-images="recentWork.gallery_images"
    />
    <PagesRecentWorksRelatedWork :related-works="relatedWorks" />
  </div>
</template>

<style lang="scss" scoped>
.work-detail {
  .top-image {
    max-height: 514px;
  }

  .work-type {
    top: 1rem;
    right: 1rem;
    padding: 4px 16px;
    border-radius: 2px;
  }
}
</style>
