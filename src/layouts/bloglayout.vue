<template>
  <main>
    <div>
      <LayoutsHeaderNav />
    </div>
    <div v-if="!hideBreadCrumb">
      <LayoutsBreadCrumb :breadcrumbs="breadcrumbs" />
    </div>

    <div class="container">
      <section class="mt-5 mb-80px">
        <slot name="blogHeader" />
        <div class="blogs-section grid mt-6 mb-8">
          <div class="col-12 lg:col-9">
            <slot />
          </div>
          <div class="col-12 lg:col-3">
            <PagesBlogsSideBarOptions />
          </div>
        </div>
      </section>
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
    !breadcrumbs.value[breadcrumbs.value.length - 1]?.title ||
    !router.currentRoute.value.name
  );
});
</script>

<style scoped></style>
