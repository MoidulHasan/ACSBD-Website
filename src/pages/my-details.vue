<script setup lang="ts">
import { getProfile } from "~/app/api/getProfile";

definePageMeta({
  layout: "dashboard",
  title: "My Details",
});
const { data: profile } = await getProfile();

const edit = ref(false);
const toggleEditOption = () => {
  edit.value = !edit.value;
};

const date = ref(profile?.value.birthday);
</script>

<template>
  <div class="details-container">
    <h2 class="detail-text font-heading-3 mb-5">My Details</h2>
    <div class="personal-info-container">
      <form @submit.prevent="">
        <div class="flex align-items-center justify-content-between">
          <h2 class="heading-5 personal-title">Personal Information</h2>
          <Button class="edit-button" @click="toggleEditOption">
            <img
              class="mr-2"
              src="~/assets/images/carbon_edit.svg"
              alt="Edit"
            />
            <span>Edit Here</span>
          </Button>
        </div>
        <Divider class="mt-2 mb-4" />
        <div class="details grid">
          <div class="col-12">
            <InputText
              class="w-full text-input mb-3 font-heading-7 font-semibold"
              :placeholder="profile?.name"
              :disabled="edit"
            />
          </div>
          <div class="col-12">
            <div class="p-inputgroup w-full mb-3">
              <span class="p-inputgroup-addon">
                <i class="pi pi-phone"></i>
              </span>
              <InputText
                type="number"
                class="text-input font-heading-7 font-semibold"
                :placeholder="profile?.number"
                :disabled="edit"
              />
            </div>
          </div>
          <div class="col-12">
            <InputText
              class="w-full text-input mb-3 font-heading-7 font-semibold"
              :placeholder="profile?.title"
              :disabled="edit"
            />
          </div>
          <div class="col-12 lg:col-6">
            <InputText
              class="w-full text-input mb-3 font-heading-7 font-semibold"
              :placeholder="profile?.gender"
              :disabled="edit"
            />
          </div>
          <div class="col-12 lg:col-6">
            <Calendar
              v-model="date"
              show-icon
              class="w-full mb-3 font-heading-7 font-semibold"
              :disabled="edit"
            />
          </div>
          <div class="col-12">
            <InputText
              class="w-full text-input mb-3 font-heading-7 font-semibold"
              :placeholder="profile?.address.house"
              :disabled="edit"
            />
          </div>
          <div class="col-12">
            <InputText
              class="w-full text-input mb-3 font-heading-7 font-semibold"
              :placeholder="profile?.address.district"
              :disabled="edit"
            />
          </div>
          <div class="col-12 lg:col-6">
            <InputText
              class="w-full text-input font-heading-7 font-semibold"
              :placeholder="profile?.address.area"
              :disabled="edit"
            />
          </div>
          <div class="col-12 lg:col-6">
            <InputText
              class="w-full text-input font-heading-7 font-semibold"
              :placeholder="profile?.address.postalCode"
              :disabled="edit"
            />
          </div>
          <div class="col-12">
            <Button
              type="submit"
              class="submit-button font-heading-7 font-semibold"
              label="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.details-container {
  padding: 32px 60px;
  border-radius: 8px;
  background-color: var(--product-Front-color);

  .detail-text {
    color: var(--navy-blue-80);
  }
  .personal-info-container {
    .personal-title {
      color: var(--dark-gray-80);
    }
    .edit-button {
      display: inline-flex;
      padding: 4px 16px;
      align-items: flex-start;
      gap: 8px;
      background-color: var(--envitect-sam-blue-5);
      color: var(--navy-blue-80);
      border-radius: 2px;
      border: none !important;
    }
    .details {
      .text-input {
        padding: 12px 16px;
        color: var(--primary-color-dark-gray);
      }
    }
    .submit-button {
      margin-top: 40px;
      padding: 12px 24px;
      background-color: var(--primary-color-envitect-sam-blue);
      border-radius: 6px;
      color: var(--primary-color-white);
    }
  }
}

.col-12,
.col-6 {
  padding: 0 0.5rem !important;
}
//:deep(.p-component:disabled) {
//  opacity: 1 !important;
//}
:deep(.p-inputgroup-addon:first-child) {
  border-top: 1px solid #d1d5db !important;
  border-bottom: 1px solid #d1d5db !important;
  border-left: 1px solid #d1d5db !important;
}
//:deep(.p-calendar-w-btn .p-datepicker-trigger) {
//  background-color: var(--primary-color-white);
//  color: var(--dark-gray-80);
//  border: 1px solid #d1d5db;
//}
</style>
