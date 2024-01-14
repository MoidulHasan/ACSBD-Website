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
  <div class="container mb-8 mt-3">
    <div>Detail Page of {{ recentWork }}</div>
  </div>
</template>

<style scoped></style>
