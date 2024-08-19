<script lang="ts" setup>
import type { ProductMinimalI } from "~/contracts/api-contracts/ProductsInterfaces";

defineProps<{
  products: ProductMinimalI[];
  sortBy?: string;
  viewBy?: string;
  disableLoadMoreButton?: boolean;
  isLoading?: boolean;
}>();

const emits = defineEmits<{
  (e: "loadMoreItems"): void;
}>();
</script>

<template>
  <div class="w-full flex justify-content-center">
    <div v-if="products.length" class="w-full">
      <TransitionGroup class="grid" name="fade" tag="div">
        <div
          v-for="product in products"
          :key="'product-card-' + product.id"
          :class="
            viewBy === 'grid' ? 'col-6 md:col-1 lg:col-3 p-1 md:p-2' : 'col-12'
          "
        >
          <CommonProductCard v-if="viewBy === 'grid'" :product-data="product" />
          <CommonProductCardLarge v-else :product-data="product" />
        </div>
      </TransitionGroup>

      <div class="mt-32px flex align-items-center justify-content-center">
        <Button
          :disabled="disableLoadMoreButton"
          :loading="isLoading"
          outlined
          @click="() => emits('loadMoreItems')"
        >
          Load More
        </Button>
      </div>
    </div>

    <div v-else class="flex align-items-center justify-content-center p-5 my-5">
      <img
        alt="Products Not Found"
        class="w-2"
        src="~/assets/images/icons/empty-box.svg"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-move {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(1);
}
</style>
