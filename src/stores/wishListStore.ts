import { useToast } from "primevue/usetoast";
import type { ICreateResponse, ProductInWishList } from "~/contracts/common";

export const useWishListStore = defineStore("wishListStore", () => {
  const { $apiClient } = useNuxtApp();
  const toast = useToast();

  const wishListedProduct = ref<ProductInWishList[]>([]);

  const fetchWishListProducts = async () => {
    const { data } = await $apiClient("/wish-lists");
    wishListedProduct.value = data;
    localStorage.setItem("wishLists", JSON.stringify(wishListedProduct.value));
    return wishListedProduct.value;
  };

  const getWishListProduct = async () => {
    const wishListProductsFromLocalStore = JSON.parse(
      // @ts-ignore
      localStorage.getItem("wishLists"),
    );
    if (wishListProductsFromLocalStore) {
      wishListedProduct.value = wishListProductsFromLocalStore;
    }
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

      if (!response?.errors) {
        await fetchWishListProducts();
        localStorage.setItem(
          "wishLists",
          JSON.stringify(wishListedProduct.value),
        );
        toast.add({
          severity: "success",
          summary: `${product.name} is added to your Wishlist.`,
          life: 3000,
        });
      }

      return response;
    } catch (err) {
      toast.add({
        severity: "error",
        summary: `${product.name} couldn't added to your Wishlist.`,
        life: 3000,
      });
      return err;
    }
  };

  const deleteProductFromWishListBySlug = async (slug: string) => {
    try {
      const response = await $apiClient(`/wish-lists/${slug}`, {
        method: "DELETE",
      });
      wishListedProduct.value = wishListedProduct.value.filter(
        (product) => product.slug !== slug,
      );

      localStorage.setItem(
        "wishLists",
        JSON.stringify(wishListedProduct.value),
      );
      return response;
    } catch (err) {
      return err;
    }
  };

  const removeWishList = () => {
    wishListedProduct.value = [];
    localStorage.removeItem("wishLists");
  };

  return {
    wishListedProduct,
    fetchWishListProducts,
    addProductToWishList,
    deleteProductFromWishListBySlug,
    getWishListProduct,
    removeWishList,
  };
});
