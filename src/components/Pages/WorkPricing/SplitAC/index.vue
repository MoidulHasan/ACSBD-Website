<script setup lang="ts">
const props = defineProps<{
  acData: any;
}>();
</script>

<template>
  <div class="mt-5 mb-5">
    {{ acData }}
    <div
      v-for="content in acData.content"
      :key="content.id"
      class="pricing-section-container"
    >
      <CommonSectionHeader
        :header="content.header.title"
        :sub-header="content.header.subtitle"
      />
      <h2
        class="section-title text-center align-self-center bg-primary-color-envitect-sam-blue text-primary-color-white font-heading-4-semi-bold p-3 border-round-sm my-5 mx-3"
      >
        {{ content.name }}
      </h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pricing-section-container {
  .section-title {
    max-width: 560px;
  }
}
</style>
