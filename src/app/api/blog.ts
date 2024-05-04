import type { Blog } from "~/contracts/api-contracts/BlogsInterfaces";
export const getBlog = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch<Blog[]>(
    runtimeConfig.public.apiUrl + "/data/blog-data.json",
  );

  return { data, pending, error, refresh };
};
