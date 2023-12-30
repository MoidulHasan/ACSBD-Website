<script setup lang="ts">
const selectedBlogs = inject("selectedBlogs");
</script>

<template>
  <div>
    <PagesBlogsSideBarContent title="Recent Posts">
      <div class="recent-blogs">
        <NuxtLink
          v-for="blog in selectedBlogs"
          :key="blog.id"
          class="mb-12px flex recent-blog bg-primary-color-white cursor-pointer"
        >
          <NuxtImg :src="blog?.imageUrl" :alt="blog.title" class="blog-image" />
          <div class="blog-detail p-4px">
            <h5 class="text-small-meta text-navy-blue-80">{{ blog.tag }}</h5>
            <h3
              class="text-small-meta-title text-primary-color-dark-gray mb-5px"
            >
              {{ blog.title }}
            </h3>
            <p class="text-semi-bold-6 text-dark-gray-60">
              <i class="pi pi-calendar-times icon arrow-icon mr-2" />
              <span>{{ blog.published_date }}</span>
            </p>
          </div>
        </NuxtLink>
      </div>
    </PagesBlogsSideBarContent>
  </div>
</template>

<style scoped lang="scss">
.recent-blog {
  border-radius: 2px;
  &:last-child {
    margin-bottom: 0;
  }
  .blog-image {
    border-radius: 2px;
    max-height: 89px;
    max-width: 92px;
  }
  .blog-detail {
    .arrow-icon {
      font-size: 14.383px;
    }
  }
}
</style>
