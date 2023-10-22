<template>
  <div class="container">
    <table class="w-full">
      <tr>
        <th>{{ name }}</th>
      </tr>
      <tr>
        <td>
                {{unit}}
        </td>
      </tr>
      <tr>
        <td>
                {{price}}
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  name: string;
  price: number;
  unit: number;
}>();
</script>
