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
const router = useRouter();
const { breadcrumbs } = useBreadcrumbs();
const { width } = useWindowSize();

const hideBreadCrumb = computed(() => {
  return (
    router.currentRoute.value.fullPath === "/" ||
    breadcrumbs.value.length === 1 ||
    width.value <= 768 ||
    !breadcrumbs.value[breadcrumbs.value.length - 1]?.title
  );
});
</script>

<style scoped></style>
