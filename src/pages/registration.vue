<script setup lang="ts">
import { useToast } from "primevue/usetoast";

definePageMeta({
  title: "Registration",
  name: "registration",
});

const toast = useToast();
const store = useStore();
const { authenticateUser, isAuthenticated, registerUser } = useAuthStore();

const name = ref("");
const email = ref("");
const password = ref("");
const strength = ref(0);

const emailSatisfied = ref(true);
const nameSatisfied = ref(true);

const emailRegex =
  /^(?=.{1,256}$)(?=.{1,64}@.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateEmail = () => {
  emailSatisfied.value = emailRegex.test(email.value);
};

const validateName = () => {
  nameSatisfied.value = name.value.trim() !== "";
};

const registration = async () => {
  store.loading = true;
  const response = await registerUser({
    name: name.value,
    email: email.value,
    password: password.value,
  });
  store.loading = false;

  if (isAuthenticated()) {
    name.value = email.value = password.value = "";
    const redirectTo = useCookie("redirectTo").value;
    useCookie("redirectTo").value = null;
    redirectTo
      ? await navigateTo({ path: redirectTo })
      : await navigateTo({ name: "my-details" });
    return;
  }

  Object.entries(response?.errors).forEach(([key, value]) => {
    toast.add({
      severity: "error",
      summary: "Registration Failed",
      detail: value[0],
      life: 3000,
    });
  });
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
            <CommonAuthInputField
              type="text"
              placeholder-text="Enter You Name"
              @update:text="name = $event"
              @input="validateName"
            />
            <transition name="error-message">
              <p v-if="!nameSatisfied && name" class="error-message mt-1">
                Invalid Name
              </p>
            </transition>
          </div>
          <div class="mb-4">
            <CommonAuthInputField
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
          <CommonAuthInputField
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
            :disabled="
              !(
                name.trim() &&
                email &&
                emailSatisfied &&
                password &&
                strength === 5
              )
            "
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
