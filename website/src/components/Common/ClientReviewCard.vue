<template>
  <div class="review-card flex flex-column align-items-center">
    <div class="image-container">
      <img :src="imageUrl" alt="" />
    </div>

    <h4 class="name mb-0">{{ name }}</h4>
    <h5 class="title mt-0">{{ title }}</h5>
    <p class="review">
      {{ review.length > 177 ? `"${review.slice(0, 177)}...` : `"${review}"` }}
    </p>

    <div v-if="review.length > 175" class="p-0 m-0 text-center mt-[4px]">
      <NuxtLink class="read-more-button" to="client-review">Read More</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  title: string;
  imageUrl: string;
  review: string;
}>();
</script>

<style lang="scss" scoped>
.review-card {
  margin-right: 8px;
  margin-left: 8px;
  margin-top: 70px;
  //width: 348px;
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
</style>
