export const getBlog = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/blog-data.json",
  );

  return { data, pending, error, refresh };
};
