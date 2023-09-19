<template>
  <div class="flex flex-column align-items-center justify-center service-card">
    <img class="service-image mb-3" :src="imageUrl" :alt="title" />
    <h2 class="service-title">{{ title }}</h2>
    <p class="description">
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
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  imageUrl: string;
  description: string;
}>();
</script>

<style lang="scss" scoped>
.service-card {
  padding: 1.25rem 3rem 1.25rem 3rem;
  border-radius: 12px;
  background: var(--primary-color-sam-blue-100);
  transition: 0.4s;
  margin: 0 15px 0 15px;

  .service-title {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    color: var(--primary-color-envitect-sam-blue);
    margin-bottom: 9px;
  }
  .description {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: var(--primary-color-dark-gray-100);
    margin-bottom: 24px;
    text-align: center;
  }
  .button-container {
    .contact-button {
      color: var(--primary-color-envitect-sam-blue);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
    }
  }
}

.service-card:hover {
  background: var(--primary-color-envitect-sam-blue);
  box-shadow: 0px 8px 24px 1px rgba(2, 67, 116, 0.4);

  .service-title {
    color: var(--primary-color-white);
  }
  .description {
    color: var(--primary-color-white);
  }
  .button-container {
    .contact-button {
      color: var(--primary-color-white);
    }
  }
}
</style>
