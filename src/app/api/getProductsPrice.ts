export const getProductsPrice = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData(
    "products-price",
    () => $fetch(runtimeConfig.apiUrl + "/data/products-price.json"),
  );
  console.log(data);

  return { data, pending, error, refresh };
};
