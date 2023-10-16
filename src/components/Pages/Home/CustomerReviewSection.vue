<template>
  <div class="h-screen">
    <CommonSliderSection
      :items="clientReviews"
      :number-of-scroll="1"
      :visible-item="4"
      slide-component="ClientReviewCard"
    >
      <template #header>
        <CommonSectionHeader
          header="Our Customers Say"
          sub-header="We have already completed 3500+ projects. Our clients are Hospitals,
                  Group of companies, Markets, Bank, Shopping Mall, Multinational
                  Organization, University, Governments project, Tender Work, private
                  business sector, House building and so on. Here are some list of
                  customers."
        />
      </template>

      <template #footer>
        <CommonViewAllButton
          label="View All Review"
          redirect-page-url="/client-review"
        />
      </template>
    </CommonSliderSection>
  </div>
</template>

<script lang="ts" setup>
import { getCoustomersReview } from "~/app/api/customers-review";

const { data: clientReviews } = await getCoustomersReview();
</script>
