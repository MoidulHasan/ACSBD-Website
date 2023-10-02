export const getHomePageHeroSliderImages = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData(
    "home-page-hero-slider-images",
    () =>
      $fetch(runtimeConfig.apiUrl + "/data/home-page-hero-slider-images.json"),
  );

  return { data, pending, error, refresh };
};
