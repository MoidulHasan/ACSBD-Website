<script setup lang="ts">
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<{
  product: ProductI;
}>();
const active = ref(0);
const selectedType = ref();
const types = ref([
  { name: "DESCRIPTION" },
  { name: "ADDITIONAL INFORMATION" },
  { name: "WARRANTY & SERVICES" },
  { name: "REVIEWS" },
]);

watch(
  () => selectedType.value,
  () => {
    if (selectedType.value.name === "DESCRIPTION") {
      active.value = 0;
    } else if (selectedType.value.name === "ADDITIONAL INFORMATION") {
      active.value = 1;
    } else if (selectedType.value.name === "WARRANTY & SERVICES") {
      active.value = 2;
    } else {
      active.value = 4;
    }
  },
);

watch(active, () => {
  console.log(active.value);
});
</script>

<template>
  <div class="mb-6 lg:mb-8">
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
      class="all-works-tab hidden md:flex flex-wrap align-items-center mb-32px"
    >
      <button
        class="flex-auto text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer border-round-left"
        :class="{ 'button-tab': active === 0 }"
        @click="active = 0"
      >
        Description
      </button>

      <button
        class="flex-auto text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer"
        :class="{ 'button-tab': active === 1 }"
        @click="active = 1"
      >
        Additional Information
      </button>
      <button
        class="flex-auto text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer"
        :class="{ 'button-tab': active === 2 }"
        @click="active = 2"
      >
        WARRANTY & SERVICES
      </button>
      <button
        class="flex-auto text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer border-round-right"
        :class="{ 'button-tab': active === 3 }"
        @click="active = 3"
      >
        REVIEWS
      </button>
    </div>
    <TabView v-model:activeIndex="active" class="work-details">
      <TabPanel v-for="type in types" :key="type.name">
        <PagesProductDetailTab :type="type.name" :product="product" />
      </TabPanel>
    </TabView>
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
