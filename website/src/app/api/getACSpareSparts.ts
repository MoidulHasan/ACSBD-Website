export const getACSpareSparts = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData(
    "ac-spare-sparts",
    () => $fetch(runtimeConfig.apiUrl + "/data/ac-spare-sparts.json"),
  );

  return { data, pending, error, refresh };
};
