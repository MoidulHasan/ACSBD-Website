export const getHeroSliderData = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData(
    "hero-slider-content",
    () => $fetch(runtimeConfig.apiUrl + "/data/hero-slider-data.json"),
  );

  return { data, pending, error, refresh };
};
