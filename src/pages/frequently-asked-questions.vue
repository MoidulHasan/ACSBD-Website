<script lang="ts" setup>
import type { FAQSection, FAQTab } from '~/contracts/api-contracts/faqData'

definePageMeta({
  title: 'Frequently Asked Questions',
  name: 'frequently-asked-questions',
})

const route = useRoute()

const { $apiClient } = useNuxtApp()

const { data: allFaqs } = await useAsyncData('frequently-asked-questions', () =>
  $apiClient(`/faqs`))

const faqTabs: Omit<FAQSection, 'tabs'>[] = [
  {
    title: 'Services',
    slug: 'service',
    image: '/images/faq/services.svg',
    description:
      'We have a large team to service any kind of branded AC with the latest tools under experienced engineer. Best AC servicing company in Bangladesh.',
  },
  {
    title: 'AC Rent',
    slug: 'ac_rent',
    image: '/images/faq/ac_rent.svg',
    description:
      'We have a large team to service any kind of branded AC with the latest tools under experienced engineer. Best AC servicing company in Bangladesh.',
  },
  {
    title: 'Products',
    slug: 'product',
    image: '/images/faq/products.svg',
    description:
      'We have a large team to service any kind of branded AC with the latest tools under experienced engineer. Best AC servicing company in Bangladesh.',
  },
  {
    title: 'Policy',
    slug: 'policy',
    image: '/images/faq/policy.svg',
    description:
      'We have a large team to service any kind of branded AC with the latest tools under experienced engineer. Best AC servicing company in Bangladesh.',
  },
]
const activeTabIndex = ref(0)
const activeTabName = ref(route.query.topic as string || 'service')
activeTabIndex.value = findFaqIndexBySlug(activeTabName.value)

const faqSearchText = ref('')

async function handleActiveTabChange(index: number, name: string) {
  activeTabName.value = name
  activeTabIndex.value = index
  await navigateTo({
    name: 'frequently-asked-questions',
    query: {
      topic: name,
    },
  })
}

function findFaqIndexBySlug(name: string): number {
  return faqTabs.findIndex(faq => faq.slug === name)
}

const selectedFaqList = computed(() => {
  if (allFaqs.value?.data && activeTabName.value) {
    const faqs = allFaqs.value.data[activeTabName.value]

    if (faqs) {
      return faqSearchText.value
        ? faqs.filter((item: FAQTab) =>
          item.question
            .toLowerCase()
            .includes(faqSearchText.value.toLowerCase()),
        )
        : faqs
    }
  }
  return []
})

const selectedFaqTab = computed(() => {
  return faqTabs.find((faq) => {
    return faq.slug === activeTabName.value
  })
})

watch(() => route.query.topic, (newTopic: string) => {
  if (newTopic !== activeTabName.value) {
    activeTabName.value = newTopic || 'service'
    if (findFaqIndexBySlug(newTopic) !== -1) {
      activeTabIndex.value = findFaqIndexBySlug(newTopic)
    }
    else {
      activeTabIndex.value = 0
    }
  }
})
</script>

<template>
  <div class="flex flex-column align-items-center">
    <div class="container">
      <PagesFaqTopTitle class="my-48px" @search="faqSearchText = $event" />
    </div>

    <PagesFaqTabsSection
      :faq-tabs="faqTabs"
      :active-tab-index="activeTabIndex"
      :style="{ zIndex: 2 }"
      class="mb-48px py-5"
      @on-active-tab-change="handleActiveTabChange"
    />

    <div class="faq-container">
      <PagesFaqTabComponent
        :faq-list="selectedFaqList"
        :selected-faq-tab="selectedFaqTab"
      />
    </div>

    <div class="more-question-form-container mt-48px mb-80px">
      <h3 class="font-heading-3 text-primary-color-navy-blue mb-3">
        Have more questions?
      </h3>
      <PagesContactQuestionForm
        :show-checkbox="true"
        :submit-button-full-width="false"
        submit-button-font-class="text-semi-bold-1"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.faq-container {
  width: 100%;
  position: relative;
  top: -159px;
  margin-bottom: -159px;
}

.more-question-form-container {
  width: 1100px;

  @media (max-width: 1099px) {
    width: 100%;
    padding: 0 16px;
  }
}
</style>
