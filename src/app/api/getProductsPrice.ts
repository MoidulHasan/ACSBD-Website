export const getProductsPrice = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData(
    "products-price",
    () => $fetch(runtimeConfig.apiUrl + "/data/products-price.json"),
  );
  return { data, pending, error, refresh };
};
