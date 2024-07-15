<script setup lang="ts">
import { getProfile } from "~/app/api/getProfile";

definePageMeta({
  name: "my-details",
  title: "My Details",
});

const { data: profile } = await getProfile();

const edit = ref(false);
const passwordEdit = ref(false);

const date = ref(profile?.value?.birthday);

const oldCredential = ref("");
const newCredential = ref("");
const repeatedCredential = ref("");
</script>

<template>
  <div class="details-container">
    <PagesAccountMyDetailsFormHeader
      title="My Details"
      subtitle="Personal Information"
      @update:edit="edit = $event"
    />
    <div class="personal-info-container pb-6">
      <form @submit.prevent="">
        <div class="details grid">
          <div class="col-12">
            <InputText
              class="w-full text-input mb-3 font-heading-7 font-semibold"
              :placeholder="profile?.name"
              :disabled="!edit"
              :class="{ ' cursor-not-allowed ': !edit }"
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
                :disabled="!edit"
                :class="{ ' cursor-not-allowed ': !edit }"
              />
            </div>
          </div>
          <div class="col-12">
            <InputText
              class="w-full text-input mb-3 font-heading-7 font-semibold"
              :placeholder="profile?.title"
              :disabled="!edit"
              :class="{ ' cursor-not-allowed ': !edit }"
            />
          </div>
          <div class="col-12 lg:col-6">
            <InputText
              class="w-full text-input mb-3 font-heading-7 font-semibold"
              :placeholder="profile?.gender"
              :disabled="!edit"
              :class="{ ' cursor-not-allowed ': !edit }"
            />
          </div>
          <div class="col-12 lg:col-6">
            <Calendar
              v-model="date"
              show-icon
              class="w-full mb-3 font-heading-7 font-semibold"
              :disabled="!edit"
            />
          </div>
          <div class="col-12">
            <InputText
              class="w-full text-input mb-3 font-heading-7 font-semibold"
              :placeholder="profile?.address.house"
              :disabled="!edit"
              :class="{ ' cursor-not-allowed ': !edit }"
            />
          </div>
          <div class="col-12">
            <InputText
              class="w-full text-input mb-3 font-heading-7 font-semibold"
              :placeholder="profile?.address.district"
              :disabled="!edit"
              :class="{ ' cursor-not-allowed ': !edit }"
            />
          </div>
          <div class="col-12 lg:col-6">
            <InputText
              class="w-full text-input font-heading-7 font-semibold"
              :placeholder="profile?.address.area"
              :disabled="!edit"
              :class="{ ' cursor-not-allowed ': !edit }"
            />
          </div>
          <div class="col-12 lg:col-6">
            <InputText
              class="w-full text-input font-heading-7 font-semibold"
              :placeholder="profile?.address.postalCode"
              :disabled="!edit"
              :class="{ ' cursor-not-allowed ': !edit }"
            />
          </div>
          <div class="col-12 mt-5">
            <Button
              type="submit"
              class="submit-button font-heading-7 font-semibold"
              label="Submit"
            />
          </div>
        </div>
      </form>
    </div>
    <PagesAccountMyDetailsFormHeader
      title="Account Settings"
      subtitle="Change Password"
      supporting-text="We highly recommend you create a unique password-one that you don’’t use
       for any other websites. Noted: You can’t reuse your old password once you change it."
      @update:edit="passwordEdit = $event"
    />
    <div class="account-setting">
      <form class="" @submit.prevent="">
        <div class="flex flex-column gap-2 mb-3">
          <label class="form-label heading-7 font-medium">
            *Current Password</label
          >
          <CommonAuthInputField
            placeholder-text="Password Here"
            password
            :disabled="!passwordEdit"
            @update:text="oldCredential = $event"
          />
        </div>
        <div class="flex flex-column gap-2 mb-3">
          <label class="form-label heading-7 font-medium"> *New Password</label>
          <CommonAuthInputField
            placeholder-text="New Password Here"
            password
            :disabled="!passwordEdit"
            @update:text="newCredential = $event"
          />
        </div>
        <div class="flex flex-column gap-2 mb-5">
          <label class="form-label heading-7 font-medium">
            *Confirm New Password
          </label>
          <CommonAuthInputField
            placeholder-text="Confirm Your Password"
            password
            :disabled="!passwordEdit"
            @update:text="repeatedCredential = $event"
          />
        </div>
        <Button
          type="submit"
          class="submit-button font-heading-7 font-semibold"
          label="Submit"
        />
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "assets/styles/scss/base/mixins" as *;

.details-container {
  padding: 32px 60px;
  border-radius: 8px;
  background-color: var(--product-Front-color);

  .personal-info-container {
    .details {
      .text-input {
        padding: 12px 16px;
        color: var(--primary-color-dark-gray);
      }
    }
  }

  .account-setting {
    .form-label {
      color: var(--dark-gray-80);
    }
  }

  .submit-button {
    padding: 12px 24px;
    background-color: var(--primary-color-envitect-sam-blue);
    border-radius: 6px;
    color: var(--primary-color-white);
  }

  .cursor-not-allowed {
    cursor: not-allowed;
  }

  @include media-query(sm) {
    padding: 16px;
  }
}

.col-12,
.col-6 {
  padding: 0 0.5rem !important;
}

:deep(.p-component:disabled) {
  opacity: 1 !important;
}

:deep(.p-inputgroup-addon:first-child) {
  border-top: 1px solid #d1d5db !important;
  border-bottom: 1px solid #d1d5db !important;
  border-left: 1px solid #d1d5db !important;
}

:deep(.p-calendar-w-btn .p-datepicker-trigger) {
  background-color: var(--primary-color-white);
  color: var(--dark-gray-80);
  border: 1px solid #d1d5db;
  border-left: none;
}
</style>
