export const getBrands = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/brands.json",
  );

  return { data, pending, error, refresh };
};
