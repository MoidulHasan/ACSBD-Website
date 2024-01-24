<script setup lang="ts">
const props = defineProps<{
  stock: number;
  modelValue: number;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const inputValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emits("update:modelValue", newValue);
  },
});

const decreaseQuantity = () => {
  if (inputValue.value > 1) {
    inputValue.value -= 1;
  }
};

const incrementQuality = () => {
  if (inputValue.value < Number(props.stock)) {
    inputValue.value += 1;
  }
};

const numberInputWidth = computed(() => {
  const quantityInput = Math.abs(inputValue.value).toString().length;
  return quantityInput < 2 ? "67px" : `${67 + 8 * (quantityInput - 1)}px`;
});

const modifyInput = (event) => {
  const input = event.target.value;
  if (input < 1) {
    inputValue.value = 1;
  } else if (input > props.stock) {
    inputValue.value = props.stock;
  }
};
</script>

<template>
  <div class="flex align-items-center quantity-input">
    <button
      class="quanity-button quantity-button-down"
      :disabled="inputValue === 1"
      @click="decreaseQuantity"
    >
      <i class="pi pi-minus" />
    </button>
    <input
      v-model="inputValue"
      min="1"
      :max="stock"
      type="number"
      class="quantity-input font-heading-5 text-primary-color-dark-gray"
      @input="modifyInput"
    />
    <button
      class="quanity-button quantity-button-up"
      :disabled="inputValue === stock"
      @click="incrementQuality"
    >
      <i class="pi pi-plus" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.quantity-input {
  border-radius: 4px;
  height: 2.8125rem;

  .quanity-button {
    font-size: 1rem;
    background: transparent;
    border: 1px solid var(--dark-gray-20);
    padding: 12px 25px;
    height: 46px;

    &:focus,
    &:hover {
      border: 1px solid var(--primary-color-envitect-sam-blue);
    }

    &:disabled {
      border: 1px solid var(--dark-gray-20);
      color: var(--dark-gray-20);
    }
  }

  .quantity-button-down {
    border-radius: 4px 0px 0px 4px;
  }

  .quantity-button-up {
    border-radius: 0px 4px 4px 0px;
  }

  .quantity-input {
    height: 46px;
    border: 1px solid var(--dark-gray-20);
    border-left: none;
    border-right: none;
    border-radius: 0;
    max-width: v-bind(numberInputWidth);
    padding: 18.5px 24px;

    &:focus {
      border: 1px solid var(--primary-color-envitect-sam-blue);
    }
  }
}
</style>
