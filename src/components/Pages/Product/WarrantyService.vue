<script setup lang="ts">
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<{
  product: ProductI;
  productDesc: ProductI;
}>();

const formattedWarrantyAndServices = computed(() => {
  return props.productDesc.warranty_and_services.replace(/\n/g, "<br>");
});
</script>

<template>
  <div class="">
    <h1
      class="text-primary-dark-gray text-regular-3 mb-1"
      v-html="formattedWarrantyAndServices"
    ></h1>
    <!--    <h1 class="text-primary-dark-gray text-regular-3 mb-1">-->
    <!--      Electrical Spare Parts: {{ product.warranty.electricalSpareParts }}-->
    <!--    </h1>-->
    <!--    <h1 class="text-primary-dark-gray text-regular-3 mb-1">-->
    <!--      Compressor: {{ product.warranty.compressor }}-->
    <!--    </h1>-->
    <!--    <h1 class="text-primary-dark-gray text-regular-3 mb-1">-->
    <!--      Free Service: {{ product.warranty.freeService }}-->
    <!--    </h1>-->
    <!--    <h1 class="text-primary-dark-gray text-regular-3 mb-1">-->
    <!--      Country of Origin: {{ product.serviceInfo.countryOfOrigin }}-->
    <!--    </h1>-->
    <!--    <h1 class="text-primary-dark-gray text-regular-3 mb-1">-->
    <!--      Country of Assemble: {{ product.serviceInfo.countryOfAssemble }}-->
    <!--    </h1>-->
  </div>
</template>

<style scoped></style>
