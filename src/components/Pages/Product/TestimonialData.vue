<script setup lang="ts">
const props = defineProps<{
  name: string;
  title: string;
  image: string;
  review: string;
  stars: number;
}>();
const starReview = ref(props.stars);
</script>

<template>
  <div class="px-6 pb-6 pt-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M30 34L34 26H26V12H40V26L36 34H30ZM12 34L16 26H8V12H22V26L18 34H12Z"
        fill="#1476BF"
      />
    </svg>
    <p>{{ review }}</p>
    <div class="flex align-items-center gap-3 pt-3">
      <img :src="image" :alt="name" class="reviewer-img" />
      <div>
        <h5 class="text-primary-color-navy-blue font-heading-5">{{ name }}</h5>
        <p class="text-regular-3 text-dark-gray-80">{{ title }}</p>
        <Rating v-model="starReview" class="mt-2" :cancel="false" readonly />
      </div>
    </div>
  </div>
</template>

<style scoped>
.reviewer-img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid var(--envitect-sam-blue-80);
}

:deep(.p-rating-icon) {
  color: var(--color-orange);
}
</style>
