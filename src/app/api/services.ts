export const getServices = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/services.json",
  );

  return { data, pending, error, refresh };
};
