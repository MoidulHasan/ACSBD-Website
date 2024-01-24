<script setup lang="ts">
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<{
  product: ProductI;
}>();
</script>

<template>
  <div>
    <h1>Hello</h1>
    {{ product }}

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
  </div>
</template>

<style lang="scss" scoped></style>
