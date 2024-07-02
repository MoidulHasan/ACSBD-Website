export const getClients = async () => {
  const { data, pending, refresh, error } = await useFetch(
    () => `/api/proxy/our-clients`,
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
