export const getHomePageHeroSliderImages = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/home-page-hero-slider-images.json",
  );

  return { data, pending, error, refresh };
};
