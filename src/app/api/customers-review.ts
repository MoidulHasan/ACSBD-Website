export const getCoustomersReview = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    runtimeConfig.public.apiUrl + "/data/customers-review.json",
  );

  return { data, pending, error, refresh };
};
