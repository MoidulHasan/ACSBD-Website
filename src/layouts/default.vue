<template>
  <main>
    <div>
      <LayoutsHeaderNav />
    </div>
    <div v-if="!hideBreadCrumb">
      <LayoutsBreadCrumb :breadcrumbs="breadcrumbs" />
    </div>

    <div>
      <slot />
    </div>

    <div>
      <LayoutsAppFooter />
    </div>
  </main>
</template>

<script lang="ts" setup>
const { width } = useWindowSize();

const { breadcrumbs } = useBreadcrumbs();

const router = useRouter();

const hideBreadCrumb = computed(() => {
  return router.currentRoute.value.fullPath === "/" || width.value <= 768;
});
</script>

<style scoped></style>
