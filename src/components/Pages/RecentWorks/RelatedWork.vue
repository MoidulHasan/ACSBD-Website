<script setup lang="ts">
import type { Work } from "~/contracts/api-contracts/recentWorkInterfaces";

const props = defineProps<{
  relatedWorks: Work[];
}>();
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
        <CommonSectionHeader class="mb-32px" header="Related Works" />
      </template>
    </CommonSliderSection>
  </div>
</template>

<style lang="scss" scoped></style>
