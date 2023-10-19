<template>
  <div class="form-component">
    <div class="form-content">
      <slot name="innerContent"></slot>
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

    @media (max-width: 900px) {
      padding: 2rem 1rem;
      min-width: 328px;
      margin: 2rem 1rem;
    }
  }
}

</style>
