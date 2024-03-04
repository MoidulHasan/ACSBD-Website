export const getPricingLists = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/pricingLists.json",
  );

  return { data, pending, error, refresh };
};
