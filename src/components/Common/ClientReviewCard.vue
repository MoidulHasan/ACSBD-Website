<script lang="ts" setup>
const props = defineProps<{
  reviewer_name: string;
  reviewer_title: string;
  reviewer_image: string;
  review: string;
  star: number;
}>();

const showDetailedReview = ref(false);
const showReviewModal = () => {
  showDetailedReview.value = true;
  console.log(props.reviewer_image);
};
</script>

<template>
  <div class="review-card flex flex-column align-items-center">
    <div class="image-container">
      <img :src="reviewer_image" alt="" />
    </div>

    <h4 class="name mb-0">{{ reviewer_name }}</h4>
    <h5 class="title mt-0">{{ reviewer_title }}</h5>
    <p class="review">
      {{ review.length > 177 ? `"${review.slice(0, 177)}...` : `"${review}"` }}
    </p>

    <div v-if="review.length > 175" class="p-0 m-0 text-center mt-[4px]">
      <NuxtLink
        class="read-more-button cursor-pointer"
        @click="showReviewModal"
      >
        Read More
      </NuxtLink>
    </div>
  </div>
  <ClientOnly>
    <Dialog
      v-model:visible="showDetailedReview"
      modal
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      dismissable-mask
      close-on-escape
      :pt="{
        header: 'flex justify-content-end pt-3 px-3',
      }"
    >
      <PagesProductTestimonialData
        :name="reviewer_name"
        :title="reviewer_title"
        :image="reviewer_image"
        :review="review"
        :stars="star"
      />
    </Dialog>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.review-card {
  margin-right: 8px;
  margin-left: 8px;
  margin-top: 70px;
  height: 381px;
  padding: 32px;

  border-radius: 4px;
  background: var(--product-Front-color);

  position: relative;

  .image-container {
    position: absolute;
    top: -65px;

    width: 130px;
    height: 130px;
    flex-shrink: 0;

    fill: var(--primary-color-white);

    border-radius: 50%;
    overflow: hidden;
    border: 1px solid var(--primary-color-envitect-sam-blue);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .name {
    margin-top: 65px;

    color: var(--primary-color-navy-blue);
    text-align: center;

    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }

  .title {
    color: var(--primary-color-navy-blue);
    opacity: 80%;
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .review {
    color: var(--primary-color-dark-gray);
    text-align: center;
    min-height: 144px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .read-more-button {
    text-decoration: none;
    color: var(--primary-color-envitect-sam-blue);
    text-align: center;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
}

:deep(.p-dialog-header) {
  justify-content: end;
}
</style>
