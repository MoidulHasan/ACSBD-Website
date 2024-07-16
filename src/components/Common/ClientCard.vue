<template>
  <div class="client-info-container">
    <div
      class="flex align-items-center justify-content-center client-image-container"
    >
      <img
        :alt="name"
        :src="image_url ?? image"
        class="client-image"
        :title="name"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  image_url?: string;
  image?: string;
}>();
</script>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.client-info-container {
  margin: 0 4px 0 4px;
  @include media-query(lg) {
    margin: 0 8px 0 8px;
  }
  @include media-query(md) {
    margin: 0 8px 0 8px;
  }
  @include media-query(sm) {
    margin: 0;
  }

  .client-image-container {
    //width: 215px ;
    height: 100px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--primary-color-envitect-sam-blue);
    background: var(--envitect-sam-blue-2);
    overflow: hidden;

    .client-image {
      max-width: 215px;
      @include media-query(lg) {
        height: 42.48px;
      }
      @include media-query(md) {
        height: 42.48px;
      }
      @include media-query(sm) {
        height: 42.48px;
      }
    }
  }
}

//@media (max-width: 900px) {
//  .client-info-container {
//    margin: 0 8px 0 8px;
//
//    .client-image-container {
//      .client-image {
//        height: 42.48px;
//      }
//    }
//  }
//}
</style>
