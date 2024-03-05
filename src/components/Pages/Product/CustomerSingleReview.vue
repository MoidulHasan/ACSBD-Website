<script setup lang="ts">
interface Review {
  id: number;
  userId: number;
  rating: number;
  text: string;
  timestamp: string;
  reviewImage: string[];
}

const props = defineProps<{
  review: Review;
}>();

const rating = computed(() => Math.round(props.review.rating));

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options);
};
</script>

<template>
  <div class="my-3">
    <div class="review-top-container">
      <Rating v-model="rating" :cancel="false" readonly />
      <div
        class="flex align-items-center justify-content-between flex-wrap gap-4 mt-14px"
      >
        <div class="flex align-items-center gap-4">
          <p class="text-primary-color-dark-gray text-semi-bold-1">
            By
            <span class="text-primary-color-navy-blue">Md Dulal Hossain</span>
          </p>
          <p class="text-medium-2 text-primary-color-envitect-sam-blue">
            <i class="pi pi-shield font pl-2" />
            Verified Purchase
          </p>
        </div>
        <h2 class="text-semi-bold-1 text-dark-gray-60">
          {{ formatDate(review.timestamp) }}
        </h2>
      </div>
      <div class="review-message-section mt-3">
        <p class="review-message text-medium-2 text-primary-color-dark-gray">
          {{ review.text }}
        </p>
        <div
          class="review-image-container flex align-items-center gap-2 mt-12px"
        >
          <div
            v-for="imageSrc in review.reviewImage"
            :key="imageSrc"
            class="image-container"
          >
            <img class="review-image" :src="imageSrc" :alt="review.text" />
          </div>
        </div>
        <p class="mt-12px font-heading-4-semi-bold text-liked">
          <i class="pi pi-thumbs-up text-2xl" /> 03
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.review-message-section {
  .review-message {
    max-width: 1195px;
  }

  .image-container {
    border-radius: 4px;
    overflow: hidden;
  }

  .review-image {
    border: 1px solid var(--dark-gray-20);
    border-radius: 4px;
    height: 78px;
    width: 108px;
  }

  .text-liked {
    color: #bababa;
  }
}
</style>
