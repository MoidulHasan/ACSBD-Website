export const getFaqs = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData("faqs", () =>
    $fetch(runtimeConfig.apiUrl + "/data/faqs.json"),
  );
  return { data, pending, error, refresh };
};
