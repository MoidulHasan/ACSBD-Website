export const getCountries = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData("test", () =>
    $fetch(runtimeConfig.apiUrl + "/data/countries.json"),
  );

  return { data, pending, error, refresh };
};
