<template>
 <div>
   <div
       class="all-works-tab hidden md:flex align-items-center justify-content-center my-48px"
   >
     <button
         class="w-235px h-50px button-tab text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer border-round-left"

     >
       Split AC
     </button>

     <button
         class="w-235px h-50px text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer"
     >
       VRF AC
     </button>
     <button
         class="w-235px h-50px text-dark-gray-60 px-80px py-12px font-heading-5-semi-bold border-none cursor-pointer border-round-right"
     >
       Chiller AC
     </button>
   </div>

   <SectionHeader class="my-40px text-primary-color-white"
                  header="AC Installation & Dismantling"
                  sub-header="AC Service BD you can hire expert AC technician for AC Installation service in Dhaka city and Outsite of Dhaka City. Our Expert AC technician will give you the best AC Installation service and our AC Installation Pricing is lowest in Dhaka city. You can compare AC Installation Pricing from other."/>

   <div>
     <PagesPriceAcInstallationSplitAir/>
   </div>

 </div>
</template>

<script lang="ts" setup>
import SectionHeader from "~/components/Common/SectionHeader.vue";
</script>
<style lang="scss" scoped></style>

