<template>
  <nav
    class="bread-crumb-container bg-envitect-sam-blue-5 flex align-items-center"
  >
    <ol class="container flex w-full">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.name">
        <NuxtLink
          :class="[
            'flex align-items-center',
            index !== breadcrumbs.length - 1
              ? 'text-primary-color-dark-gray'
              : 'text-primary-color-envitect-sam-blue',
          ]"
          :to="breadcrumb.name ? { name: breadcrumb?.name } : breadcrumb.path"
        >
          <i v-if="index !== 0" class="pi pi-angle-double-right mx-8px" />
          <span>
            {{ breadcrumb.title }}
          </span>
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import type { BreadCrumb } from "~/contracts/common";

defineProps<{
  breadcrumbs: BreadCrumb[];
}>();
</script>

<style lang="scss" scoped>
.bread-crumb-container {
  height: 48px;
  width: 100%;
}
</style>
