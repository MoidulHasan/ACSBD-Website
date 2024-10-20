<script setup lang="ts">
import { useRoute } from '#imports'

defineProps<{
  navItem: any
  navClass?: string
}>()
const route = useRoute()
const show = ref(false)

function toggleMenu() {
  show.value = !show.value
}

function checkNav(path: string, subMenu: boolean = false): void {
  if (path !== '' && !subMenu) {
    toggleMenu()
  }
}

function checkExactActiveRouteForCategory(title: string) {
  if (route.path === '/products') {
    const isExactActive = route.query.category === title
    return isExactActive ? 'active' : ''
  }
  return 'active'
}

// Recursive function to check if the nav item is a parent of any active submenu
function isProductParentActive(navItem: any): boolean {
  if (route.path === '/products') {
    // Base case: if navItem has no submenu, return false
    if (!navItem.submenu || !navItem.submenu.length) {
      return false
    }
    if (navItem.title === route.query.category) {
      return true
    }
    // Check if any submenu title matches the current route query category
    for (const subNavItem of navItem.submenu) {
      if (subNavItem.title === route.query.category) {
        return true // Found a match in the direct submenu
      }

      // Recursively check if any nested submenu is active
      if (isProductParentActive(subNavItem)) {
        return true
      }
    }

    return false
  }
  return false
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
        :active-class="checkExactActiveRouteForCategory(subNavItem.title)"
        class="subMenuLink pb-2 flex gap-3 lg:justify-content-between"
        :class="{ 'parent-class': isProductParentActive(subNavItem) }"
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
.parent-class {
  color: var(--primary-color-envitect-sam-blue) !important;
}
</style>
