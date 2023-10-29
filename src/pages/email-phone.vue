<template>
  <div>
    <CommonAuthFormSection
      form-title="Email or Phone?"
      form-sub-title="We’ll check if you have an account"
      form-icon
    >
      <template #innerContent>
        <form @submit.prevent="checkEmail">
          <CommonAuthTextInput
            class="mb-4"
            type="text"
            placeholder-text="Email or Phone"
            @update:text="signInCredential = $event"
          />
          <Button
            type="submit"
            class="auth-button w-full"
            :disabled="!signInCredential"
          >
            Continue
          </Button>
        </form>
      </template>
    </CommonAuthFormSection>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Sign In Via Email",
});

const signInCredential = ref("");

const checkEmail = () => {
  console.warn("Email", signInCredential.value);
};
</script>

<style scoped lang="scss">
.auth-button {
  height: 50px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  gap: 12px;
  background: var(--primary-color-envitect-sam-blue);
  color: var(--primary-color-white);
}
</style>
