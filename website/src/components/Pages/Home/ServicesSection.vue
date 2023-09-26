<template>
  <div class="container">
    <CommonSliderSection
      :items="services"
      :number-of-scroll="1"
      :visible-item="4"
      slide-component="ServiceCard"
    >
      <template #header>
        <h1 class="heading2 mb-3">Our Services</h1>
        <p class="subtitle mb-5">
          We have a large team of AC Service A Expert Technicians. Our services
          are AC installation, AC servicing, AC repair, AC maintenance, AC
          rental, and selling AC of any brand. and selling AC spare parts. AC
          SERVICE is the best AC service company in Bangladesh. So you can
          contact us at any time. Our expert technicians are available 7 days a
          week to solve your AC problem.
        </p>
      </template>
    </CommonSliderSection>
  </div>
</template>

<script lang="ts" setup>
import { getServices } from "~/app/api/services";

const { data: services, pending, error, refresh } = await getServices();
</script>

<style lang="scss" scoped></style>
