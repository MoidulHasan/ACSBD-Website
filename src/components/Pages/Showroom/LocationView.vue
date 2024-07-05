<script lang="ts" setup>
import type { ILocation } from "~/contracts/common";

definePageMeta({
  title: "Our Showroom",
  name: "our-showroom",
});

const props = defineProps<{
  locationData: ILocation[];
}>();

const activeIndex = ref(0);
const activeLocation = computed(() => {
  return props.locationData[activeIndex.value]?.map_url;
});

const changeActiveLocation = (i: number) => {
  activeIndex.value = i;
};
</script>

<template>
  <div class="container location grid w-full border-round-lg mb-5 relative">
    <div class="col-12 lg:col-6">
      <div
        v-if="locationData.length"
        class="addressContainer overflow-scroll overflow-x-hidden"
      >
        <div
          v-for="(address, index) in locationData"
          :key="address.title"
          class="address bg-primary-color-white mb-2 lg:mb-3"
          :class="{ active: activeIndex === index }"
          @click="changeActiveLocation(index)"
        >
          <h2 class="address-title font-heading-3-small mb-2">
            {{ address.title }}
          </h2>
          <h2 class="address-place font-heading-4-semi-bold mb-12px">
            {{ address.subtitle }}
          </h2>
          <p class="address-location text-regular-3 mb-12px">
            {{ address.address }}
          </p>
          <h3 class="address-contact font-heading-5">{{ address.phone }}</h3>
        </div>
      </div>
      <div v-else>
        <h4 class="text-primary-color-navy-blue font-heading-4">
          No Showroom Found
        </h4>
      </div>
    </div>
    <div v-if="activeLocation" class="col-12 lg:col-6 mapContainer">
      <iframe
        class="w-full map h-full"
        :src="activeLocation"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.location {
  .addressContainer {
    max-height: 574px !important;
    background-color: #f4f3f3;
    border-radius: 8px;
    padding: 20px 24px;

    @include media-query(sm) {
      border-radius: 4px;
      padding: 12px;
      max-height: 272px !important;
    }
  }

  .address {
    padding: 31px 38px;
    border-radius: 8px;
    opacity: 0.6;
    color: #b9b9b9 !important;

    &.active {
      opacity: 1;
      box-shadow: 0px 3.84288px 3.84288px 0px rgba(189, 189, 189, 0.25);

      .address-title {
        color: #363636;
      }

      .address-place {
        color: #4b4b4b;
      }

      .address-location {
        color: #575757;
      }

      .address-contact {
        color: #575757;
      }
    }

    @include media-query(sm) {
      border-radius: 4px;
      padding: 16px 14px;
    }

    .address-title {
      line-height: 34px;
      @include media-query(sm) {
        font-size: 12.096px;
        font-weight: 700;
        line-height: 16.749px;
        margin-bottom: 4px;
      }
    }

    .address-place {
      max-width: 405px;
      @include media-query(sm) {
        font-size: 11.166px;
        font-style: normal;
        font-weight: 600;
        line-height: 15.818px;
        margin-bottom: 4px;
        max-width: 190px;
      }
    }

    .address-location {
      @include media-query(sm) {
        font-size: 7.444px;
        font-style: normal;
        font-weight: 400;
        line-height: 11.166px;
        margin-bottom: 4px;
      }
    }

    .address-contact {
      @include media-query(sm) {
        font-size: 8.374px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
  }

  .mapContainer {
    border-radius: 8px;
  }

  .map {
    border-radius: 8px;
    @include media-query(sm) {
      min-height: 531px !important;
    }
    @include media-query(md) {
      min-height: 531px !important;
    }
  }
}
</style>
