<template>
  <div>
    <h2 class="text-center py-32px bg-dark-gray-10 text-4xl font-medium opacity-80">AC Installation</h2>
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

<style lang="scss" scoped>
:deep .p-column-header-content {
  font-size: 20px;
}
:deep .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
font-weight:700;
}
</style>
