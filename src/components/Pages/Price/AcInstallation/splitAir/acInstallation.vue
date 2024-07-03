<template>
  <div>
    <h2 class="text-center text-2xl text-primary-color-dark-gray py-12px bg-dark-gray-10 font-medium opacity-80">AC Installation</h2>
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

const columns = ref([
  {  field: "Descriptions", header: "Descriptions" },
  {  field: "Unit", header: "Unit" },
  {  field: "Price (tk)", header: "Price (tk)" },
]);
</script>

<style lang="scss" scoped>
:deep .p-column-header-content {
  color:var(--primary-color-dark-gray);
  background:var(--color-product-front);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
}
:deep .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr {

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
:deep .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
  font-weight:600;
}
</style>
