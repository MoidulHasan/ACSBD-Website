<template>
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
}

@media (max-width: 900px) {
  .faq-header {
    .header-section {
      min-height: 16.125rem;
    }
  }
}
</style>
