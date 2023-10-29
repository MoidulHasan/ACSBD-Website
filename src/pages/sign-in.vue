<script setup lang="ts">
definePageMeta({
  title: "Sign In",
});
const checked = ref(false);
const email = ref("");
const passwordValue = ref("");

const login = () => {
  console.warn("email :", email.value);
};
</script>

<template>
  <div>
    <CommonAuthFormSection
      form-title="Sign In"
      form-sub-title="Login to your an account"
    >
      <template #innerContent>
        <form @submit.prevent="login">
          <CommonAuthTextInput
            class="mb-4"
            placeholder-text="Email or Phone"
            @update:text="email = $event"
          />
          <CommonAuthTextInput
            class="password-input"
            placeholder-text="Password"
            :password="true"
            @update:text="passwordValue = $event"
          />
          <div
            class="utils-container flex align-items-center justify-content-between mb-4"
          >
            <div class="flex align-items-center">
              <Checkbox
                id="chbx"
                v-model="checked"
                name="chbx"
                :binary="true"
              />
              <label class="ml-2 check-text" for="chbx">Remember</label>
            </div>
            <NuxtLink to="/reset-password" class="reset-text"
              >Reset Password?</NuxtLink
            >
          </div>
          <Button
            type="submit"
            class="auth-button w-full"
            :disabled="!(email && passwordValue)"
            >Log In</Button
          >
        </form>
        <h2 class="sign-up-text mt-5 text-center">
          Don’t have an account yet?
          <NuxtLink class="link" to="/">Sign Up </NuxtLink>
        </h2>
      </template>
    </CommonAuthFormSection>
  </div>
</template>

<style scoped lang="scss">
.password-input {
  margin-bottom: 26px;
}

.utils-container {
  .check-text {
    color: #808080;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .reset-text {
    color: #ec0414;
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
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
.sign-up-text {
  color: #808080 !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  .link {
    text-decoration: none;
    cursor: pointer;
    color: #808080 !important;
  }
}
</style>
