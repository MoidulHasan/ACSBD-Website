<template>
  <div>
    <DataTable :value="productsPrices" expended show-gridlines>
      <Column
        v-for="(col, index) in columns"
        :key="index.field"
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
  { key: "S.l", field: "S.l", header: "S.l" },
  { key: "name", field: "name", header: "name" },
  { key: "price", field: "price", header: "price" },
  { key: "unit", field: "unit", header: "unit" },
]);
</script>

<style lang="scss" scoped></style>
