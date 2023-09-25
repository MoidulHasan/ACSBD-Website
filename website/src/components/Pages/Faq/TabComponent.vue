<template>
  <div class="tab">
    <div class="tab-title-component text-center">
      <h1 class="tab-title mb-3">{{ faqByTopic.title }}?</h1>
      <p class="tab-description mb-2 lg:mb-5">
        {{faqByTopic.description}}
      </p>
    </div>
    <div class="mt-3">
      <Accordion :active-index="0" class="mb-6">
        <AccordionTab
          v-for="tab in faqByTopic?.tabs"
          :key="tab.question"
          :header="tab.question"
          :pt="{
            headerAction: ({ props, parent }) => ({
              class: panelClass(props, parent, index),
            }),
          }"
        >
          <p>{{ tab.content }}</p>
        </AccordionTab>
      </Accordion>
      <div class="flex justify-content-center">
        <Button class="view-all-tabs mb-1 lg:mb-6">Load More Questions</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  faqByTopic: object;
}>();

const panelClass = (props, parent, index) => {
  return [
    {
      "active-title-color": parent.state.d_activeIndex === index,
    },
  ];
};
</script>

<style lang="scss" scoped>
.tab {
  padding-top: 134px;
  .tab-title-component {
    .tab-title {
      color: var(--primary-color-envitect-sam-blue);
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 44px;
    }
    .tab-description {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      color: var(--primary-color-dark-gray);
    }
  }
  .accordion {
    border-radius: 4px;
    border: 1px solid #dbe5ec;
    background: #fff;
    box-shadow: 0px 3px 12px 0px rgba(189, 189, 189, 0.16);
  }

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

.active-title-color {
  color: var(--primary-color-envitect-sam-blue);
}
:deep(.p-accordion-tab) {
  margin-bottom: 16px;
}
</style>
