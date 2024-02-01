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
  }

  return { count, name, doubleCount, increment, cart, addToCart };
});
