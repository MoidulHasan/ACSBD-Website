export const getProducts = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/products.json",
  );

  return { data, pending, error, refresh };
};
