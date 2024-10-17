<script setup lang="ts">
import type { Ref } from 'vue'

definePageMeta({
  title: 'Our Blogs',
  name: 'our-blogs',
})

export interface IBlog {
  category: string
  created_at: string
  description: string
  image: string
  slug: string
  sub_title: string
  tags: string[]
  title: string
  comments: any
  views: string | number
}

export interface IBlogParam {
  per_page: number
  page: number
  search?: string
  category?: string
  tag?: string
}

const route = useRoute()
const router = useRouter()
const page = ref(1)
const blogsInfoData: Ref<IBlog | []> = ref([])
const totalBlogs = ref(0)
const lastPage = ref(1)
const currentCategory = computed(() => {
  return route.query.category ?? ''
})
const currentTag = computed(() => {
  return route.query.tag ?? ''
})

async function fetchBlogs() {
  const params: IBlogParam = {
    per_page: 12,
    page: page.value,
  }
  // Conditionally add category and tag to params
  if (route.query.category) {
    params.category = route.query.category
  }
  if (route.query.tag) {
    params.tag = route.query.tag
  }
  if (route.query.search) {
    params.search = route.query.search
  }
  const { data: blogData, error } = await useAsyncData(
    `blogs-page-${page.value}-${
      route.query.category
        ? route.query.category
        : route.query.tag
          ? route.query.tag
          : ''
    }`,
    () => $fetch('/api/proxy/blogs', { params }),
  )

  if (!error.value) {
    if (page.value === 1) {
      blogsInfoData.value = blogData.value?.data.data

      totalBlogs.value = blogData.value?.data.total
      lastPage.value = blogData.value?.data.last_page
    }
    else {
      blogsInfoData.value = [
        ...blogsInfoData.value,
        ...(blogData.value?.data.data ?? []),
      ]
    }
  }
}

// Initially load the first page
await fetchBlogs()

const { data: recentBlogs, error: recentBlogsError } = await useAsyncData(
  `recent-blogs-index`,
  () =>
    $fetch('/api/proxy/blogs', {
      params: {
        is_latest: true,
        per_page: 2,
      },
    }),
)

if (recentBlogsError.value) {
  console.error('Error Fetching Recent BLogs')
}

async function loadMoreBlogs() {
  if (page.value < lastPage.value) {
    page.value += 1
    await fetchBlogs()
  }
}

async function searchBlog(event: string) {
  if (event) {
    const newQuery = {
      search: event, // Add the new search query
    }
    await router.push({ query: newQuery })
    page.value = 1
    await fetchBlogs()
  }
}

// Watch both currentCategory and currentTag
watch(
  [currentCategory, currentTag],
  async ([newCategory, newTag], [oldCategory, oldTag]) => {
    if (newCategory !== oldCategory || newTag !== oldTag) {
      page.value = 1
      await fetchBlogs()
    }
  },
)
</script>

<template>
  <div class="container">
    <div class="mt-3 md:mt-5 mb-5 md:mb-80px">
      <CommonSectionHeader
        class="px-2"
        header="Our Blogs"
        sub-header="AC SERVICE always posts AC-related news and company news regularly. So stay connected with us to know about our latest news."
      />
      <div class="mt-4 md:mt-28px mb-0 md:mb-52px">
        <PagesBlogsFeaturedBlog :featured="recentBlogs?.data?.data[0]" />
      </div>
      <div class="blogs-section grid mt-0 md:mt-6 mb-2 md:mb-8 px-2 md:px-0">
        <div class="col-12 lg:col-3 md:flex-order-1">
          <PagesBlogsSideBarOptions @search-blog="searchBlog" />
        </div>
        <div class="col-12 lg:col-9 md:flex-order-0">
          <PagesBlogsBlogList :blogs="blogsInfoData ?? []" />
          <div class="flex justify-content-center mt-3 md:mt-6">
            <CommonLoadMoreButton
              v-if="page < lastPage"
              label="Load More"
              class="w-12rem"
              @click="loadMoreBlogs"
            />
          </div>
        </div>
      </div>
      <PagesBlogsRecentPosts class="mt-4 block md:hidden" />
      <PagesBlogsBlogTags class="mt-3 block md:hidden" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
