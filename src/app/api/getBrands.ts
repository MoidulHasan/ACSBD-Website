export const getBrands = async () => {
  const { data, pending, refresh, error } = await useFetch(
    () => `/api/proxy/brands`,
    {
      transform: (data) => {
        const length = data.data.length;
        return {
          data: data.data,
          length,
        };
      },
    },
  );
  return { data, pending, refresh, error };
};
