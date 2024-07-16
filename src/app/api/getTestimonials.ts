export const getTestimonials = async () => {
  const { data, pending, refresh, error } = await useFetch(
    () => `/api/proxy/testimonials`,
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
