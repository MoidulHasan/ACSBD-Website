<template>
  <div class="tab">
    <div class="tab-title-component text-center">
      <h1 class="tab-title mb-3">Services?</h1>
      <p class="tab-description">
        We have a large team to service any kind of branded AC with the latest
        tools under Experienced engineer. Best AC servicing company in
        Bangladesh.
      </p>
    </div>
    <div class="mt-3">
      <Accordion :active-index="0" class="mb-6">
        <AccordionTab
          v-for="tab in tabs"
          :key="tab.title"
          :header="tab.title"
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
        <Button class="view-all-tabs">Load More Questions</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const panelClass = (props, parent, index) => {
  return [
    {
      "active-title-color": parent.state.d_activeIndex === index,
    },
  ];
};

const tabs = ref([
  {
    title: "What types of service do you provide?",
    content:
      "We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop. We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop.",
  },
  {
    title: "Do you deliver product to customer within a day?",
    content:
      "We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop. We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop.",
  },
  {
    title: "How to install and active the free plugin?",
    content:
      "We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop. We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop.",
  },
  {
    title: "What is the advantage of Inverter AC?",
    content:
      "We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop. We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop.",
  },
  {
    title: "Can I purchase from outside the Bangladesh?",
    content:
      "We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop. We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop.",
  },
  {
    title: "How do I make sure I order the right size & right color?",
    content:
      "We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop. We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop.",
  },
  {
    title: "What shipping provider do you use?",
    content:
      "We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop. We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop.",
  },
  {
    title: "What makes you different from your competitors?",
    content:
      "We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop. We provide all type of Air Conditioner (AC) solution. We provide AC Installation, AC Repair, AC Service, AC Rent & sell branded Air Conditioner (AC) from our shop.",
  },
]);
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

  .view-all-tabs:hover {
    background: var(--primary-color-envitect-sam-blue);
    color: var(--primary-color-white);
  }
}

.active-title-color {
  color: var(--primary-color-envitect-sam-blue);
}
</style>
