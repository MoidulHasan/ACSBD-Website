<script setup lang="ts">
defineProps<{
  navItem: any
  navClass?: string
}>()
const show = ref(false)

function toggleMenu() {
  show.value = !show.value
}

function checkNav(path: string, subMenu: boolean = false): void {
  if (path !== '' && !subMenu) {
    toggleMenu()
  }
}
</script>

<template>
  <ul :key="navItem.title" :class="[navClass ? navClass : 'submenu']">
    <li
      v-for="subNavItem in navItem.submenu"
      :key="subNavItem.title"
    >
      <NuxtLink
        :to="subNavItem.path"
        active-class="active"
        class="subMenuLink pb-2 flex gap-3 lg:justify-content-between"
        @click="checkNav(subNavItem.path)"
      >
        <span>{{ subNavItem.title }}</span>
        <i
          v-if="subNavItem.submenu?.length"
          class="pi pi-chevron-right navLink_i subNavLink_i"
        />
      </NuxtLink>
      <LayoutsHeaderSubMenuList v-if="subNavItem.submenu?.length " :nav-item="subNavItem" nav-class="submenu2" />
    </li>
  </ul>
</template>

<style>

</style>
