<template>
  <div>
    <div class="faq-header container">
      <div
        class="header-section flex flex-column align-items-center text-center my-5"
      >
        <h1 class="faq-title mb-4">Frequently Asked Questions</h1>
        <div class="p-inputgroup serchbar">
          <InputText placeholder="Search FAQs Here" class="faq-search" />
          <Button icon="pi pi-search" class="search-button" />
        </div>
      </div>
      <div
        class="faq-topics flex gap-4 lg:gap-7 align-items-center justify-content-between"
      >
        <div class="services topic text-center">
          <div
            class="image-container flex align-items-center justify-content-center"
          >
            <img class="faq-image" src="@/assets/images/services.svg" alt="" />
          </div>
          <h3 class="topic-title">Services?</h3>
        </div>
        <div class="ac-rent topic text-center">
          <div
            class="image-container flex align-items-center justify-content-center"
          >
            <img class="faq-image" src="@/assets/images/ac_rent.svg" alt="" />
          </div>
          <h3 class="topic-title">AC Rent?</h3>
        </div>
        <div class="products topic text-center">
          <div
            class="image-container flex align-items-center justify-content-center"
          >
            <img class="faq-image" src="@/assets/images/products.svg" alt="" />
          </div>
          <h3 class="topic-title">Products?</h3>
        </div>
        <div class="policy topic text-center">
          <div
            class="image-container flex align-items-center justify-content-center"
          >
            <img class="faq-image" src="@/assets/images/policy.svg" alt="" />
          </div>
          <h3 class="topic-title">Policy?</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.faq-header {
  .header-section {
    min-height: 20.125rem;
    .faq-title {
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: 44px;
      color: var(--primary-color-envitect-sam-blue);
    }
    .serchbar {
      max-width: 38.5rem;
    }
    .faq-search {
      padding: 0.75rem 0 0.75rem 1.5rem;
    }
    .search-button {
      padding: 0.75rem 2rem;
    }
  }

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
}
</style>
