<!-- eslint-disable vue/multi-word-component-names -->
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
          class="w-235px h-50px text-dark-gray-60 font-heading-5-semi-bold border-none cursor-pointer border-round-left"
          :class="{
            'button-tab': active === 0,
          }"
          @click="active = 0"
        >
          All Works
        </button>

        <button
          class="w-235px h-50px text-dark-gray-60 font-heading-5-semi-bold border-none cursor-pointer"
          :class="{ 'button-tab': active === 1 }"
          @click="active = 1"
        >
          Residential
        </button>
        <button
          class="w-235px h-50px text-dark-gray-60 font-heading-5-semi-bold border-none cursor-pointer border-round-right"
          :class="{ 'button-tab': active === 2 }"
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
const active = ref(0);
</script>
<style lang="scss" scoped></style>
