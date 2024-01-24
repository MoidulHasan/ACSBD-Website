<script setup lang="ts">
import type { ProductI } from "~/contracts/api-contracts/ProductsInterfaces";

const props = defineProps<{
  product: ProductI;
}>();
</script>

<template>
  <div>
    <h1 class="text-regular-3 text-primary-dark-gray mb-3">
      Midea 2 Ton Wall Type AC MSA-24CR (Aurora Series) is available at
      PonnoMela.com Get the original Midea air conditioners at the most
      affordable price at PonnoMela.com and enjoy the famous quality with the
      promise of best customer service in Bangladesh.
    </h1>
    <div class="w-full mb-3">
      <img
        class="description-image w-full"
        :src="product.descriptionImage[0]"
        :alt="product.name"
      />
    </div>
    <h1 class="text-regular-3 text-primary-dark-gray mb-3">
      Midea 2 Ton Split AC 24000 BTU Specs: <br />
      Digital display, remote control with LCD screen, easy to operate.
      Thermistor speed control technology, multi-wind speed can be controlled,
      ensuring the quietness. International name brand compressor, strong,
      durable, energy-saving. High-quality internal thread copper pipe plus
      hydrophilic aluminum foil efficient multi-fold evaporator, with
      large-diameter, straight twisted, low-noise cross flow fan. Intelligent
      defrosting, a broad-spectrum antibiotic, anti-fungal operation, fresh air
      cold catalyst.
    </h1>
    <div class="w-full mb-3">
      <img
        class="description-image w-full"
        :src="product.descriptionImage[1]"
        :alt="product.name"
      />
    </div>
    <h1 class="text-regular-3 text-primary-dark-gray mb-3">
      Product Type: Split Air Conditioner <br />
      Model: 24000 BTU<br />
      Capacity: 2 Ton<br />
      Power Supply: 1Ph,220~230V, 50Hz<br />
      Control: Remote<br />
      Function: Cooling<br />
      Capacity (BTU/h): 24000<br />
      Free 10 Feet Copper Pipe<br /><br />
      Shop now from our website and enjoy free home delivery across Bangladesh.
      Enjoy the most affordable price with the industry leading customer
      service. Buy now!
    </h1>
  </div>
</template>

<style scoped lang="scss">
.description-image {
  width: 100%;
}
</style>
