<script lang="ts" setup>
import type { SortByOptionI } from "~/contracts/api-contracts/ProductsInterfaces";

defineProps<{
  totalProductsFound: number;
  category?: string;
}>();

const emits = defineEmits<{
  (e: "onSortByOptionChange", SortByOptionValue: string): void;
  (e: "onViewByOptionChange", ViewByOptionValue: string): void;
}>();

const sortByOptions = ref<SortByOptionI[]>([
  { label: "Latest Products", value: "latest" },
  { label: "Price (Low to High)", value: "price.regular" },
  { label: "Price (High to Low)", value: "-price.regular" },
  { label: "Rating (Low to High)", value: "ratings.average" },
  { label: "Rating (High to Low)", value: "-ratings.average" },
]);

const sortBy = ref<SortByOptionI>(sortByOptions.value[0]);
const viewBy = ref("grid");

const changeViewMode = (mode: string) => {
  viewBy.value = mode;
  emits("onViewByOptionChange", mode);
};

const handleSortByOptionChange = () => {
  emits("onSortByOptionChange", sortBy.value.value);
};
</script>

<template>
  <div
    class="w-full flex justify-content-between align-items-center header-container"
  >
    <p class="text-medium-2 text-primary-color-dark-gray">
      {{ totalProductsFound }} Items Found
      <span v-if="category">for "{{ category }}"</span>
    </p>
    <div class="flex align-items-center">
      <div class="sort-container flex align-items-center">
        <p class="text-medium-2 text-primary-color-dark-gray mr-8px">
          Sort By:
        </p>
        <Dropdown
          v-model="sortBy"
          :options="sortByOptions"
          class="dropdown-input"
          input-class="p-1"
          option-label="label"
          placeholder="Sort By"
          @change="handleSortByOptionChange"
        >
          <template #option="slotProps">
            <div
              class="w-full flex align-items-center px-3 py-2 bg-white hover:surface-300"
            >
              {{ slotProps.option.label }}
            </div>
          </template>
        </Dropdown>
      </div>

      <div class="ml-24px flex align-items-center">
        <p class="text-medium-2 text-primary-color-dark-gray mr-8px">View:</p>

        <button
          :class="[
            'view-button',
            {
              isInActive: viewBy !== 'grid',
            },
          ]"
          @click="() => changeViewMode('grid')"
        >
          <img alt="view by grid" src="~/assets/images/icons/box-grid.svg" />
        </button>

        <button
          :class="[
            'view-button',
            {
              isInActive: viewBy !== 'column',
            },
          ]"
          @click="() => changeViewMode('column')"
        >
          <img
            alt="view by column"
            src="~/assets/images/icons/triple-bar.svg"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  height: 48px;
  padding: 12px 16px;
  border-radius: 4px;
  background: var(--product-Front-color, #f9f9f9);
}

.dropdown-input {
  width: 250px;
  flex-shrink: 0;
  border-radius: 2px;
  background: var(--color-6, #fff);

  padding: 0;
  height: 32px;
}

.view-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  flex-shrink: 0;
  padding: 0;

  background: none;
  border: none;

  cursor: pointer;
}

.isInActive {
  img {
    opacity: 0.5;
  }
}
</style>
