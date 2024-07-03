import type { RecentWork } from "~/contracts/api-contracts/recent-works";

export const getRecentWorks = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch<RecentWork[]>(
    runtimeConfig.public.apiUrl + "/data/recent-works.json",
  );

  return { data, pending, error, refresh };
};
