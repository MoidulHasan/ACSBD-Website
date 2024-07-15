<template>
  <main>
    <div>
      <LayoutsHeaderNav />
    </div>
    <div v-if="!hideBreadCrumb">
      <LayoutsBreadCrumb :breadcrumbs="breadcrumbs" />
    </div>

    <div class="container">
      <h1 class="py-5 pl-0 pr-5 font-heading-2 dashboard-title">My Account</h1>
      <div class="grid">
        <div class="col-12 lg:col-3">
          <LayoutsDashboard />
        </div>
        <div class="col-12 lg:col-9 mb-80px">
          <slot />
        </div>
      </div>
    </div>

    <div>
      <LayoutsAppFooter />
    </div>
    <ClientOnly>
      <Toast />
    </ClientOnly>
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
    !breadcrumbs.value[breadcrumbs.value.length - 1]?.title ||
    !router.currentRoute.value.name
  );
});
</script>

<style scoped>
.dashboard-title {
  color: var(--primary-color-navy-blue);
}
</style>
