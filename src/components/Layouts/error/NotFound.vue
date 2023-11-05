<template>
  <div class="notfound">
    <img alt="" src="/images/404-Not-found.png" />
    <h3 class="text-blue-800 text-2xl font-semibold">
      Opps! The page you requested not found!
    </h3>
    <NuxtLink class="back-button text-semi-bold-1" to="/">
      Back to home
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.notfound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
  }

  h3 {
    color: var(--primary-color-navy-blue);
    margin-top: 40px;
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
