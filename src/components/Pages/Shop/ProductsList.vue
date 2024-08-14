<script lang="ts" setup>
import type { ProductMinimalI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<{
  products: ProductMinimalI[];
  sortBy?: string;
  viewBy?: string;
}>();

const numberOfProductToShow = ref(10);

const productsData = computed(() => {
  const sortedProducts = [...props.products].sort((a, b) => {
    const isDescending = props.sortBy.startsWith("-");
    const property = isDescending ? props.sortBy.slice(1) : props.sortBy;

    let aValue = a;
    let bValue = b;

    for (const prop of property.split(".")) {
      aValue = aValue[prop];
      bValue = bValue[prop];
    }

    if (isDescending) {
      return bValue - aValue;
    } else {
      return aValue - bValue;
    }
  });

  return sortedProducts.slice(
    0,
    Math.min(sortedProducts.length, numberOfProductToShow.value),
  );
});

const handelLoadMoreProductButtonClick = () => {
  numberOfProductToShow.value += 10;
};
</script>

<template>
  <div class="w-full">
    <TransitionGroup class="grid" name="fade" tag="div">
      <div
        v-for="product in productsData"
        :key="'product-card-' + product.id"
        :class="viewBy === 'grid' ? 'col-12 md:col-2 lg:col-3 p-2' : 'col-12'"
      >
        <CommonProductCard v-if="viewBy === 'grid'" :product-data="product" />
        <CommonProductCardLarge v-else :product-data="product" />
      </div>
    </TransitionGroup>

    <div class="mt-32px flex align-items-center justify-content-center">
      <Button
        :disabled="numberOfProductToShow >= products.length"
        outlined
        @click="handelLoadMoreProductButtonClick"
      >
        Load More
      </Button>
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
