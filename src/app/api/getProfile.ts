export const getProfile = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/profile.json",
  );
  return { data, pending, error, refresh };
};
