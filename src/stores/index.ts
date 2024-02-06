interface CartedProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  brand: string;
  capacity: string;
  quantity: number;
}

export const useStore = defineStore("store", () => {
  // state
  const count = ref(0);
  const cart = ref<CartedProduct[]>([]);
  // getters
  const doubleCount = computed(() => count.value * 2);

  // actions

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

  function setCartFromLocalStorage() {
    // @ts-ignore
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) cart.value = cartItems;
  }

  return { count, doubleCount, cart, addToCart, setCartFromLocalStorage };
});
