<template>
  <div class="service-card-container">
    <div
      class="flex flex-column align-items-center justify-content-between service-card"
    >
      <img :alt="title" :src="imageUrl" class="service-image mb-3" />
      <h2
        class="service-title font-heading-4-semi-bold text-primary-color-navy-blue"
      >
        {{ title }}
      </h2>
      <p class="description text-regular-3 text-primary-color-dark-gray">
        {{ description }}
      </p>
      <div class="button-container">
        <NuxtLink
          class="contact-button flex align-items-center no-underline"
          to="services"
        >
          <span class="mr-2">Contact Us</span>
          <i class="pi pi-arrow-right" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  imageUrl: string;
  description: string;
}>();
</script>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;
.service-card-container {
  margin: 0px 15px 10px 15px;

  @include media-query(sm) {
    margin: 0;
  }
}

.service-card {
  padding: 1.25rem 3rem 1.25rem 3rem;
  border-radius: 12px;
  background: var(--product-Front-color);
  transition: 0.8s;
  min-height: 360px;

  .service-title {
    margin-bottom: 9px;
  }

  .description {
    margin-bottom: 24px;
    text-align: center;
    @include media-query(md) {
      margin-bottom: 2rem;
    }
    @include media-query(sm) {
      margin-bottom: 1.5rem;
      padding: 0 1rem;
    }
  }

  .button-container {
    .contact-button {
      color: var(--primary-color-dark-gray);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
    }
  }

  &:hover {
    box-shadow: 0px 2px 8px 1px rgba(2, 2, 2, 0.15);

    .contact-button {
      color: var(--primary-color-envitect-sam-blue);
    }
  }
  @include media-query(lg) {
    padding: 1rem;
  }
  @include media-query(md) {
    padding: 1rem;
  }
  @include media-query(sm) {
    padding: 1rem;
  }
}
</style>
