<template>
  <div class="faq-tabs-container">
    <div class="faq-tabs-content">
      <CommonSectionHeader
        :header="faqList.title"
        :sub-header="faqList.description"
      />
      <div class="mt-3 md:mt-5">
        <Accordion :active-index="0" class="mb-6">
          <AccordionTab
            v-for="(tab, index) in faqList.tabs"
            :key="tab.question"
            :header="tab.question"
            :pt="{
              headerAction: ({ props, parent }) => ({
                class: panelClass(props, parent, index),
              }),
            }"
          >
            <p class="faq-tab-header text-regular-4 bg-primary-color-white">
              {{ tab.question }}
            </p>
          </AccordionTab>
        </Accordion>
        <div class="flex justify-content-center">
          <Button class="view-all-tabs mb-5 md:mb-6">
            Load More Questions
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FAQSection } from "~/contracts/api-contracts/faqData";

defineProps<{
  faqList: FAQSection;
}>();

const panelClass = (props, parent, index) => {
  return [
    "faq-tab-header",
    { active: parent.state.d_activeIndex === index },
    { "shadow-none": parent.state.d_activeIndex !== index },
  ];
};
</script>

<style lang="scss" scoped>
.faq-tabs-container {
  width: 100%;
  padding-top: 134px;
  background: var(--product-Front-color);
}

.faq-tabs-content {
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  .view-all-tabs {
    display: flex;
    padding: 12px 48px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    border-radius: 6px;
    border: 1px solid var(--primary-color-envitect-sam-blue);
    background: var(--primary-color-white);
    color: var(--primary-color-navy-blue);
    transition: 0.4s ease-in-out;
  }

  .view-all-tabs:hover,
  .view-all-tabs:focus {
    background: var(--primary-color-envitect-sam-blue);
    color: var(--primary-color-white);
    box-shadow: none;
  }
}

:deep(.p-accordion-tab) {
  margin-bottom: 16px;
}

::v-deep(.p-accordion-toggle-icon) {
  position: absolute !important;
  right: 10px !important;
}
</style>
