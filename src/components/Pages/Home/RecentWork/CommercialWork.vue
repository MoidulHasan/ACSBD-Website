<script lang="ts" setup>
import type { Work } from "~/contracts/api-contracts/recentWorkInterfaces";

defineProps<{
  commercialWorks: Work[];
}>();
</script>

<template>
  <div>
    <div class="grid">
      <div
        v-for="(work, index) in commercialWorks"
        :key="work.slug"
        :class="[
          'p-1 h-[7.125rem] md:h-[24.4375rem] work-image-container',
          [0, 1].includes(index)
            ? 'col-12 md:col-6'
            : commercialWorks.length >= 2 &&
                commercialWorks.length - 1 === index
              ? 'hidden md:block col-4'
              : 'col-6 md:col-4',
        ]"
      >
        <img
          :title="work.title"
          class="w-full h-full border-round-md"
          :src="work.image"
          :alt="work.title"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-image-container {
  max-height: 360px;
}
</style>
