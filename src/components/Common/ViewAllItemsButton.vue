<script lang="ts" setup>
defineProps<{
  label: string;
}>();
</script>

<template>
  <div>
    <div :class="'button'">
      <span class="label">
        {{ label }}
      </span>
      <span>
        <slot name="icon">
          <i class="pi pi-arrow-right icon" />
        </slot>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;

  background: var(--primary-color-white);
  border: 1px solid var(--primary-color-envitect-sam-blue);
  border-radius: 4px;

  cursor: pointer;

  text-decoration: none;

  .label {
    color: var(--primary-color-envitect-sam-blue);

    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
}

.button:hover {
  background: var(--primary-color-envitect-sam-blue);
  color: var(--primary-color-white);

  .label {
    color: var(--primary-color-white);
  }
}
</style>
