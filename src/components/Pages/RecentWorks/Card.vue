<script setup lang="ts">
import type { RecentWork } from "~/contracts/api-contracts/recent-works";

defineProps<{
  work: RecentWork;
}>();
</script>

<template>
  <div class="bg-color-product-bg border-round-sm work-card relative">
    <NuxtImg
      class="work-banner w-full"
      :src="work.images[0]"
      :alt="work.company"
    />
    <span
      class="absolute work-type text-regular-4 text-primary-color-envitect-sam-blue bg-envitect-sam-blue-10"
    >
      {{ work.type }}
    </span>
    <div class="work-detail py-3 px-4">
      <h3 class="text-primary-color-dark-gray font-heading-5-semi-bold">
        {{ work.company }}
      </h3>
      <NuxtLink :to="`/recent-works/${work.id}`">
        <a class="work-link text-semi-bold-5 text-envitect-sam-blue-80">
          See Project Details
        </a>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-card {
  .work-banner {
    min-height: 381px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .work-type {
    top: 1rem;
    right: 1rem;
    padding: 4px 16px;
    border-radius: 2px;
  }

  .work-link {
    text-decoration: underline;
  }
}
</style>
