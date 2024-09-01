<script lang="ts" setup>
import { useStorage } from "@vueuse/core";
import { getFAQData } from "~/app/api/getFAQData";
import type { FAQSection, FAQTab } from "~/contracts/api-contracts/faqData";

definePageMeta({
  title: "Frequently Asked Questions",
  name: "frequently-asked-questions",
});

const { data: allFaqData } = await getFAQData();

const { $apiClient } = useNuxtApp();

const { data: allFaqs } = await useAsyncData("frequently-asked-questions", () =>
  $apiClient(`/faqs`),
);

const faqTabs: Omit<FAQSection, "tabs">[] = [
  {
    title: "Services",
    slug: "service",
    image: "/images/faq/services.svg",
    description:
      "We have a large team to service any kind of branded AC with the latest tools under experienced engineer. Best AC servicing company in Bangladesh.",
  },
  {
    title: "AC Rent",
    slug: "ac_rent",
    image: "/images/faq/ac_rent.svg",
    description:
      "We have a large team to service any kind of branded AC with the latest tools under experienced engineer. Best AC servicing company in Bangladesh.",
  },
  {
    title: "Products",
    slug: "product",
    image: "/images/faq/products.svg",
    description:
      "We have a large team to service any kind of branded AC with the latest tools under experienced engineer. Best AC servicing company in Bangladesh.",
  },
  {
    title: "Policy",
    slug: "policy",
    image: "/images/faq/policy.svg",
    description:
      "We have a large team to service any kind of branded AC with the latest tools under experienced engineer. Best AC servicing company in Bangladesh.",
  },
];
const activeTabIndex = ref(0);
const activeTabName = useStorage("activeTabName", "service");
const faqSearchText = ref("");

const handleActiveTabChange = (index: number, name: string) => {
  activeTabName.value = name;
  activeTabIndex.value = index;
};

console.log(allFaqs.value, "ALLFAQS");

// const faqTabData = computed(() => {
//   if (!allFaqData.value) return [];
//
//   return allFaqData.value.map((faqData: FAQSection) => {
//     return {
//       title: faqData.title,
//       image: faqData.image,
//       description: faqData.description,
//     };
//   });
// });

const faqListOfSelectedTab = computed(() => {
  return allFaqData.value?.length ? allFaqData.value[activeTabIndex.value] : [];
});
console.log(faqListOfSelectedTab.value, "PREVIOUS");

const selectedFaqList = computed(() => {
  if (allFaqs.value?.data && activeTabName.value) {
    const faqs = allFaqs.value.data[activeTabName.value];

    if (faqs) {
      return faqSearchText.value
        ? faqs.filter((item: FAQTab) =>
            item.question
              .toLowerCase()
              .includes(faqSearchText.value.toLowerCase()),
          )
        : faqs;
    }
  }
  return [];
});
// activeTabIndex;
console.log(selectedFaqList.value, "SELECTED FAQ LIST", activeTabName.value);

const selectedFaqTab = computed(() => {
  return faqTabs.find((faq) => {
    return faq.slug === activeTabName.value;
  });
});
console.log(selectedFaqTab.value, "SELECTED FAW");
</script>

<template>
  <div class="flex flex-column align-items-center">
    <div class="container">
      <PagesFaqTopTitle class="my-48px" @search="faqSearchText = $event" />
    </div>

    <PagesFaqTabsSection
      :faq-tabs="faqTabs"
      :active-tab-index="activeTabIndex"
      :style="{ zIndex: 2 }"
      class="mb-48px py-5"
      @on-active-tab-change="handleActiveTabChange"
    />

    <div class="faq-container">
      <PagesFaqTabComponent
        :faq-list="selectedFaqList"
        :selected-faq-tab="selectedFaqTab"
      />
    </div>

    <div class="more-question-form-container mt-48px mb-80px">
      <PagesFaqMoreQuestionForm class="w-full" />
    </div>
  </div>
</template>

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
