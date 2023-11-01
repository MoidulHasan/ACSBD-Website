<template>
  <main>
    <div>
      <LayoutsHeaderNav />
    </div>

    <div class="container">
      <h1 class="py-5 pl-0 pr-5 font-heading-2 dashboard-title">My Account</h1>
      <div class="grid">
        <div class="col-12 lg:col-4">
          <LayoutsDashboard />
        </div>
        <div class="col-12 lg:col-8 mb-80px">
          <slot />
        </div>
      </div>
    </div>

    <div>
      <LayoutsAppFooter />
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped>
.dashboard-title {
  color: var(--primary-color-navy-blue);
}
</style>
