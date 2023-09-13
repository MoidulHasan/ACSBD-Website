<template>
  <div class="container flex">
    <CommonClientReviewCard
      v-for="(clientReview, index) in clientReviews"
      :key="'cleint-review-' + index"
      :image-url="clientReview.imageUrl"
      :name="clientReview.name"
      :review="clientReview.review"
      :title="clientReview.title"
    />
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

<style scoped></style>
