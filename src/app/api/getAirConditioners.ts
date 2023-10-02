export const getAirConditioners = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData(
    "air-conditioners",
    () => $fetch(runtimeConfig.apiUrl + "/data/air-conditioner.json"),
  );

  return { data, pending, error, refresh };
};
