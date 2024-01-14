<script setup lang="ts">
import type { RecentWork } from "~/contracts/api-contracts/recent-works";

defineProps<{
  works: RecentWork[];
}>();
</script>

<template>
  <div class="grid">
    <div
      v-for="work in works"
      :key="work.id"
      class="col-12 md:col-6 lg:col-4 relative"
    >
      <PagesRecentWorksCard :work="work" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
