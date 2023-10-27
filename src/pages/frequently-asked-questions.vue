<template>
  <div class="flex flex-column align-items-center">
    <div class="container">
      <PagesFaqTopTitle class="my-48px" />
    </div>

    <PagesFaqTabsSection
      :active-tab-index="activeTabIndex"
      :faq-tabs="faqTabData"
      :style="{ zIndex: 2 }"
      class="mb-48px py-5"
      @on-active-tab-change="handleActiveTabChange"
    />

    <div class="faq-container">
      <PagesFaqTabComponent :faq-list="faqListOfSelectedTab" />
    </div>

    <div class="more-question-form-container mt-48px mb-80px">
      <PagesFaqMoreQuestionForm class="w-full" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getFAQData } from "~/app/api/getFAQData";
import type { FAQSection } from "~/contracts/api-contracts/faqData";

definePageMeta({
  title: "Frequently Asked Questions",
});

const { data: allFaqData } = await getFAQData();

const faqTabData = computed(() => {
  if (!allFaqData.value) return [];

  return allFaqData.value.map((faqData: FAQSection) => {
    return {
      title: faqData.title,
      image: faqData.image,
      description: faqData.description,
    };
  });
});

const faqListOfSelectedTab = computed(() => {
  return allFaqData.value?.length ? allFaqData.value[activeTabIndex.value] : [];
});

const activeTabIndex = ref(0);
const handleActiveTabChange = (index: number) => {
  activeTabIndex.value = index;
};
</script>

<style lang="scss" scoped>
.faq-container {
  width: 100%;
  position: relative;
  top: -159px;
  margin-bottom: -159px;
}

.more-question-form-container {
  width: 1100px;

  @media (max-width: 1099px) {
    width: 100%;
    padding: 0 16px;
  }
}
</style>
