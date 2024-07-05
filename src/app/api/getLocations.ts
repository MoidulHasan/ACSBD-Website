export const getLocations = async () => {
  const { data, pending, refresh, error } = await useFetch(
    () => `/api/proxy/our-locations`,
  );
  return { data, pending, refresh, error };
};
