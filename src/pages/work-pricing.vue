<script setup lang="ts">
import { getPricingLists } from "~/app/api/getPricingLists";

const active = ref(0);
const selectedACOptions = ref();
const acOptions = ref([
  { name: "Split AC" },
  { name: "VRF AC" },
  { name: "Chiller AC" },
]);
watch(
  () => selectedACOptions.value,
  () => {
    selectedACOptions.value.name === "VRF AC"
      ? (active.value = 1)
      : selectedACOptions.value.name === "Chiller AC"
        ? (active.value = 2)
        : (active.value = 0);
  },
);

const { data: pricingLists } = await getPricingLists();

const splitAcData = computed(() => {
  return pricingLists.value.find((acData) => {
    return acData.name === "Split AC";
  });
});
</script>

<template>
  <div class="container">
    <div class="mt-5 mb-8">
      <div class="w-full block md:hidden flex justify-content-center">
        <Dropdown
          v-model="selectedACOptions"
          :options="acOptions"
          option-label="name"
          placeholder="Select a AC Type"
          class="w-full text-primary-color-navy-blue px-16px py-12px bg-primary-50 mb-5 font-medium-2"
        />
      </div>

      <div
        class="all-works-tab hidden md:flex align-items-center justify-content-center mb-5"
      >
        <button
          class="w-235px h-50px text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer border-round-left"
          :class="{ 'button-tab': active === 0 }"
          @click="active = 0"
        >
          Split AC
        </button>

        <button
          class="w-235px h-50px text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer"
          :class="{ 'button-tab': active === 1 }"
          @click="active = 1"
        >
          VRF AC
        </button>
        <button
          class="w-235px h-50px text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer border-round-right"
          :class="{ 'button-tab': active === 2 }"
          @click="active = 2"
        >
          Chiller AC
        </button>
      </div>
      <TabView v-model:activeIndex="active">
        <TabPanel>
          <PagesWorkPricingSplitAC :ac-data="splitAcData" />
        </TabPanel>
        <TabPanel>
          <PagesWorkPricingVRFAC />
        </TabPanel>
        <TabPanel>
          <PagesWorkPricingChillerAC />
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
