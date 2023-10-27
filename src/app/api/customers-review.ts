export const getCoustomersReview = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData(
    "customers-review",
    () => $fetch(runtimeConfig.public.apiUrl + "/data/customers-review.json"),
  );

  return { data, pending, error, refresh };
};
