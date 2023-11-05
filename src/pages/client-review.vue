<template>
  <div :style="{ marginBottom: '80px' }" class="container">
    <CommonSectionHeader
      header="Our Customers Say"
      sub-header="We have already completed 3500+ projects. Our clients are Hospitals,
                  Group of companies, Markets, Bank, Shopping Mall, Multinational
                  Organization, University, Governments project, Tender Work, private
                  business sector, House building and so on. Here are some list of
                  customers."
    />

    <div class="mt-3 w-full grid">
      <div
        v-for="(clientReview, index) in clientReviews"
        :key="'client-review-' + index"
        class="col-12 md:col-3 my-3"
      >
        <CommonClientReviewCard
          :image-url="clientReview.imageUrl"
          :name="clientReview.name"
          :review="clientReview.review"
          :title="clientReview.title"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCoustomersReview } from "~/app/api/customers-review";

definePageMeta({
  title: "Client Reviews",
  name: "client-reviews",
});

const { data: clientReviews } = await getCoustomersReview();
</script>
