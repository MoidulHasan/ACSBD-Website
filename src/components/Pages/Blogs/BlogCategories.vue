<script setup lang="ts">
const blogCategories = inject("blogCategoris");
</script>

<template>
  <div>
    <PagesBlogsSideBarContent title="All Categories">
      <div class="flex category-list flex-wrap pb-4">
        <NuxtLink
          v-for="category in blogCategories"
          :key="category"
          class="py-4px px-16px bg-envitect-sam-blue-2 text-dark-gray-80 text-regular-4 category-badge cursor-pointer"
        >
          {{ category }}
        </NuxtLink>
      </div>
    </PagesBlogsSideBarContent>
  </div>
</template>

<style scoped lang="scss">
.category-list {
  gap: 12px;

  .category-badge {
    border-radius: 4px;
  }
}
</style>
