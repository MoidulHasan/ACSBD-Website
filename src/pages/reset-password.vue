<script setup lang="ts">
definePageMeta({
  title: "Reset Password",
});
const password = ref("");
const repeatedPass = ref("");
const strength = ref(0);

const resetPassword = () => {
  console.log("Reset Password form fillupped");
};
</script>

<template>
  <div>
    <CommonAuthFormSection
      form-title="Set New Password?"
      form-sub-title="New password must be different from previous password."
      form-icon
    >
      <template #innerContent>
        <form class="reset-password-form" @submit.prevent="resetPassword">
          <CommonAuthInputField
            placeholder-text="Password"
            class="mb-3"
            password
            @update:text="password = $event"
          />
          <CommonAuthPasswordStrenghtSection
            :password="password"
            @update-strength="strength = $event"
          />
          <CommonAuthInputField
            placeholder-text="Password"
            class="mb-3"
            password
            @update:text="repeatedPass = $event"
          />
          <Button
            type="submit"
            class="auth-button w-full"
            :disabled="!(strength === 5 && password === repeatedPass)"
          >
            Set New Password
          </Button>
        </form>
      </template>
    </CommonAuthFormSection>
  </div>
</template>

<style scoped lang="scss">
.reset-password-form {
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
</style>
