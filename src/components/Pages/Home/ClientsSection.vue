<template>
  <div class="clients-top-container">
    <div class="container py-3 lg:py-6">
      <CommonSliderSection
        :items="clients"
        :number-of-scroll="1"
        :visible-item="6"
        slide-component="ClientCard"
      >
        <template #header>
          <CommonSectionHeader
            class="mb-32px"
            header="Our Our Clients in Bangladesh"
            sub-header="We have already completed 25000+ projects. Our clients are
            Hospitals, groups of companies, Markets, Banks, Shopping malls,
            Multinational organizations, universities, Governments project,
            Tender Work, the private business sector, and so on. Here are some
            customers."
          />
        </template>

        <template #footer>
          <CommonViewAllButton label="View All Clients" />
        </template>
      </CommonSliderSection>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getClients } from "~/app/api/clients";

const { data: clients, pending, error, refresh } = await getClients();
</script>

<style lang="scss" scoped>
.clients-top-container {
  background: var(--envitect-sam-blue-5);
}
</style>
