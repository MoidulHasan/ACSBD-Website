<template>
  <div>
    <DataTable :value="productsPrices" expended show-gridlines >
      <Column header="S.l" headerStyle="width:3rem">
        <template #body="slotProps">
        0{{ slotProps.index +1 }}
        </template>
      </Column>
      <Column
        v-for="(col,index) in columns"
        :index="index.field"
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

console.log(productsPrices);

const columns = ref([
  {  field: "Descriptions", header: "Descriptions" },
  {  field: "Unit", header: "Unit" },
  {  field: "Price (tk)", header: "Price (tk)" },
]);

console.log(columns)
</script>

<style lang="scss" scoped></style>
