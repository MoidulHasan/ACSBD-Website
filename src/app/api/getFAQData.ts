import type { FAQSection } from "~/contracts/api-contracts/faqData";

export const getFAQData = async () => {
  const runtimeConfig = useRuntimeConfig();

  const { data, pending, error, refresh } = await useFetch<FAQSection[]>(
    runtimeConfig.public.apiUrl + "/data/faqs.json",
  );

  return { data, pending, error, refresh };
};
