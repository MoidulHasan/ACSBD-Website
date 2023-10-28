export const getACSpareSparts = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/ac-spare-sparts.json",
  );

  return { data, pending, error, refresh };
};
