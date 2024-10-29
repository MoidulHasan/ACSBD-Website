import type { Work, WorkResponse } from '~/contracts/api-contracts/recentWorkInterfaces'

export async function useWorks(): Promise<Ref<Work[] | undefined>> {
  const { $apiClient } = useNuxtApp()

  const { data: recentWorkData } = useNuxtData<Work[]>('recent-works')

  // If data already exists, return it
  if (recentWorkData.value) {
    return recentWorkData
  }

  // Otherwise, fetch the data from the API
  const { data: fetchedRecentWorks } = await useAsyncData<
    WorkResponse,
    Work[],
    unknown
  >('recent-works', () => $apiClient('/works', {
    params: {
      is_latest: true,
    },
  }))

  return fetchedRecentWorks
}
