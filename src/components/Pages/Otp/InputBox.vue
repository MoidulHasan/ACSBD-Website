<script setup lang="ts">
const props = defineProps<{
  default?: string;
  digitCount: number;
}>();
const otpContainer = ref(null);
const digits = reactive([]);

if (props.default && props.default.length === props.digitCount) {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = props.default.charAt(i);
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = null;
  }
}

const emit = defineEmits(["update:otp"]);
const isDigitFull = () => {
  for (const el of digits) {
    if (el === null || el === undefined) {
      return false;
    }
  }
  return true;
};

const handleKeyDown = (event, index) => {
  if (
    event.key !== "Tab" &&
    event.key !== "ArrowRight" &&
    event.key !== "ArrowLeft" &&
    event.key !== "Control" &&
    event.key !== "Meta" &&
    event.key !== "C" &&
    event.key !== "V" &&
    event.key !== "c" &&
    event.key !== "v"
  ) {
    event.preventDefault();
  }
  if (event.key === "Backspace") {
    digits[index] = null;
    emit("update:otp", digits.join(""));
    if (index !== 0) {
      otpContainer.value.children[index - 1].focus();
      return;
    }
    otpContainer.value.children[0].focus();
    return;
  }

  if (event.key === "ArrowRight") {
    if (index !== props.digitCount - 1) {
      otpContainer.value.children[index + 1].focus();
      return;
    }
    otpContainer.value.children[0].focus();
    return;
  }

  if (event.key === "ArrowLeft") {
    if (index !== 0) {
      otpContainer.value.children[index - 1].focus();
      return;
    }
    otpContainer.value.children[props.digitCount - 1].focus();
    return;
  }

  if (new RegExp("^([0-9])$").test(event.key)) {
    digits[index] = event.key;
    if (index !== props.digitCount - 1) {
      otpContainer.value.children[index + 1].focus();
    }
    if (isDigitFull) {
      emit("update:otp", digits.join(""));
    }
  }
};

// Handle pasted OTP
const handleOnPaste = (event: any) => {
  event.preventDefault();
  const pastedData = event.clipboardData.getData("text/plain").split("");
  if (!pastedData.join("").match(/^\d+$/)) {
    return;
  }
  console.log(pastedData);
  for (let i = 0; i < props.digitCount; i++) {
    if (i < pastedData.length) {
      digits[i] = pastedData[i];
      continue;
    }
    digits[i] = null;
  }
  if (pastedData.length < digits) {
    otpContainer.value.children[pastedData.length].focus();
  }
};
</script>

<template>
  <div ref="otpContainer" class="opt-box">
    <input
      v-for="(digit, index) in digits"
      :key="digit + index"
      v-model="digits[index]"
      class="digit-box"
      type="text"
      maxlength="1"
      inputmode="numeric"
      autocomplete="one-time-code"
      :autofocus="index === 0"
      @keydown="handleKeyDown($event, index)"
      @paste="handleOnPaste"
    />
  </div>
</template>

<style scoped lang="scss">
.digit-box {
  height: 3.125rem;
  width: 3.125rem;
  padding: 13px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #dcdae8;
  margin-right: 12px;
  text-align: center;
  color: #808080;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    outline: 1px solid gray;
  }
}
</style>
