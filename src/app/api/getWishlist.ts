export const getWishlist = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/wishlist.json",
  );
  return { data, pending, error, refresh };
};
