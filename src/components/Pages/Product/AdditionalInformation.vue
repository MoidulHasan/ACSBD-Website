<script setup lang="ts">
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<{
  product: ProductI;
}>();
</script>

<template>
  <div>
    <div class="card">
      <table class="product-detail-table w-full">
        <tbody class="product-data-table-body">
          <tr class="table-row-odd">
            <td class="w-6 py-12px px-5 table-data text-medium-2">Brands</td>
            <td class="w-6 py-12px px-5 table-data text-medium-2">
              {{ product.brand_name }}
            </td>
          </tr>
          <tr
            v-for="(attribute, index) in product.attributes"
            :key="attribute.id"
            :class="{ 'table-row-odd': (index + 1) % 2 === 0 }"
          >
            <td class="w-6 py-12px px-5 table-data text-medium-2">
              {{ attribute.name }}
            </td>
            <td class="w-6 py-12px px-5 table-data text-medium-2">
              {{ attribute.values.map((attr) => attr.name).join(", ") }}
            </td>
          </tr>
          <!--          <tr class="table-row-odd">-->
          <!--            <td class="w-6 py-12px px-5 table-data text-medium-2">Capacity</td>-->
          <!--            <td class="w-6 py-12px px-5 table-data text-medium-2">-->
          <!--              {{ product.attributes.capacity }}-->
          <!--            </td>-->
          <!--          </tr>-->
          <!--          <tr>-->
          <!--            <td class="w-6 py-12px px-5 table-data text-medium-2">AC Type</td>-->
          <!--            <td class="w-6 py-12px px-5 table-data text-medium-2">-->
          <!--              {{ product.type }}-->
          <!--            </td>-->
          <!--          </tr>-->
          <!--          <tr class="table-row-odd">-->
          <!--            <td class="w-6 py-12px px-5 table-data text-medium-2">-->
          <!--              Outdoor Unit Model-->
          <!--            </td>-->
          <!--            <td class="w-6 py-12px px-5 table-data text-medium-2">-->
          <!--              {{ product.attributes.outdoorUnitModel }}-->
          <!--            </td>-->
          <!--          </tr>-->
          <!--          <tr>-->
          <!--            <td class="w-6 py-12px px-5 table-data text-medium-2">-->
          <!--              Refrigerant-->
          <!--            </td>-->
          <!--            <td class="w-6 py-12px px-5 table-data text-medium-2">-->
          <!--              {{ product.attributes.refrigerant }}-->
          <!--            </td>-->
          <!--          </tr>-->
          <!--          <tr class="table-row-odd">-->
          <!--            <td class="w-6 py-12px px-5 table-data text-medium-2">-->
          <!--              Color Name-->
          <!--            </td>-->
          <!--            <td class="w-6 py-12px px-5 table-data text-medium-2">-->
          <!--              {{ product.attributes.color }}-->
          <!--            </td>-->
          <!--          </tr>-->
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.product-detail-table {
  border-left: 1px solid #e2e2e2;
  border-spacing: 0px !important;

  .table-row-odd {
    background: #f6f6f6;
  }

  .table-data {
    border-right: 1px solid #e2e2e2;
  }
}
</style>
