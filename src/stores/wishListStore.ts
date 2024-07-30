import type { ICreateResponse, ProductInWishList } from "~/contracts/common";

export const useWishListStore = defineStore("wishListStore", () => {
  const { $apiClient } = useNuxtApp();

  const wishListedProduct = ref<ProductInWishList[]>([]);

  const fetchWishListProducts = async () => {
    const { data } = await $apiClient("/wish-lists");
    wishListedProduct.value = data;
    return wishListedProduct.value;
  };

  const getWishListProduct = async () => {
    if (!wishListedProduct.value.length) {
      await fetchWishListProducts();
    }
  };

  const addProductToWishList = async (product) => {
    try {
      const response = await $apiClient<ICreateResponse>(
        `/wish-lists?product_slug=${product.slug}`,
        {
          method: "POST",
        },
      ).catch((error) => error.data);

      if (!response?.errors) await fetchWishListProducts();

      return response;
    } catch (err) {
      return err;
    }
  };

  const deleteProductFromWishListBySlug = async (slug: string) => {
    const response = await $apiClient(`/wish-lists/${slug}`, {
      method: "DELETE",
    });

    wishListedProduct.value = wishListedProduct.value.filter(
      (product) => product.slug !== slug,
    );

    return response;
  };

  return {
    wishListedProduct,
    fetchWishListProducts,
    addProductToWishList,
    deleteProductFromWishListBySlug,
    getWishListProduct,
  };
});
