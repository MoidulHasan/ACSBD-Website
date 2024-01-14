export const getRecentWorks = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/recent-works.json",
  );

  return { data, pending, error, refresh };
};
