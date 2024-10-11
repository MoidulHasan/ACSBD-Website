<script setup lang="ts">
defineProps<{
  placeholder: string
}>()
const emit = defineEmits<{
  (e: 'search', value: string): void
}>()
const searchText = ref('')
const regex = /^(?!.*[a-z0-9])\S*$/i
function submitText() {
  emit('search', searchText.value)
  searchText.value = ''
}
</script>

<template>
  <div class="p-inputgroup flex-1 flex-wrap w-full">
    <InputText v-model="searchText" :placeholder="placeholder" />
    <Button
      class="search-button"
      icon="pi pi-search"
      :disabled="regex.test(searchText.trim())"
      @click="submitText"
    />
  </div>
</template>

<style scoped lang="scss">
.search-button,
.search-button:hover {
  background-color: var(--primary-color-envitect-sam-blue);
  padding: 12px 29px;
}

:deep(.p-inputgroup .p-inputtext) {
  max-height: 40px;
}

:deep(.p-inputgroup .p-button) {
  max-height: 40px;
}
</style>
