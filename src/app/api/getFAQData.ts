export const getFAQData = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData("faq-data", () =>
    $fetch(runtimeConfig.apiUrl + "/data/faqs.json"),
  );

  return { data, pending, error, refresh };
};
