<template>
  <div class="form-component">
    <div class="form-content">
      <img
        v-if="formIcon"
        class="form-icon mb-3"
        src="~/assets/images/auth/email.svg"
        alt="form_icon"
      />
      <h2 class="form-title mb-2">{{ formTitle }}</h2>
      <p class="form-sub-title mb-5">{{ formSubTitle }}</p>
      <slot name="innerContent"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Welcome",
});

defineProps<{
  formIcon?: boolean;
  formTitle: string;
  formSubTitle: string;
}>();
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
    inset: 0;
    background-image: url("~/assets/images/auth_bg.png");
    background-color: var(--primary-color-navy-blue);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    z-index: -3;
    opacity: 0.5;
  }
  @media (max-width: 900px) {
    background-image: none;
    background-color: var(--primary-color-white);
    opacity: 1;
  }

  .form-content {
    padding: 40px;
    border-radius: 8px;
    border: 1px solid #dcdae8;
    background: #fff;
    min-width: 540px;
    margin: 40px 0;

    //inner content will be here
    .form-icon {
      height: 70px;
      width: 70px;
    }

    .form-title {
      color: #363636;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .form-sub-title {
      color: #808080;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    @media (max-width: 900px) {
      padding: 2rem 1rem;
      min-width: 328px;
      margin: 2rem 1rem;
    }
  }
}
</style>
