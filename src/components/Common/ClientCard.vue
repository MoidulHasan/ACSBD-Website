<template>
  <div class="client-info-container">
    <div
      class="flex align-items-center justify-content-center client-image-container"
    >
      <img class="client-image" :src="imageUrl" :alt="title" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  imageUrl: string;
}>();
</script>

<style lang="scss" scoped>
.client-info-container {
  margin: 0 4px 0 4px;
  .client-image-container {
    //width: 215px ;
    height: 100px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--primary-color-envitect-sam-blue);
    background: var(--primary-color-sam-blue-50);
  }
}

@media (max-width: 900px) {
  .client-info-container {
    margin: 0 8px 0 8px;
    .client-image-container {
      .client-image {
        height: 42.48px;
      }
    }
  }
}
</style>
