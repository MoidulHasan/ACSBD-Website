import type { Brands } from "~/contracts/api-contracts/brands";

export const getBrands = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch<Brands>(
    "http://localhost:9000/api/admin/brands",
    {
      transform(data) {
        return data.data;
      },
    },
  );
  return { data, pending, error, refresh };
};
