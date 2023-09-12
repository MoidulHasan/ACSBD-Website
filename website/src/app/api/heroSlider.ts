export const getHeroSliderData = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData(
    "customers-review",
    () => $fetch(runtimeConfig.apiUrl + "/data/hero-slider-data.json")
  );

  return { data, pending, error, refresh };
};
