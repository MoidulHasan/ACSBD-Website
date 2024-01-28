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
  reviews: Review[];
}>();
</script>

<template>
  <div>
    <div v-for="review in reviews" :key="review.id">
      <PagesProductCustomerSingleReview :review="review" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
