<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();

const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 4,
  },
  {
    breakpoint: "991px",
    numVisible: 4,
  },
  {
    breakpoint: "767px",
    numVisible: 3,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);
</script>

<template>
  <div class="card gallery-slider">
    <Galleria
      :value="images"
      :responsive-options="responsiveOptions"
      :num-visible="4"
      :show-item-navigators="true"
      :show-item-navigators-on-hover="true"
      container-style="max-width: 640px"
      auto-play
      circular
    >
      <template #item="slotProps">
        <img
          class="main-image"
          :src="slotProps?.item"
          alt="AC Service BD"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps?.item" alt="AC Service BD" />
      </template>
    </Galleria>
  </div>
</template>

<style scoped lang="scss">
.gallery-slider {
  .main-image {
    max-height: 480px;
    border-radius: 4px;
    border: 1px solid #f5f5f5;
  }

  :deep(.p-galleria-thumbnail-container) {
    margin-top: 1rem;
    height: 103px;
    background: transparent;
  }

  :deep(.p-galleria-thumbnail-prev) {
    background-color: var(--primary-color-envitect-sam-blue);
    color: white;
    border-radius: 2px;
    height: 28px;
    width: 30px;
  }

  :deep(.p-galleria-thumbnail-next) {
    background-color: var(--primary-color-envitect-sam-blue);
    color: white;
    border-radius: 2px;
    height: 28px;
    width: 30px;
  }

  :deep(.p-galleria-thumbnail-item) {
    width: 111px;
    height: 103px;
  }

  :deep(.p-galleria-thumbnail-item-content) {
    width: 111px;
    height: 103px;
    border-radius: 2px;
    border: 1px solid #f5f5f5;
    background: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2px;
    margin-right: 2px;
  }

  :deep(.p-galleria-thumbnail-item-content img) {
    width: 92px;
  }
}

//.gallery-slider {
//  :deep(.p-galleria-item) {
//    max-height: 480px;
//    display: flex;
//    align-items: center;
//    justify-content: center;
//  }
//
//  .main-image {
//    max-height: 480px;
//    border-radius: 4px;
//    border: 1px solid #f5f5f5;
//  }
//
//  :deep(.p-galleria-thumbnail-wrapper) {
//    padding-top: 16px;
//  }
//
//  :deep(.p-galleria-thumbnail-container) {
//    background: transparent;
//    height: 103px;
//  }
//
//  :deep(.p-galleria-thumbnail-prev) {
//    background-color: var(--primary-color-envitect-sam-blue);
//    color: white;
//    border-radius: 2px;
//    height: 28px;
//    width: 30px;
//  }
//
//  :deep(.p-galleria-thumbnail-next) {
//    background-color: var(--primary-color-envitect-sam-blue);
//    color: white;
//    border-radius: 2px;
//    height: 28px;
//    width: 30px;
//  }
//
//  :deep(.p-galleria-thumbnail-items-container) {
//    height: 103px;
//  }
//
//  :deep(.p-galleria-thumbnail-items) {
//    height: 103px;
//  }
//
//  :deep(.p-galleria-thumbnail-item) {
//    display: flex;
//    align-content: center;
//    height: 103px;
//  }
//
//  :deep(.p-galleria-thumbnail-item-content) {
//    width: 111px;
//    height: 103px;
//    display: flex;
//    align-items: center;
//    justify-content: center;
//    margin-left: 2px;
//    margin-right: 2px;
//    border-radius: 2px;
//    border: 1px solid #f5f5f5;
//  }
//
//  :deep(.p-galleria-thumbnail-item-content img) {
//    width: 92px;
//    height: 80px;
//  }
//}
</style>
