<script lang="ts" setup></script>

<template>
  <div class="internal-server-error-container">
    <img alt="error 500" src="@/assets/images/500_error.png" />
    <h3 class="font-heading-3">Internal Server Error</h3>
    <p class="font-heading-7 support-text mt-3">
      The server has been deserted for a while. please be patient or try again
      later.
    </p>
    <NuxtLink class="back-button text-semi-bold-1" to="/">
      Back to home
    </NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.internal-server-error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: auto;

    @include media-query(md) {
      max-width: 450px;
    }

    @include media-query(sm) {
      max-width: 250px;
    }
  }

  h3 {
    color: var(--primary-color-navy-blue);
    margin-top: 40px;
  }
  .support-text {
    color: var(--dark-gray-80);
    max-width: 330px;
    text-align: center;
  }

  .back-button {
    margin-top: 50px;

    display: inline-flex;
    padding: 12px 48px;
    justify-content: center;
    align-items: center;
    gap: 12px;

    border-radius: 4px;
    background: var(--primary-color-envitect-sam-blue);

    color: var(--primary-color-white);
    text-decoration: none;
  }
}
</style>
