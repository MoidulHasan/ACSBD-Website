<script setup lang="ts">
import { getPricingLists } from "~/app/api/getPricingLists";

definePageMeta({
  title: "Work Pricing",
  name: "work-pricing",
});

const { data: pricingLists } = await getPricingLists();

const active = ref(0);
const selectedACOptions = ref();

const acOptions = computed(() => {
  return pricingLists.value.map((item) => ({ name: item.name }));
});

const acOptionsLastIndex = ref(acOptions.value.length - 1);

watch(
  () => selectedACOptions.value,
  () => {
    const selectedIndex = acOptions.value.findIndex(
      (option) => option.name === selectedACOptions.value?.name,
    );
    active.value = selectedIndex !== -1 ? selectedIndex : 0;
  },
);
</script>

<template>
  <div class="mt-5 mb-8">
    <div class="container">
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
          v-for="(acOption, index) in acOptions"
          :key="acOption.name"
          :index="index"
          class="w-235px h-50px text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer"
          :class="[
            { 'border-round-left': index === 0 },
            { 'border-round-right': index === acOptionsLastIndex },
            { 'button-tab': active === index },
          ]"
          @click="active = index"
        >
          {{ acOption.name }}
        </button>
      </div>
      <TabView v-model:activeIndex="active">
        <TabPanel v-for="acOption in acOptions" :key="acOption.id">
          <PagesWorkPricingACTabDetail :ac-data="pricingLists[active]" />
        </TabPanel>
      </TabView>
    </div>
    <PagesWorkPricingTermsConditions />
  </div>
</template>

<style lang="scss" scoped></style>
