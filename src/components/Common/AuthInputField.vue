<script setup lang="ts">
defineProps<{
  placeholderText: string;
  password?: boolean;
  disabled?: boolean;
}>();
const emit = defineEmits<{
  (e: "update:text", value: string): void;
}>();
const text = ref("");
const isOpen = ref(false);
const updateText = () => {
  emit("update:text", text.value);
};
const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <div class="input-wrapper">
    <InputText
      v-model="text"
      class="w-full basic-input"
      :placeholder="placeholderText"
      :type="password ? (isOpen ? 'text' : 'password') : 'text'"
      @input="updateText"
      :disabled="disabled"
    />
    <i
      v-if="password"
      class="pi showIcon"
      :class="[isOpen ? 'pi-eye' : 'pi-eye-slash']"
      @click="toggleOpen"
    />
  </div>
</template>
<style scoped lang="scss">
.input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  .basic-input {
    padding: 18px 16px;
    border-radius: 4px;
    border: 1px solid #dcdae8;
    color: #808080;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &:focus {
      color: #000;
    }
  }
  .showIcon {
    width: 24px !important;
    height: 16px !important;
    color: var(--dark-gray-90);
    margin-left: -2rem;
    cursor: pointer;
  }
}
</style>
