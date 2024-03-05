<script setup lang="ts">
const props = defineProps<{
  acData: any;
}>();
</script>

<template>
  <div class="mt-5 mb-5">
    <div
      v-for="content in acData.content"
      :key="content.id"
      class="pricing-section-container mb-8"
    >
      <CommonSectionHeader
        :header="content.header.title"
        :sub-header="content.header.subtitle"
      />
      <div v-for="type in content.types" :key="type.id" class="service-section">
        <div class="flex justify-content-center">
          <h2
            class="section-title text-center align-self-center bg-primary-color-envitect-sam-blue text-primary-color-white font-heading-4-semi-bold py-3 px-4 md:px-5 lg:px-7 border-round-sm my-5 mx-3"
          >
            {{ type.name }}
          </h2>
        </div>
        <div class="price-table-container grid">
          <div
            v-for="service in type?.services"
            :key="service.id"
            class="col-12"
            :class="[type.services.length === 1 ? 'lg:col-12' : 'lg:col-6']"
          >
            <!--            <PagesWorkPricingSplitACPriceTable :service="service" />-->
            <PagesWorkPricingPriceTable :service="service" />
          </div>
        </div>
      </div>
      <div v-if="content.notes" class="my-4">
        <h4 class="mb-3 font-heading-4-semi-bold text-primary-color-dark-gray">
          Note:
        </h4>
        <ol class="note-list">
          <li
            v-for="note in content.notes"
            :key="note"
            class="mb-2 text-primary-color-dark-gray"
          >
            {{ note }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pricing-section-container {
  .section-title {
    max-width: 560px;
    @media (min-width: 1100px) {
      min-width: 560px;
    }
  }

  .note-list {
    li {
      margin-left: 1rem;
      list-style-type: decimal;
    }
  }
}
</style>
