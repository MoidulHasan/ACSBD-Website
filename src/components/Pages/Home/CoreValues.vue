<script lang="ts" setup>
</script>

<template>
  <div class="core-value-section-container container grid">
    <CommonSectionHeader
      class="block md:hidden mb-3 md:mb-5"
      header="Our Core Value"
      sub-header="We always try to happy our customers with our best services. AC
        Installation, Servicing, Repair, Maintenance, AC Sales & AC Rent Service
        All over Bangladesh is now available at AC SERVICE. Our 45 expert
        technicians always try to find out your Air Conditioner problem in a
        short time and solved it in a short time."
    />

    <div class="core-value-image-container col-12 md:col-6">
      <img alt="" src="~/assets/images/ac-servicing.png">
    </div>

    <div class="col-12 md:col-6">
      <div class="hidden md:block ">
        <h3 class="font-heading-2 text-primary-color-navy-blue">
          Our Core Values
        </h3>
        <p class="text-regular-3">
          We always try to happy our customers with our best services. AC
          Installation, Servicing, Repair, Maintenance, AC Sales & AC Rent
          Service All over Bangladesh is now available at AC SERVICE. Our 45
          expert technicians always try to find out your Air Conditioner problem
          in a short time and solved it in a short time.
        </p>
      </div>

      <div class="core-value-item flex align-items-start">
        <div class="core-value-item-image">
          <img alt="great-services" src="~/assets/images/great-services.png">
        </div>

        <div class="core-value-item-header">
          <h2 class="font-heading-4 text-primary-color-navy-blue">
            Great Services
          </h2>
          <p class="text-regular-3 text-primary-color-dark-gray">
            We provide our customers great services with our 45 expert
            technicians team.
          </p>
        </div>
      </div>

      <div class="core-value-item flex align-items-start">
        <div class="core-value-item-image">
          <img alt="great-services" src="~/assets/images/highest-standards.png">
        </div>

        <div class="core-value-item-header">
          <h2 class="font-heading-4 text-primary-color-navy-blue">
            Highest standards
          </h2>
          <p class="text-regular-3 text-primary-color-dark-gray">
            Our expert technicians team always follows the highest standard &
            rules for your service.
          </p>
        </div>
      </div>

      <div class="core-value-item flex align-items-start">
        <div class="core-value-item-image">
          <img alt="great-services" src="~/assets/images/professional-team.svg">
        </div>
        <div class="core-value-item-header">
          <h2 class="font-heading-4 text-primary-color-navy-blue">
            Professional Team
          </h2>
          <p class="text-regular-3 text-primary-color-dark-gray">
            We have 20 Professional Teams for services your any kind of Air
            Conditioner solution.
          </p>
        </div>
      </div>

      <div class="core-value-item flex align-items-start">
        <div class="core-value-item-image">
          <img alt="great-services" src="~/assets/images/creative-solutions.svg">
        </div>
        <div class="core-value-item-header">
          <h2 class="font-heading-4 text-primary-color-navy-blue">
            Creative Solutions
          </h2>
          <p class="text-regular-3 text-primary-color-dark-gray">
            After visiting your home or office. Our Creative team provides you
            best solution for you.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;

.core-value-section-container {
  .core-value-image-container {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;

      @include media-query(sm) {
        max-height: 320px;
      }

      @include media-query(md) {
        max-height: 320px;
      }
    }
  }

  .core-value-item {
      margin-top: 28px;

      @include media-query(sm) {
        margin-top: 16px;
      }

      @include media-query(md) {
        margin-top: 24px;
      }

      .core-value-item-image img {
        width: 50px;
        height: 50px;
        border-radius: 2px;

        @include media-query(sm) {
          width: 36px;
          height: 36px;
        }

        @include media-query(md) {
          width: 40px;
          height: 40px;
        }
      }

      .core-value-item-header {
        margin-left: 24px;

        @include media-query(sm) {
          margin-left: 16px;
        }

        @include media-query(md) {
          margin-left: 20px;
        }
      }
  }
}
</style>
