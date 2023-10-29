export const getAirConditioners = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/air-conditioner.json",
  );

  return { data, pending, error, refresh };
};
