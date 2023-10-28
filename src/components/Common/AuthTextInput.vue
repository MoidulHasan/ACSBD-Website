<script setup lang="ts">
defineProps<{
  placeholderText: string;
}>();

const emit = defineEmits<{
  (e: "update:text", value: string): void;
}>();

const updateText = (e) => {
  emit("update:text", e.target.value);
};
</script>
<template>
  <InputText
    class="w-full basic-input"
    :placeholder="placeholderText"
    @input="updateText"
  />
</template>
<style scoped lang="scss">
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
</style>
