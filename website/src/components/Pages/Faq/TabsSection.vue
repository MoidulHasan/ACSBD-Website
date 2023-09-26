<template>
  <div class="tab-with-content relative">
    <div class="container relative flex flex-column align-items-center mx-auto">
      <div class="tabs pb-8">
        <div
          class="faq-topics container flex gap-4 lg:gap-7 align-items-center justify-content-center"
        >
          <div
            class="services topic text-center"
            @click="getFaqsByTopic('Services')"
          >
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img
                class="faq-image"
                src="@/assets/images/services.svg"
                alt=""
              />
            </div>
            <h3 class="topic-title">Services?</h3>
          </div>
          <div
            class="ac-rent topic text-center"
            @click="getFaqsByTopic('AC Rent')"
          >
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img class="faq-image" src="@/assets/images/ac_rent.svg" alt="" />
            </div>
            <h3 class="topic-title">AC Rent?</h3>
          </div>
          <div
            class="products topic text-center hidden lg:block"
            @click="getFaqsByTopic('Products')"
          >
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img
                class="faq-image"
                src="@/assets/images/products.svg"
                alt=""
              />
            </div>
            <h3 class="topic-title">Products?</h3>
          </div>
          <div
            class="policy topic text-center hidden lg:block"
            @click="getFaqsByTopic('Policy')"
          >
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img class="faq-image" src="@/assets/images/policy.svg" alt="" />
            </div>
            <h3 class="topic-title">Policy?</h3>
          </div>
        </div>
      </div>
      <div>
        <PagesFaqTabComponent :faq-by-topic="faqByTopic" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { useFaqsByTopics } from "~/composables/useFaqsByTopics";
import { getFaqs } from "~/app/api/faqs";
const selectedTopic: Ref<object> = ref({});
const { data: faqs } = await getFaqs();

const faqByTopic: Ref<object> = computed(() => {
  return selectedTopic.value;
});

onMounted(() => {
  getFaqsByTopic();
});
const getFaqsByTopic = (topic = "Services") => {
  selectedTopic.value = faqs.value.find(
    (faq) => faq.title.toLowerCase() === topic.toLowerCase(),
  );
};

// const selectedRef: Ref<object> = ref({});

// const { selectedFaq } = await useSelectedFaqs();
// console.log(selectedFaq.value);
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
</style>
