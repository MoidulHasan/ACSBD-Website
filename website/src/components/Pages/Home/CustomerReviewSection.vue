<template>
  <div class="container">
    <CommonSliderSection
      :items="clientReviews"
      :number-of-scroll="1"
      :visible-item="4"
      slide-component="ClientReviewCard"
    >
      <template #header>
        <h1 class="heading2 mb-0">Our Customers Say</h1>
        <p class="subtitle">
          We have already completed 3500+ projects. Our clients are Hospitals,
          Group of companies, Markets, Bank, Shopping Mall, Multinational
          Organization, University, Governments project, Tender Work, private
          business sector, House building and so on. Here are some list of
          customers.
        </p>
      </template>

      <template #footer>
        <CommonViewAllButton label="View All Review" />
      </template>
    </CommonSliderSection>
  </div>
</template>

<script lang="ts" setup>
import { getCoustomersReview } from "~/app/api/customers-review";

const {
  data: clientReviews,
  pending,
  error,
  refresh,
} = await getCoustomersReview();
</script>

<style lang="scss" scoped></style>
