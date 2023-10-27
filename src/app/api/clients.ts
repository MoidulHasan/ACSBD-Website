export const getClients = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useAsyncData("clients", () =>
    $fetch(runtimeConfig.public.apiUrl + "/data/clients.json"),
  );

  return { data, pending, error, refresh };
};
