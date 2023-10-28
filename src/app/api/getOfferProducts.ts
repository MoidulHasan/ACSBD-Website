export const getOfferProducts = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/discount-products.json",
  );

  return { data, pending, error, refresh };
};
