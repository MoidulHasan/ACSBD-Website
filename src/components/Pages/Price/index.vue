<template>
  <div>
    <DataTable :value="productsPrices" expended show-gridlines>
      <Column
        v-for="col in columns"
        :field="col.field"
        :header="col.header"
      />
    </DataTable>
  </div>
</template>

<script lang="ts" setup>
// import { getProductsPrice } from "~/app/api/getProductsPrice";

definePageMeta({
  title: "Products Price",
});

// const { data: productsPrices } = await getProductsPrice();

const columns = ref([
  {  field: "S.l", header: "S.l" },
  {  field: "name", header: "name" },
  {  field: "price", header: "price" },
  {  field: "unit", header: "unit" },
]);
</script>

<style lang="scss" scoped></style>
