<template>
  <CommonAuthFormSection>
    <template #innerContent>
      <div>
        <h2 class="form-title">Welcome!</h2>
        <p class="form-sub-title">Signup or login to continue</p>
        <div class="button-container mt-5">
          <Button class="mb-4 auth-button login">Log In</Button>
          <Button class="auth-button signup">Sign Up</Button>
        </div>
        <div class="or-container my-4">
          <div class="line-through"></div>
          <p class="or-text">Or</p>
          <div class="line-through"></div>
        </div>
        <div class="button-container mb-4">
          <Button class="mb-4 auth-button alternative">
            <img src="~/assets/images/auth/apple.svg" alt="Apple" />
            <span class="button-text">Continue with Apple</span>
          </Button>
          <Button class="mb-4 auth-button alternative">
            <img src="~/assets/images/auth/google.svg" alt="Google" />
            <span class="button-text">Continue with Google</span>
          </Button>
          <Button class="auth-button alternative">
            <img src="~/assets/images/auth/facebook.svg" alt="Facebook" />
            <span class="button-text">Continue with Facebook</span>
          </Button>
        </div>
        <ul class="sign-content">
          <li class="sign-text">
            By signing up, you agree to our Terms of Use and to receive Jicson
            emails & updates and acknowledge that you read our Privacy Policy.
          </li>
        </ul>
      </div>
    </template>
  </CommonAuthFormSection>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Welcome",
});
</script>

<style scoped lang="scss">
.form-title {
  color: #363636;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 0.5rem;
}
.form-sub-title {
  color: #808080;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.button-container {
  display: flex;
  flex-direction: column;
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
  }
  .login {
    background: var(--primary-color-envitect-sam-blue);
    color: var(--primary-color-white);
  }
  .signup {
    color: var(--primary-color-envitect-sam-blue);
    background: var(--primary-color-white);
    border: 1px solid var(--primary-color-envitect-sam-blue) !important;
  }
  .alternative {
    border: 1px solid #dcdae8;
    background: #fff;

    .button-text {
      color: #808080;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
}
.or-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .or-text {
    text-align: center;
    display: inline-block;
    color: #808080;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .line-through {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    height: 1px;
    content: " ";
    text-shadow: none;
    width: 100px;
    background: #dcdae8;
  }
}
.sign-content {
  padding-inline-start: 20px;
  .sign-text {
    max-width: 460px;
    text-align: justify;
    color: #808080;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
}
</style>
