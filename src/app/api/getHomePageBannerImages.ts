export const getHomePageBannerImages = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/home-page-banner-images.json",
  );

  return { data, pending, error, refresh };
};
