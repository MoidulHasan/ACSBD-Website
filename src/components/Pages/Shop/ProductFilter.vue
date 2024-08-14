<script lang="ts" setup>
import type { FilterItem } from "~/contracts/common";

const props = defineProps<{
  filterOptions: FilterItem[];
  modelValue?: string[] | number[];
  name?: string;
  isFilterTop: boolean;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", filterValue: number[] | string[]): void;
}>();

const filterValue = ref(props.modelValue ?? []);

watch(filterValue, () => {
  emits("update:modelValue", filterValue.value);
});
</script>

<template>
  <div>
    <div v-for="(filter, index) in filterOptions" :key="filter.name">
      <div v-if="!filter.children.length" class="my-12px">
        <div
          :for="filter.id.toString()"
          class="checkbox-container flex align-items-center"
        >
          <Checkbox
            v-model="filterValue"
            :input-id="filter.id.toString()"
            :name="name"
            :value="filter.id"
          />

          <label
            :for="filter.id.toString()"
            class="ml-2 text-regular-4 text-primary-color-dark-gray cursor-pointer"
          >
            {{ filter.name }}
          </label>
        </div>
      </div>

      <div v-else class="w-100" style="padding: 2px 6px">
        <Panel
          :collapsed="!(isFilterTop && index === 0)"
          :header="filter.name"
          toggleable
        >
          <template #header>
            <div class="flex align-items-center">
              <Checkbox
                v-model="filter.value"
                :input-id="filter.id.toString()"
                :value="filter.id"
                @click.stop
              />

              <label
                :class="[
                  'ml-2 cursor-pointer',
                  'text-regular-4 text-primary-color-dark-gray',
                ]"
                :for="filter.id.toString()"
              >
                {{ filter.name }}
              </label>
            </div>
          </template>

          <template #togglericon="{ collapsed }">
            <i :class="['pi ', collapsed ? 'pi-angle-down' : 'pi-angle-up']" />
          </template>

          <div class="sub-filter-container mt-8px mb-12px">
            <PagesShopProductFilter
              v-model="filter.value"
              :filter-options="filter.children"
              :is-filter-top="false"
              :name="filter.name"
            />
          </div>
        </Panel>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub-filter-container {
  max-height: 180px;
  overflow-y: scroll;

  .checkbox-container {
    width: 100%;
    padding: 2px 6px;
  }

  .checkbox-container:hover {
    background: var(--envitect-sam-blue-20);
    border-radius: 5px;
  }
}

::v-deep(.p-panel-header) {
  border: none;
}

::v-deep(.p-panel-content) {
  background: none;
  border: none;
}

::v-deep(.p-checkbox .p-checkbox-box.p-highlight) {
  border-color: var(--primary-color-envitect-sam-blue);
  background: var(--primary-color-envitect-sam-blue);
}

::-webkit-scrollbar {
  width: 10px;
  background: var(--primary-color-white);
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--dark-gray-10);
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--dark-gray-20);
}
</style>
