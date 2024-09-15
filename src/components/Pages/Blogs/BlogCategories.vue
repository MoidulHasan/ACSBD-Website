<script setup lang="ts">
const route = useRoute();
const { data: categories, error } = await useAsyncData(`blogs-categories`, () =>
  $fetch("/api/proxy/blogs/category"),
);
if (error.value) {
  console.error("Error Fetching Blog Categories");
}
</script>

<template>
  <div>
    <PagesBlogsSideBarContent title="All Categories">
      <div class="flex category-list flex-wrap pb-4">
        <NuxtLink
          v-for="category in categories?.data ?? []"
          :key="category"
          :class="[
            'py-4px px-16px bg-envitect-sam-blue-2 text-regular-4 category-badge cursor-pointer',
            route.query.category === category
              ? 'text-primary-color-envitect-sam-blue active-border'
              : 'text-dark-gray-80',
          ]"
          :to="`/our-blogs?category=${category}`"
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

  .active-border {
    border: 1px solid var(--primary-color-envitect-sam-blue);
  }
}
</style>
