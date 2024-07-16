export const getAcCategories = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch(
    "http://localhost:9000/api/categories",
    {
      transform(data) {
        return data.data;
      },
    },
  );

  return { data, pending, error, refresh };
};
