<template>
  <div class="container">
    <!-- header  -->
    <CommonSectionHeader
      class="mb-32px"
      header="Our Recent Works"
      sub-header="AC SERVICE is a leading AC Installation, Servicing, Repair, Maintenance, AC Sales & AC Rent Service All over Bangladesh. We have already completed 25000+ projects and 20 projects are running. AC SERVICE has an expert team and well-known engineers. Our clients are Hospitals, groups of companies, Markets, banks, Shopping malls, Multinational organizations, etc."
    />
    <!-- TabView -->
    <div>
      <div
        class="all-works-tab flex align-items-center justify-content-center mb-32px"
      >
        <button
          class="bg-primary border-none text-sm sm:text-base font-semibold px-4 sm:px-5 py-2 sm:py-3 cursor-pointer"
          @click="active = 0"
        >
          All Works
        </button>

        <button
          class="border-none text-sm sm:text-base font-semibold px-4 sm:px-5 py-2 sm:py-3 cursor-pointer"
          @click="active = 1"
        >
          Residential
        </button>
        <button
          class="border-none text-sm sm:text-base font-semibold px-4 sm:px-5 py-2 sm:py-3 cursor-pointer"
          @click="active = 2"
        >
          commercial
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
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const active = ref(0);
const options = ref([
  { label: "Active works", value: "Left" },
  { label: "Active works", value: "Right" },
  { label: "Active works", value: "Center" },
]);
</script>
<style lang="scss" scoped></style>
