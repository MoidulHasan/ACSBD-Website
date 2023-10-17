<template>
  <div class="form-component">
    <div class="form-content">
      <h2 class="form-title">Welcome!</h2>
      <p class="form-sub-title">Signup or login to continue</p>
      <div class="button-container mt-5">
        <Button class="mb-4 button-primary auth-button login">Log In</Button>
        <Button class="auth-button signup">Sign Up</Button>
      </div>
      <div class="or-container my-4">
        <div class="line-through"></div>
        <p class="or-text">Or</p>
        <div class="line-through"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Welcome",
});
</script>

<style scoped lang="scss">
.form-component {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 38.84375rem);

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("~/assets/images/auth_bg.png");
    background-color: var(--primary-color-navy-blue);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    z-index: -3;
    opacity: 0.5;
  }

  .form-content {
    padding: 40px;
    border-radius: 8px;
    border: 1px solid #dcdae8;
    background: #fff;
    min-width: 540px;
    margin: 40px 0;

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
        background: #DCDAE8;
      }
    }
  }
}
</style>
