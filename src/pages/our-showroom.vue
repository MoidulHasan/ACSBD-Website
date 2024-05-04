<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
definePageMeta({
  title: "Our Showroom",
  name: "our-showroom",
});
const showroom = ref(true);
const service = ref(false);

watch(
  () => showroom.value,
  () => {
    showroom.value === true ? (service.value = false) : (service.value = true);
  },
);
watch(
  () => service.value,
  () => {
    service.value === true ? (showroom.value = false) : (showroom.value = true);
  },
);

const {
  data: locationData,
  pending,
  error,
  refresh,
} = await useFetch(runtimeConfig.public.apiUrl + "/data/showroom-address.json");
</script>

<template>
  <div>
    <CommonSectionHeader
      class="mb-5 mt-3 container"
      header="Our Showroom and Service Center Locations"
      sub-header="Your visit to our Istanbul Showroom not only would do us great honour; but you would also have the privilige to have a closer look at our wide range of collection of beautiful fabrics. You can enjoy the beauties of Istanbul for the rest of the day!."
    />
    <div class="">
      <div
        class="search-container bg-product-BG-color px-3 py-2 flex flex-column md:flex-row align-items-center gap-3 md:gap-8 mb-3"
      >
        <div class="md:mb-0 locationSearchBar w-full">
          <div class="p-inputgroup flex-1 flex-wrap w-full">
            <InputText placeholder="Search Locations" />
            <Button class="search-button" icon="pi pi-search" />
          </div>
        </div>
        <div class="hidden lg:block">
          <div
            class="flex gap-2 xl:gap-6 align-items-center ml-0 md:ml-1 xl:ml-6"
          >
            <div class="flex flex-wrap align-items-center">
              <Checkbox v-model="showroom" input-id="showroom" :binary="true" />
              <label
                for="showroom"
                class="ml-1 md:ml-3 font-heading-4-semi-bold font-medium text-primary-color-dark-gray"
              >
                Showrooms
              </label>
            </div>
            <div class="flex align-items-center">
              <Checkbox v-model="service" input-id="service" :binary="true" />
              <label
                for="service"
                class="ml-1 md:ml-3 font-heading-4-semi-bold font-medium text-primary-color-dark-gray"
              >
                Service Center
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PagesShowroomLocation :location-data="locationData" />
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;
.search-container {
  border-radius: 4px;
}
.locationSearchBar {
  max-width: 582px !important;
}
:deep(.p-inputgroup .p-inputtext) {
  @include media-query(sm) {
    max-height: 42px;
  }
  @include media-query(lg) {
    max-height: 42px;
  }
}
:deep(.p-inputgroup .p-button) {
  @include media-query(sm) {
    max-height: 42px;
  }
  @include media-query(lg) {
    max-height: 42px;
  }
}
.search-button,
.search-button:hover {
  background-color: var(--primary-color-envitect-sam-blue);
  padding: 12px 38px;
}
</style>
