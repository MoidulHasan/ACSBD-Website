<template>
  <div class="brands-top-container">
    <div class="container py-3 md:py-6">
      <CommonSliderSection
        :items="clients"
        :number-of-scroll="1"
        :visible-item="6"
        slide-component="ClientCard"
      >
        <template #header>
          <CommonSectionHeader
            class="mb-32px"
            header="Buy Top Brands"
            sub-header="Dear customers, we have been selling AC service for 16 years in the Bangladesh market with reliability and honesty of global brands Media, ELITE, Gree, General, Sharp, Daikin, Chigo, Panasonic, and Walton at reasonable prices. Apart from this, all types of spare parts for AC are sold wholesale and retail."
          />
        </template>

        <template #footer>
          <CommonViewAllButton label="View All Brands" />
        </template>
      </CommonSliderSection>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getClients } from "~/app/api/clients";

const { data: clients } = await getClients();
</script>

<style lang="scss" scoped>
.brands-top-container {
  background-color: var(--product-Front-color);
}
</style>
