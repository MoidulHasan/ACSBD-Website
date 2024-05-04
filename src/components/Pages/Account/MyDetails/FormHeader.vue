<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
  supportingText?: string;
}>();

const editable = ref(false);
const emit = defineEmits<{
  (e: "update:edit", value: boolean): void;
}>();

const toggleEditOption = () => {
  editable.value = !editable.value;
  emit("update:edit", editable.value);
};
</script>

<template>
  <div>
    <h2 class="detail-text font-heading-3 mb-5">{{ title }}</h2>
    <div class="flex align-items-center justify-content-between">
      <h2 class="heading-5 personal-title font-bold">{{ subtitle }}</h2>
      <Button class="edit-button" @click="toggleEditOption">
        <img class="mr-2" src="@/assets/images/carbon_edit.svg" alt="Edit" />
        <span>Edit Here</span>
      </Button>
    </div>
    <Divider class="mt-2 mb-4" />
    <h4 v-if="supportingText" class="heading-7 personal-title font-medium mb-4">
      {{ supportingText }}
    </h4>
  </div>
</template>

<style scoped lang="scss">
.detail-text {
  color: var(--navy-blue-80);
}

.personal-title {
  color: var(--dark-gray-80);
}
.edit-button {
  display: inline-flex;
  padding: 4px 16px;
  align-items: flex-start;
  gap: 8px;
  background-color: var(--envitect-sam-blue-5);
  color: var(--navy-blue-80);
  border-radius: 2px;
  border: none !important;
}
</style>
