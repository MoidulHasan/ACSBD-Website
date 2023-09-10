<template>
  <div class="notfound">
    <!-- <img :src="image" /> -->
    <img src="/images/404-Not-found.png" alt="" />
    <h3 class="text-blue-800 text-2xl font-semibold">
      Opps! The page you requested not found!
    </h3>
    <Button class="font-base font-semibold px-6 line-height-3"
      >Back to home</Button
    >
  </div>
</template>
<script lang="ts" setup></script>

<style scoped lang="scss">
.notfound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: var(--primary-color-navy-blue); */
}
</style>
