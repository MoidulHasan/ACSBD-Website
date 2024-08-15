<script lang="ts" setup>
const props = defineProps<{
  modelValue: number[];
  min: number;
  max: number;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: number[]): void;
}>();

const rangeValue = ref<number[]>(props.modelValue);

watch(rangeValue, () => {
  emits("update:modelValue", rangeValue.value);
});
</script>

<template>
  <div class="">
    <div class="w-full flex justify-content-between mb-3 text-regular-3">
      <span class="text-navy-blue-80">TK. {{ rangeValue[0] }}</span>
      <span class="text-navy-blue-80">TK. {{ rangeValue[1] }}</span>
    </div>

    <Slider v-model="rangeValue" :max="max" :min="min" class="w-full" range />

    <div class="w-full flex justify-content-between mt-4">
      <input
        v-model="rangeValue[0]"
        :max="rangeValue[1]"
        class="col-4 input-number"
        type="number"
      />
      <span
        class="col-4 p-0 flex align-content-center justify-content-center text-regular-4 text-navy-blue"
      >
        To
      </span>
      <input
        v-model="rangeValue[1]"
        :min="rangeValue[0]"
        class="col-4 input-number"
        step="1"
        type="number"
      />
    </div>

    <div class="w-full flex justify-content-center mt-4">
      <Button class="common-button search-button" label="Search" outlined />
    </div>
  </div>
</template>

<style scoped>
.input-number {
  height: 24px;

  background: #ffffff;
  border: 0.25px solid #1d3566;
  border-radius: 2px;
}

.search-button {
  height: 28px;

  padding: 2px 16px;

  background: #ffffff;
  border: 0.5px solid #1476bf;
  border-radius: 2px;
}
</style>
