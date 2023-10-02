export const getHomePageBannerImages = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData(
    "home-page-banner-images",
    () => $fetch(runtimeConfig.apiUrl + "/data/home-page-banner-images.json"),
  );

  return { data, pending, error, refresh };
};
