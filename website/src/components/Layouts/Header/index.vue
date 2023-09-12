<template>
  <div>
    <div class="grid container align-items-center justify-between pt-4 pb-10px">
      <div
        class="col-12 lg:col-3 flex justify-content-center lg:justify-content-start"
      >
        <img src="@/assets/images/header/logo_colored.svg" alt="ACBD" />
      </div>
      <div class="col-12 md:col-12 lg:col-5">
        <div class="p-inputgroup flex-1">
          <InputText placeholder="Search Product" />
          <Button icon="pi pi-search" class="search-button" />
        </div>
      </div>
      <div
        class="col-12 lg:col-4 md:align-items-center md:justify-content-center lg:justify-content-end float-right hidden md:flex"
      >
        <img
          src="@/assets/images/header/service.svg"
          alt="service"
          class="mr-3"
        />
        <div>
          <p class="flex align-items-center">
            <img
              class="inline-block mr-1 contact-img"
              src="@/assets/images/header/phoneIcon.svg"
              alt="phone"
            />
            <span class="contact-info">09613 755755</span>
          </p>
          <p class="flex align-items-center">
            <img
              class="inline-block mr-1 contact-img"
              src="@/assets/images/header/mail.svg"
              alt="mail"
            />
            <span class="contact-info">info@acsevice.com</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.search-button,
.search-button:hover {
  background-color: var(--primary-color-envitect-sam-blue);
  padding: 14px 29px;
}

.contact-info {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: var(--primary-color-dark-gray);
}
</style>
