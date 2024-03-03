import type { Brands } from "~/contracts/api-contracts/brands";

export const getBrands = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch<Brands>(
    runtimeConfig.public.apiUrl + "/admin/brands",
  );
  return { data, pending, error, refresh };
};
