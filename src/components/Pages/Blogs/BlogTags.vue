<script setup lang="ts">
const blogCategories = inject("blogCategoris");
</script>

<template>
  <div>
    <PagesBlogsSideBarContent title="Tags">
      <div class="flex tag-list flex-wrap pb-4">
        <NuxtLink
          v-for="category in blogCategories"
          :key="category"
          class="py-4px px-16px bg-envitect-sam-blue-2 text-dark-gray-80 text-regular-4 tag-badge cursor-pointer"
        >
          {{ category }}
        </NuxtLink>
      </div>
    </PagesBlogsSideBarContent>
  </div>
</template>

<style scoped lang="scss">
.tag-list {
  gap: 12px;

  .tag-badge {
    border-radius: 4px;
  }
}
</style>
