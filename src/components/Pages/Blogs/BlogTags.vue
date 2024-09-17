<script setup lang="ts">
const route = useRoute();

const { data: blogTags, error } = await useAsyncData(`blogs-tags`, () =>
  $fetch("/api/proxy/blogs/tag"),
);
if (error.value) {
  console.error("Error Fetching Blog Categories");
}
</script>

<template>
  <div>
    <PagesBlogsSideBarContent title="Tags">
      <div class="flex tag-list flex-wrap pb-4">
        <NuxtLink
          v-for="tag in blogTags.data ?? []"
          :key="tag"
          :class="[
            'py-4px px-16px bg-envitect-sam-blue-2 text-regular-4 tag-badge cursor-pointer',
            route.query.tag === tag
              ? 'text-primary-color-envitect-sam-blue active-border'
              : 'text-dark-gray-80',
          ]"
          :to="`/our-blogs?tag=${tag}`"
        >
          {{ tag }}
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

  .active-border {
    border: 1px solid var(--primary-color-envitect-sam-blue);
  }
}
</style>
