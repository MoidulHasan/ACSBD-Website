import type {
  Category,
  CategoryDataResponse,
} from '~/contracts/api-contracts/categoryInterface'

export async function useProductCategories(): Promise<Ref<Category[] | undefined>> {
  const { $apiClient } = useNuxtApp()

  const { data: categoryData } = useNuxtData<Category[]>('product-categories')

  // If data already exists, return it
  if (categoryData.value) {
    return categoryData
  }

  const preprocessCategories = (categories) => {
    return categories
      .filter(category => category.visibility_status !== 'hidden')
      .map(category => ({
        ...category,
        childrens: preprocessCategories(category.childrens || []),
      }))
  }

  // Otherwise, fetch the data from the API
  const { data: fetchedCategories } = await useAsyncData<
    CategoryDataResponse,
    Category[],
    unknown
  >('product-categories', () => $apiClient('/categories'), {
    transform: response => preprocessCategories(response.data),
  })
  return fetchedCategories
}
