<script setup lang="ts">
import { getRecentWorks } from "~/app/api/getRecentWorks";
import type { RecentWork } from "~/contracts/api-contracts/recent-works";

const props = defineProps<{
  category: string;
}>();
const { data: recentWorks } = await getRecentWorks();
const relatedWorks = ref<RecentWork>({});
relatedWorks.value = recentWorks.value?.filter(
  (work) => work.type === props.category,
);

relatedWorks.value = recentWorks.value
  .filter((item) => item.type === props.category)
  .map(({ images, type, id, company }) => ({
    bannerImage: images[0],
    type,
    id,
    company,
  }));
</script>

<template>
  <div class="">
    <CommonSliderSection
      :items="relatedWorks"
      :number-of-scroll="1"
      :visible-item="3"
      slide-component="ProjectCard"
    >
      <template #header>
        <CommonSectionHeader class="mb-32px" header="Related Products" />
      </template>
    </CommonSliderSection>
  </div>
</template>

<style lang="scss" scoped></style>
