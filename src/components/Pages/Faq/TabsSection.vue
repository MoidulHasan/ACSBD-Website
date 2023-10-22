<template>
  <div class="max-w-full flex flex-column align-items-center">
    <div class="max-w-full">
      <Carousel
        :num-scroll="1"
        :num-visible="4"
        :responsive-options="responsiveOptions"
        :show-indicators="false"
        :show-navigators="showNavigator"
        :value="faqTabs"
      >
        <template #item="slotProps">
          <div
            class="flex justify-content-center align-items-center px-1 md:px-3"
          >
            <PagesFaqTabButton
              :image="slotProps.data.image"
              :is-active="slotProps.index === activeTab"
              :title="slotProps.data.title"
              @handle-state-change="
                () => handleFaqSectionTabChange(slotProps.index)
              "
            />
          </div>
        </template>

        <template #previousicon>
          <i class="pi pi-arrow-left" />
        </template>

        <template #nexticon>
          <i class="pi pi-arrow-right" />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWindowSize } from "@vueuse/core";
import type { FAQSection } from "~/contracts/api-contracts/faqData";

const { width } = useWindowSize();

const props = defineProps<{
  faqTabs: Omit<FAQSection, "tabs">[];
  activeTabIndex?: number;
}>();

const emits = defineEmits<{
  (e: "onActiveTabChange", activeTabIndex: number): void;
}>();

const activeTab = ref(props.activeTabIndex ?? null);

const responsiveOptions = ref([
  {
    breakpoint: "845px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "645px",
    numVisible: 2,
    numScroll: 2,
  },
]);

const showNavigator = computed(() => {
  return width ? width.value < 846 : true;
});

const handleFaqSectionTabChange = (activeTabIndex: number) => {
  activeTab.value = activeTabIndex;
  emits("onActiveTabChange", activeTabIndex);
};
</script>

<style lang="scss" scoped>
::v-deep(.p-carousel-next) {
  padding: 8px !important;

  border-radius: 2px !important;
  background: var(--primary-color-dark-gray) !important;

  color: var(--primary-color-white) !important;
}

::v-deep(.p-carousel-next:hover) {
  background: var(--primary-color-envitect-sam-blue) !important;
}

::v-deep(.p-carousel-prev) {
  padding: 8px !important;

  border-radius: 2px !important;
  background: var(--primary-color-dark-gray) !important;

  color: var(--primary-color-white) !important;
}

::v-deep(.p-carousel-prev:hover) {
  background: var(--primary-color-envitect-sam-blue) !important;
}
</style>
