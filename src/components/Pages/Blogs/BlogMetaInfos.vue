<script setup lang="ts">
defineProps<{
  time: string;
  views: number;
  comments: number;
}>();
</script>

<template>
  <div class="meta-infos flex gap-3 flex-wrap">
    <p
      class="meta-info text-regular-4 bg-envitect-sam-blue-5 text-dark-gray-80"
    >
      <i class="pi pi-calendar-times icon arrow-icon mr-3" />
      <span>{{ time }}</span>
    </p>
    <p
      class="meta-info text-regular-4 bg-envitect-sam-blue-5 text-dark-gray-80"
    >
      <i class="pi pi-eye icon arrow-icon mr-3" />
      <span>{{ views ?? 200 }} views</span>
    </p>
    <p
      class="meta-info text-regular-4 bg-envitect-sam-blue-5 text-dark-gray-80"
    >
      <i class="pi pi-comments icon arrow-icon mr-3" />
      <span>{{ comments ?? 10 }}+ Comments</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
.meta-info {
  padding: 9px 22px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .arrow-icon {
    font-size: 1.375rem;
  }
}
</style>
