<template>
  <div>
    <DataTable :value="productsPrices" show-gridlines>
      <Column
        v-for="col in columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      />
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
import { getProductsPrice } from "~/app/api/getProductsPrice";

definePageMeta({
  title: "Products Price",
});

const { data: productsPrices } = await getProductsPrice();

const columns = ref([
  { id: 1, key: "name", field: "name", header: "name" },
  { id: 12, key: "price", field: "price", header: "price" },
  { id: 11, key: "unit", field: "unit", header: "unit" },
]);
</script>

<style lang="scss" scoped></style>
