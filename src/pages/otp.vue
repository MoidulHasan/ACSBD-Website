<template>
  <div>
    <CommonAuthFormSection
      form-title="We’ve send a OTP Code to dulalux@gmail.com"
      form-sub-title="This helps us mitigate fraud & keep your personal data safe"
      form-icon
    >
      <template #innerContent>
        <form>
          <div class="mb-5 text-center">
            <PagesOtpInputBox
              :digit-count="4"
              @update:otp="otpValue = $event"
            />
          </div>
          <Button
            type="submit"
            class="auth-button w-full"
            :disabled="otpValue.length !== 4"
          >
            Verify Code
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

const otpValue = ref("");

</script>

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
  box-shadow: none !important;
}
.email-or-phone {
  margin-bottom: 32px;
}

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
