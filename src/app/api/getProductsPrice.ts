


export const getProductsPrice = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
      runtimeConfig.public.apiUrl + "/data/products-price.json",
  );
  return { data, pending, error, refresh };
};


