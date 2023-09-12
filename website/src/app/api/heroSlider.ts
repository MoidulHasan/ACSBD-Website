export const getHeroSliderImage = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData(
    "hero-slider-image",
    () => $fetch(runtimeConfig.apiUrl + "/data/heroSlider")
  );

  return { data, pending, error, refresh };
};
