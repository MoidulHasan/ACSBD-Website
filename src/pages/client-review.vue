<script lang="ts" setup>
import { getTestimonials } from "~/app/api/getTestimonials";

definePageMeta({
  title: "Client Reviews",
  name: "client-reviews",
});

const { data: testimonials } = await getTestimonials();
const initialLength = ref(12);
const testimonialsToDisplay = computed(() => {
  return testimonials.value?.data.slice(0, initialLength.value);
});

const showMore = () => {
  if (initialLength.value <= testimonials.value?.length) {
    initialLength.value += 18;
  }
};
</script>

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
        v-for="(clientReview, index) in testimonialsToDisplay"
        :key="'client-review-' + index"
        class="col-12 md:col-3 my-3"
      >
        <CommonClientReviewCard
          :reviewer_image="clientReview.reviewer_image"
          :reviewer_name="clientReview.reviewer_name"
          :reviewer_title="clientReview.reviewer_title"
          :review="clientReview.review"
          :star="clientReview.star"
        />
      </div>
    </div>
    <div class="text-center mb-5 lg:mb-8">
      <Button
        v-if="testimonialsToDisplay.length !== testimonials?.length"
        class="lode-more-button border-primary-color-envitect-sam-blue bg-primary-color-white text-primary-color-envitect-sam-blue text-semi-bold-1"
        @click="showMore"
      >
        Load More
      </Button>
    </div>
  </div>
</template>
