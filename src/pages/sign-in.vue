<template>
  <div>
    <CommonAuthFormSection
      form-title="Sign In"
      form-sub-title="Login to your an account"
    >
      <template #innerContent>
        <form>
          <InputText
            class="w-full basic-input mb-4"
            type="email"
            placeholder="Email or Phone"
          />
          <InputText
            type="password"
            class="w-full basic-input password"
            placeholder="Password"
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
          <Button type="submit" class="auth-button w-full">Log In</Button>
        </form>
        <h2 class="sign-up-text mt-5 text-center">
          Don’t have an account yet?
          <NuxtLink class="link" to="/">Sign Up </NuxtLink>
        </h2>
      </template>
    </CommonAuthFormSection>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Sign In",
});
const checked = ref(false);
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
.password {
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
  box-shadow: none;
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
