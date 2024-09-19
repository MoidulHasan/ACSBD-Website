<script setup lang="ts">
import type { Work } from "~/contracts/api-contracts/recentWorkInterfaces";

defineProps<{
  works: Work[];
}>();
</script>

<template>
  <div class="grid">
    <div
      v-for="work in works"
      :key="work.slug"
      class="col-12 md:col-6 lg:col-4 relative"
    >
      <PagesRecentWorksCard
        :id="work.slug"
        :slug="work.slug"
        :image="work.image"
        :type="work.type"
        :client="work.client"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
