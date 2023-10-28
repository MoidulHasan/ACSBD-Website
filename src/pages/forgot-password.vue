<script setup lang="ts">
definePageMeta({
  title: "Forgot Password",
});

const email = ref("");
</script>
<template>
  <div>
    <CommonAuthFormSection
      form-title="Forget Password?"
      form-sub-title="No Worries, We’ll send you reset instructions"
      form-icon
    >
      <template #innerContent>
        <form>
          <CommonAuthTextInput
            type="email"
            class="mb-5"
            placeholder-text="Enter your emial"
          />
          <Button
            type="submit"
            class="auth-button w-full"
            :disabled="!email.length"
          >
            Continue
          </Button>
        </form>
      </template>
    </CommonAuthFormSection>
  </div>
</template>
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
