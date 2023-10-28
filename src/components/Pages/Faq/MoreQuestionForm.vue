<template>
  <div class="w-full">
    <form class="flex flex-column gap-3" @submit="submitQuestion">
      <h2 class="font-heading-3 text-primary-color-navy-blue">
        Have more Questions?
      </h2>
      <InputText
        v-model="question.name"
        aria-describedby="text-error"
        placeholder="Name"
        required
        type="text"
      />
      <InputText
        id="email"
        v-model="question.email"
        aria-describedby="text-error"
        placeholder="Email"
        required
        type="text"
      />
      <Textarea
        v-model="question.message"
        aria-describedby="text-error"
        auto-resize
        placeholder="Questions?"
        required
        rows="5"
      />
      <div class="flex align-items-center mb-3">
        <Checkbox
          v-model="question.check"
          :binary="true"
          class="check-box"
          input-id="aggrement"
          name="aggrement"
          required
          type="checkbox"
        />
        <label class="text-semi-bold-1 text-dark-gray-80 ml-3" for="aggrement">
          I Accept the Terms of Service and Privacy Policy
        </label>
      </div>
      <Button class="button-style" label="Submit" type="submit" />
    </form>
  </div>
</template>

<script lang="ts" setup>
interface questions {
  name: string;
  email: string;
  message: string;
  check: boolean;
}

const question: Ref<questions> = ref({
  name: "",
  email: "",
  message: "",
  check: false,
});
const submitQuestion = () => {
  question.value.name = "";
  question.value.email = "";
  question.value.message = "";
  question.value.check = true;
};
</script>

<style lang="scss" scoped>
.checkbox-label {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: var(--primary-color-dark-gray);
}

:deep(.p-checkbox .p-checkbox-box) {
  height: 24px;
  width: 24px;
  border-radius: 5px !important;
  transition: 0.5s ease;
  border: 1px solid var(--navy-blue-80) !important;
}

.button-style {
  display: inline-flex;
  padding: 12px 48px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: var(--primary-color-envitect-sam-blue);
  border-radius: 6px;
  max-width: 155px;
}

//:deep(.p-button) {
//  display: inline-flex;
//  padding: 12px 48px;
//  justify-content: center;
//  align-items: center;
//  gap: 12px;
//  background: var(--primary-color-envitect-sam-blue);
//  border-radius: 6px;
//  max-width: 155px;
//}

//:deep(.p-button .p-button-label) {
//  font-size: 16px;
//  font-style: normal;
//  font-weight: 600;
//  line-height: 24px;
//  color: var(--primary-color-white);
//}
//
//:deep(.p-button:focus) {
//  box-shadow: none;
//  background: var(--primary-color-envitect-sam-blue);
//}

:deep(.p-inputtext) {
  padding: 16px 24px 16px 24px;
  box-shadow: none;
}
</style>
