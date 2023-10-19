<template>
  <div class="contact">
    <div class="container contact-form">
      <form class="flex flex-column gap-3" @submit.prevent="submitQuestion">
        <h2 class="question-title">Have more Questions?</h2>
        <InputText
          id="name"
          v-model="question.name"
          :class="{ questionInput: true }"
          aria-describedby="text-error"
          placeholder="Name"
          required
          type="text"
        />
        <InputText
          id="email"
          v-model="question.email"
          :class="{ questionInput: true }"
          aria-describedby="text-error"
          placeholder="Email"
          required
          type="text"
        />
        <Textarea
          v-model="question.questions"
          :class="{ questionInput: true }"
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
          <label class="checkbox-label ml-3" for="aggrement">
            I Accept the Terms of Service and Privacy Policy
          </label>
        </div>
        <Button label="Submit" type="submit" />
      </form>
    </div>
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
  questions: "",
  check: false,
});
const submitQuestion = () => {
  question.value.name = "";
  question.value.email = "";
  question.value.questions = "";
  question.value.check = false;
};
</script>

<style lang="scss" scoped>
.contact {
  background: var(--primary-color-white);
  padding: 60px 410px 100px;

  .question-title {
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    color: var(--primary-color-envitect-sam-blue);
  }

  .questionInput {
    padding: 16px 24px 16px 24px;
  }

  .checkbox-label {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    color: var(--primary-color-dark-gray);
  }
}

:deep(.p-checkbox .p-checkbox-box) {
  height: 24px;
  width: 24px;
  border-radius: 5px !important;
  transition: 0.5s ease;
  border: 1px solid var(--navy-blue-80) !important;
}

:deep(.p-button) {
  display: inline-flex;
  padding: 12px 48px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: var(--primary-color-envitect-sam-blue);
  border-radius: 6px;
  max-width: 155px;
}

:deep(.p-button .p-button-label) {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: var(--primary-color-white);
}

:deep(.p-button:focus) {
  box-shadow: none;
  background: var(--primary-color-envitect-sam-blue);
}

@media (max-width: 900px) {
  .contact {
    padding: 40px 0px;
  }
}
</style>
