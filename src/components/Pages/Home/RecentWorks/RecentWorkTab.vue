<template>
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
        <PagesHomeRecentWorksAllWorks />
      </TabPanel>
      <TabPanel>
        <PagesHomeRecentWorksResidentialWork />
      </TabPanel>
      <TabPanel>
        <PagesHomeRecentWorksCommercialWork />
      </TabPanel>
    </TabView>
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

<style lang="scss">
.p-tabview-nav-container {
  display: none !important;
}
.p-button {
  background: none;
}
</style>
