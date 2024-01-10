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
        v-model="selectedCity"
        :options="cities"
        option-label="name"
        placeholder="Select a City"
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
    <TabView v-model:activeIndex="active">
      <TabPanel>
        <PagesHomeRecentWorkAllWorks />
      </TabPanel>
      <TabPanel>
        <PagesHomeRecentWorkResidentialWork />
      </TabPanel>
      <TabPanel>
        <PagesHomeRecentWorkCommercialWork />
      </TabPanel>
    </TabView>
    <div class="mt-5 flex justify-content-center">
      <NuxtLink to="recent-works">
        <ViewAllButton label="View Recent Works" />
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ViewAllButton from "~/components/Common/ViewAllButton.vue";

const active = ref(0);
const selectedCity = ref();
const cities = ref([
  { name: "All Works" },
  { name: "Residential" },
  { name: "Commercial" },
]);
watch(
  () => selectedCity.value,
  () => {
    selectedCity.value.name === "Residential"
      ? (active.value = 1)
      : selectedCity.value.name === "Commercial"
      ? (active.value = 2)
      : (active.value = 0);
  },
);
</script>
<style lang="scss" scoped></style>
