export const getOrders = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/orders.json",
  );

  return { data, pending, error, refresh };
};
