export const getAcCategories = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/ac_categories.json",
  );

  return { data, pending, error, refresh };
};
