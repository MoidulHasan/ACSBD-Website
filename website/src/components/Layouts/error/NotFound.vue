<template>
  <div class="notfound">
    <img alt="" src="/images/404-Not-found.png" />
    <h3 class="text-blue-800 text-2xl font-semibold">
      Opps! The page you requested not found!
    </h3>
    <Button
      class="mt-5 font-base font-semibold px-6 line-height-3"
      @click="redirectToHome"
    >
      Back to home
    </Button>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();
const redirectToHome = () => {
  router.push("/");
};
</script>

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
  }
}
</style>
