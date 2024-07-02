<script setup lang="ts">
import { getClients } from "~/app/api/getClients";

definePageMeta({
  title: "Clients",
  name: "our-clients",
});

const { data: clientsData } = await getClients();
const initialLength = ref(18);
const clientsToShow = computed(() => {
  return clientsData.value?.data.slice(0, initialLength.value);
});

const showMoreClients = () => {
  if (initialLength.value <= clientsData.value?.length) {
    initialLength.value += 18;
  }
};
</script>

<template>
  <div class="container client-container">
    <div
      class="client-flex-container flex flex-wrap pt-3 pb-4 md:pb-6 align-items-center justify-content-center xl:justify-content-start"
    >
      <div
        v-for="client in clientsToShow"
        :key="client.id"
        class="single-client bg-envitect-sam-blue-5 border-envitect-sam-blue-20 text-center flex align-items-center justify-content-center flex-wrap"
      >
        <img
          class="client-image"
          :src="client.image"
          :alt="client.name"
          :title="client.name"
        />
      </div>
    </div>
    <div class="text-center mb-5 lg:mb-8">
      <Button
        v-if="clientsToShow.length !== clientsData?.length"
        class="lode-more-button border-primary-color-envitect-sam-blue bg-primary-color-white text-primary-color-envitect-sam-blue text-semi-bold-1"
        @click="showMoreClients"
      >
        Load More
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.client-container {
  min-height: 30rem;

  .client-flex-container {
    gap: 15px;
    @include media-query(sm) {
      gap: 8px;
    }
  }

  .single-client {
    width: 227px;
    height: 100px;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    @include media-query(sm) {
      border-radius: 2px;
      width: 104px;
      height: 56px;
    }
  }

  .client-image {
    @include media-query(sm) {
      max-width: 83.932px;
      max-height: 38px;
    }
  }

  .lode-more-button {
    display: inline-flex;
    padding: 12px 48px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
  }

  *:focus {
    box-shadow: none !important;
  }
}
</style>
