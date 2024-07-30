<script setup lang="ts">
import * as yup from "yup";
import { useToast } from "primevue/usetoast";
import type { ProductInWishList } from "~/contracts/common";

definePageMeta({
  title: "Sign In",
  name: "sign-in",
});
useHead({
  title: "Sign In",
});

const toast = useToast();
const store = useStore();
const wishListStore = useWishListStore();
const { authenticateUser, isAuthenticated } = useAuthStore();

const checked = ref(false);

const validationSchema = yup.object({
  email: yup
    .string()
    .required("Email is Required")
    .email("Enter valid email address"),
  password: yup.string().required("Password is Required"),
});

const { handleSubmit, errors, meta } = useForm({ validationSchema });

const { value: email } = useField("email");
const { value: password } = useField("password");

const onSubmit = handleSubmit(async (values) => {
  store.loading = true;
  const response = await authenticateUser({
    email: values.email,
    password: values.password,
  });
  store.loading = false;

  if (isAuthenticated()) {
    await navigateTo({ name: "my-details" });
    const { data: customerWishList } = await useAsyncData<ProductInWishList[]>(
      "wishlist-data",
      () => wishListStore.fetchWishListProducts(),
    );
    return;
  }

  toast.add({
    severity: "error",
    summary: "Login Failed",
    detail: response.statusMessage,
    life: 3000,
  });
});
</script>

<template>
  <div>
    <CommonAuthFormSection
      form-title="Sign In"
      form-sub-title="Login to your an account"
    >
      <template #innerContent>
        <form @submit.prevent="onSubmit">
          <CommonFormInput
            id="email"
            label="Email Address"
            required
            :error="errors.email"
            class="mb-3"
          >
            <InputText
              id="email"
              v-model="email"
              placeholder="Enter your email address"
              :invalid="!!errors.email"
            />
          </CommonFormInput>
          <CommonFormInput
            id="password"
            label="Password"
            required
            :error="errors.password"
            class="mb-3"
          >
            <Password
              id="password"
              v-model="password"
              placeholder="Enter your password"
              :invalid="!!errors.password"
              toggle-mask
              :feedback="false"
            />
          </CommonFormInput>
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
              >Reset Password?
            </NuxtLink>
          </div>
          <Button
            type="submit"
            class="auth-button w-full"
            :disabled="!meta.valid || !meta.dirty"
            >Log In
          </Button>
        </form>
        <h2 class="sign-up-text mt-5 text-center">
          Don’t have an account yet?
          <NuxtLink class="link" to="/registration">Sign Up</NuxtLink>
        </h2>
      </template>
    </CommonAuthFormSection>
  </div>
</template>

<style scoped lang="scss">
:deep(.p-password .p-password-input) {
  width: 100%;
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
    text-decoration: underline;
    cursor: pointer;
    color: #808080 !important;
  }
}
</style>
