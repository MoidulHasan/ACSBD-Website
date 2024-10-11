<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()

const { data: services } = await useFetch(
  `${runtimeConfig.public.appUrl}/api/data/services`,
  {
    transform: (services) => {
      return services.map(service => ({ ...service, imageUrl: runtimeConfig.public.appUrl + service.imageUrl }))
    },
  },
)
</script>

<template>
  <div>
    <CommonSliderSection
      :items="services"
      :number-of-scroll="1"
      :visible-item="4"
      slide-component="ServiceCard"
    >
      <template #header>
        <CommonSectionHeader
          class="mb-3 md:mb-5"
          header="Our Services"
          sub-header="We have a large team of AC Service A Expert Technicians. Our services
                are AC installation, AC servicing, AC repair, AC maintenance, AC
                rental, and selling AC of any brand. and selling AC spare parts. AC
                SERVICE is the best AC service company in Bangladesh. So you can
                contact us at any time. Our expert technicians are available 7 days a
                week to solve your AC problem."
        />
      </template>
    </commonslidersection>
  </div>
</template>
