<template>
  <div class="tab-with-content relative">
    <div class="container relative flex flex-column align-items-center mx-auto">
      <div class="tabs pb-8">
        <div
          class="faq-topics container flex gap-4 lg:gap-7 align-items-center justify-content-center"
        >
          <div
            class="services topic text-center"
            @click="() => (selectedTopic = 'Services')"
          >
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img
                alt=""
                class="faq-image"
                src="@/assets/images/services.svg"
              />
            </div>
            <h3 class="topic-title">Services?</h3>
          </div>
          <div
            class="ac-rent topic text-center"
            @click="() => (selectedTopic = 'AC Rent')"
          >
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img alt="" class="faq-image" src="@/assets/images/ac_rent.svg" />
            </div>
            <h3 class="topic-title">AC Rent?</h3>
          </div>
          <div
            class="products topic text-center hidden lg:block"
            @click="() => (selectedTopic = 'Products')"
          >
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img
                alt=""
                class="faq-image"
                src="@/assets/images/products.svg"
              />
            </div>
            <h3 class="topic-title">Products?</h3>
          </div>
          <div
            class="policy topic text-center hidden lg:block"
            @click="() => (selectedTopic = 'Policy')"
          >
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img alt="" class="faq-image" src="@/assets/images/policy.svg" />
            </div>
            <h3 class="topic-title">Policy?</h3>
          </div>
        </div>
      </div>
      <div>
        <PagesFaqTabComponent :faq-by-topic="faqsByTopic" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getFAQData } from "~/app/api/getFAQData";

const { data: faqsData } = await getFAQData();

const selectedTopic = ref("Services");

const faqsByTopic = computed(() => {
  if (!faqsData?.value?.length) {
    return [];
  }

  return faqsData.value.find((faq) => faq.title === selectedTopic.value);
});
</script>

<style lang="scss" scoped>
.tab-with-content {
  background: var(--product-Front-color);
  padding: 0 410px;

  .tabs {
    position: absolute;
    top: -74px;

    .faq-topics {
      .topic {
        padding: 21px 32px;
        border-radius: 4px;
        background: var(--primary-color-white);
        box-shadow: 0px 4px 12px 1px rgba(164, 164, 164, 0.18);
        text-decoration: none;
        cursor: pointer;

        .image-container {
          margin-bottom: 12px;
          width: 70px;
          height: 70px;
          background-color: var(--product-Front-color);
          border-radius: 50%;
        }

        .topic-title {
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          color: var(--primary-color-envitect-sam-blue);
        }
      }
    }
  }
}

@media (max-width: 900px) {
  .tab-with-content {
    padding: 0px 0px 30px 0px;
  }
}

:deep(.p-accordion-toggle-icon) {
  position: absolute;
  right: 1rem;
}
</style>
