<template>
  <div>
    <!--    faq title section -->
    <PagesFaqTopTitle />
    <!--faq tab section -->
    <PagesFaqTabsSection />
    <!--    question form -->
    <PagesFaqMoreQuestionForm />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Frequently Asked Questions",
});
</script>

<style lang="scss" scoped>
.faq-topics {
  .topic {
    padding: 21px 32px;
    border-radius: 4px;
    background: var(--primary-color-white);
    box-shadow: 0px 4px 12px 1px rgba(164, 164, 164, 0.18);

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
</style>
