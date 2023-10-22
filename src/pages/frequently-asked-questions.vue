<template>
  <div class="flex flex-column align-items-center">
    <div class="container">
      <PagesFaqTopTitle class="my-48px" />
      <PagesFaqTabsSection
        :active-tab-index="activeTabIndex"
        :faq-tabs="faqTabData"
        class="mb-48px py-5"
        @on-active-tab-change="handleActiveTabChange"
      />
    </div>

    <PagesFaqTabComponent :faq-list="faqListOfSelectedTab" />
    <PagesFaqMoreQuestionForm />
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

const faqListOfSelectedTab: Ref<FAQSection> = computed(() => {
  return allFaqData.value?.length ? allFaqData.value[activeTabIndex.value] : [];
});

const activeTabIndex = ref(0);
const handleActiveTabChange = (index: number) => {
  activeTabIndex.value = index;
};
</script>
