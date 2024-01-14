<script setup lang="ts">
import { getRecentWorks } from "~/app/api/getRecentWorks";
import type { RecentWork } from "~/contracts/api-contracts/recent-works";

definePageMeta({
  title: "Recent Works",
  name: "recent-works",
});

const active = ref(0);
const selectedType = ref();
const types = ref([
  { name: "All Works" },
  { name: "Residential" },
  { name: "Commercial" },
]);

const { data: recentWorks } = await getRecentWorks();
const works = ref<RecentWork[]>([]);
console.log(recentWorks.value);

watch(
  () => selectedType.value,
  () => {
    if (selectedType.value.name === "Residential") {
      active.value = 1;
      works.value = recentWorks.value.filter(
        (work: RecentWork) => work.type === "residential",
      );
    } else if (selectedType.value.name === "Commercial") {
      active.value = 2;
      works.value = recentWorks.value.filter(
        (work: RecentWork) => work.type === "commercial",
      );
    } else {
      active.value = 0;
      works.value = recentWorks.value;
    }
  },
);

watch(
  () => active.value,
  () => {
    if (active.value === 1) {
      works.value = recentWorks.value.filter(
        (work: RecentWork) => work.type === "residential",
      );
    } else if (active.value === 2) {
      works.value = recentWorks.value.filter(
        (work: RecentWork) => work.type === "commercial",
      );
    } else {
      works.value = recentWorks.value;
    }
  },
);

onMounted(() => {
  works.value = recentWorks.value;
});
</script>

<template>
  <div class="container recentworks">
    <!-- header  -->
    <CommonSectionHeader
      class="mb-32px"
      header="Our Recent Works"
      sub-header="AC SERVICE is a leading AC Installation, Servicing, Repair, Maintenance, AC Sales & AC Rent Service All over Bangladesh. We have already completed 25000+ projects and 20 projects are running. AC SERVICE has an expert team and well-known engineers. Our clients are Hospitals, groups of companies, Markets, banks, Shopping malls, Multinational organizations, etc."
    />
    <!-- TabView -->
    <div class="w-full block md:hidden flex justify-content-center">
      <Dropdown
        v-model="selectedType"
        :options="types"
        option-label="name"
        placeholder="Type of Work"
        class="w-full text-primary-color-navy-blue px-16px py-12px bg-primary-50 mb-16px font-medium-2"
      />
    </div>

    <div
      class="all-works-tab hidden md:flex align-items-center justify-content-center mb-32px"
    >
      <button
        class="w-235px h-50px text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer border-round-left"
        :class="{ 'button-tab': active === 0 }"
        @click="active = 0"
      >
        All Works
      </button>

      <button
        class="w-235px h-50px text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer"
        :class="{ 'button-tab': active === 1 }"
        @click="active = 1"
      >
        Residential
      </button>
      <button
        class="w-235px h-50px text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer border-round-right"
        :class="{ 'button-tab': active === 2 }"
        @click="active = 2"
      >
        Commercial
      </button>
    </div>
    <TabView v-model:activeIndex="active" class="work-details">
      <TabPanel v-for="type in types" :key="type.name">
        <PagesRecentWorksList :works="works" />
      </TabPanel>
    </TabView>
    <div class="mt-5 flex justify-content-center mb-8">
      <NuxtLink to="recent-works">
        <Button
          class="lode-more-button border-primary-color-envitect-sam-blue bg-primary-color-white text-primary-color-envitect-sam-blue text-semi-bold-1"
        >
          Load More
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-details :deep(.p-tabview-nav-container) {
  display: none;
}

.lode-more-button {
  display: inline-flex;
  padding: 12px 48px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
}

*:focus {
  box-shadow: none !important;
}
</style>
