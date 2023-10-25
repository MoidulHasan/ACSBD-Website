<template>
  <div>
    <CommonAuthFormSection
      form-title="Email or Phone?"
      form-sub-title="We’ll check if you have an account"
      form-icon
    >
      <template #innerContent>
        <form>
          <InputText
            v-model="signInCredential"
            type="text"
            class="w-full basic-input email-or-phone"
            placeholder="Email or Phone"
          />
          <Button type="submit" class="auth-button w-full" :disabled="!signInCredential.length">Continue</Button>
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
