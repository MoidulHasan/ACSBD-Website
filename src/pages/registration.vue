<script setup lang="ts">
definePageMeta({
  title: "Registration",
});

const email = ref("");
const password = ref("");
const strength = ref(0);

const emailSatisfied = ref(true);

const emailRegex =
  /^(?=.{1,256}$)(?=.{1,64}@.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateEmail = () => {
  emailSatisfied.value = emailRegex.test(email.value);
};

const registration = () => {
  console.warn("Email:", email.value);
};
</script>

<template>
  <div>
    <CommonAuthFormSection
      form-title="Let’s get you started!"
      form-sub-title="First let’s create your Jicson acount with dulalux@gmail.com"
      form-icon
    >
      <template #innerContent>
        <form class="registration-form" @submit.prevent="registration">
          <div class="mb-4">
            <CommonAuthTextInput
              type="email"
              placeholder-text="Enter Email"
              @update:text="email = $event"
              @input="validateEmail"
            />
            <transition name="error-message">
              <p v-if="!emailSatisfied && email" class="error-message mt-1">
                Invalid Email Address
              </p>
            </transition>
          </div>
          <CommonAuthTextInput
            class="mb-3"
            placeholder-text="Password"
            :password="true"
            @update:text="password = $event"
          />
          <CommonAuthPasswordStrenghtSection
            :password="password"
            @update-strength="strength = $event"
          />
          <Button
            type="submit"
            class="auth-button w-full"
            :disabled="!(email && emailSatisfied && password && strength === 5)"
          >
            Create Account
          </Button>
        </form>
      </template>
    </CommonAuthFormSection>
  </div>
</template>

<style scoped lang="scss">
.registration-form {
  .error-message {
    color: var(--color-danger);
  }
  .auth-button {
    height: 50px;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    padding: 14px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: var(--primary-color-envitect-sam-blue);
    color: var(--primary-color-white);
  }
}

.error-message-enter-active,
.error-message-leave-active {
  transition: opacity 0.6s ease;
}

.error-message-enter-from,
.error-message-leave-to {
  opacity: 0;
}
</style>
