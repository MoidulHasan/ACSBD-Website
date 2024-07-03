export const getTestimonials = async () => {
  const { data, pending, refresh, error } = await useFetch(
    () => `/api/proxy/admin/testimonials`,
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
