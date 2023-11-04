export const getBlog = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData("blog", () =>
    $fetch(runtimeConfig.public.apiUrl + "/data/blog-data.json"),
  );

  return { data, pending, error, refresh };
};
