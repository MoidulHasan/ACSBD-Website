interface CartedProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  brand: string;
  capacity: string;
  quantity?: number;
  stock: number;
  timeStamp: string;
}

export const useStore = defineStore("store", () => {
  // state
  const cartVisible = ref(false);
  const count = ref(0);
  const cart = ref<CartedProduct[]>([]);
  const favorites = ref<CartedProduct[]>([]);
  const headerHeight = ref(171);
  // getters
  const doubleCount = computed(() => count.value * 2);

  // actions
  function addToFavorite(product: CartedProduct) {
    if (process.client) {
      const existingProductIndx = favorites.value.length
        ? favorites.value.findIndex((item) => item.id === product.id)
        : -1;
      if (existingProductIndx !== -1) {
        if (
          favorites.value[existingProductIndx].quantity !== product.quantity
        ) {
          favorites.value[existingProductIndx].quantity = product.quantity;
        }
      } else {
        favorites.value.push(product);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites.value));
    }
  }

  function deleteItemFromFav(product: CartedProduct) {
    if (process.client) {
      const existingProductIndx = favorites.value.length
        ? favorites.value.findIndex((item) => item.id === product.id)
        : -1;
      if (existingProductIndx > -1) {
        favorites.value.splice(existingProductIndx, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites.value));
    }
  }

  function deleteItemFromCart(id: number) {
    if (process.client) {
      const existingProductIndex = cart.value.length
        ? cart.value.findIndex((item) => item.id === id)
        : -1;
      if (existingProductIndex > -1) {
        cart.value.splice(existingProductIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cart.value));
    }
  }

  function addToCart(product: CartedProduct) {
    if (process.client) {
      const existingProductIndx = cart.value.length
        ? cart.value.findIndex((item) => item.id === product.id)
        : -1;
      if (existingProductIndx !== -1) {
        if (cart.value[existingProductIndx].quantity !== product.quantity) {
          cart.value[existingProductIndx].quantity = product.quantity;
        }
      } else {
        cart.value.push(product);
      }
      localStorage.setItem("cart", JSON.stringify(cart.value));
    }
  }

  function modifyCartItems(id: number, quantity: number) {
    if (process.client && quantity) {
      const existingProductIndx = cart.value.length
        ? cart.value.findIndex((item) => item.id === id)
        : -1;
      if (existingProductIndx !== -1) {
        cart.value[existingProductIndx].quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(cart.value));
      // getTotalCartPrice();
      // getTotalCartProducts();
    }
  }

  function setCartFromLocalStorage() {
    // @ts-ignore
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) cart.value = cartItems;
  }

  function setFavoritesFromLocalStorage() {
    // @ts-ignore
    const favItems = JSON.parse(localStorage.getItem("favorites"));
    if (favItems) favorites.value = favItems;
  }

  function getTotalCartPrice() {
    const getTotalPrices = cart.value.reduce((sum, cartItem) => {
      return sum + cartItem.price * (cartItem.quantity ?? 1);
    }, 0);
    return getTotalPrices;
  }

  function getTotalCartProducts() {
    const getTotalProducts = cart.value.reduce((totalCount, cartItem) => {
      return totalCount + (cartItem.quantity ?? 1);
    }, 0);
    return getTotalProducts;
  }

  return {
    count,
    headerHeight,
    cartVisible,
    doubleCount,
    cart,
    favorites,
    addToCart,
    setCartFromLocalStorage,
    addToFavorite,
    setFavoritesFromLocalStorage,
    deleteItemFromFav,
    deleteItemFromCart,
    getTotalCartPrice,
    modifyCartItems,
    getTotalCartProducts,
  };
});
