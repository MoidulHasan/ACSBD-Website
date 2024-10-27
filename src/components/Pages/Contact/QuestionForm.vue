<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
import * as yup from 'yup'

const props = withDefaults(
  defineProps<{
    showCheckbox?: boolean
    namePlaceHolder?: string
    emailPlaceHolder?: string
    phonePlaceHolder?: string
    messagePlaceHolder?: string
    submitButtonText?: string
    submitButtonFullWidth?: boolean
    submitButtonFontClass?: string
  }>(),
  {
    showCheckbox: false,
    submitButtonText: 'Submit',
    submitButtonFullWidth: true,
  },
)

const { $apiClient } = useNuxtApp()

const toast = useToast()
const store = useStore()

const validationSchema = yup.object({
  name: yup.string().required('Name is Required'),
  phone: yup.string().required('Phone Number is Required'),
  email: yup
    .string()
    .email('Invalid Email Format')
    .required('Email is Required'),
  message: yup.string().required('Question/Message is Required'),
  ...(props.showCheckbox && { agreement: yup.boolean().oneOf([true], 'You must accept the terms') }),
})

const { handleSubmit, errors, resetForm, meta } = useForm({
  validationSchema,
  initialValues: {
    name: '',
    phone: '',
    email: '',
    message: '',
    agreement: false,
  },
})
const { value: name } = useField('name')
const { value: phone } = useField('phone')
const { value: email } = useField('email')
const { value: message } = useField('message')
const { value: agreement } = useField('agreement')

const onSubmit = handleSubmit(async (values, actions) => {
  const requestBody = {
    name: values.name,
    phone: values.phone,
    email: values.email,
    message: values.message,
  }

  const makeRequest = async (url, method, body) => {
    if (Object.keys(errors.value).length > 0) {
      const firstErrorField = document.querySelector('.text-red-400')
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      return
    }

    store.loading = true
    const response = await $apiClient(url, {
      method,
      body,
    }).catch(error => error.data)
    store.loading = false
    return response
  }

  const response = await makeRequest(`/visitors-messages`, 'POST', requestBody)

  if (!response.errors && response.message) {
    toast.add({
      severity: 'success',
      summary: 'Request Success',
      detail: response.message,
      life: 3000,
    })
    resetForm()
    return
  }

  // let response;

  if (response.errors) {
    Object.keys(response.errors).forEach((fieldName) => {
      if (fieldName === 'name') {
        actions.setFieldError('name', response.errors[fieldName])
      }
      if (fieldName === 'phone') {
        actions.setFieldError('phone', response.errors[fieldName])
      }
      if (fieldName === 'email') {
        actions.setFieldError('email', response.errors[fieldName])
      }
      if (fieldName === 'message') {
        actions.setFieldError('message', response.errors[fieldName])
      }
      if (fieldName === 'agreement') {
        actions.setFieldError('agreement', response.errors[fieldName])
      }
      toast.add({
        severity: 'error',
        summary: 'Request Failed',
        detail: response.errors[fieldName].join(' , '),
        life: 3000,
      })
    })
  }

  toast.add({
    severity: 'error',
    summary: 'Request failed',
    detail: response.statusText,
    life: 3000,
  })
})
</script>

<template>
  <form
    action=""
    class="message-form text-base mb-32px"
    @submit.prevent="onSubmit"
  >
    <div class="formgrid grid">
      <div class="col-12 lg:col-6">
        <InputText
          v-model="name"
          class="w-full mr-0 lg:mr-1 p-3"
          :placeholder="namePlaceHolder ?? 'Your Name'"
          type="text"
          required
        />
        <span v-if="errors.name" class="text-red-400 text-xs">{{ errors.name }}</span>
      </div>
      <div class="col-12 lg:col-6">
        <InputText
          v-model="phone"
          class="w-full mt-3 lg:mt-0 ml-0 lg:ml-1 p-3"
          :placeholder="phonePlaceHolder ?? 'Your Phone Number'"
          type="number"
          required
        />
        <span v-if="errors.phone" class="text-red-400 text-xs">{{ errors.phone }}</span>
      </div>
    </div>
    <InputText
      v-model="email"
      class="mt-3 w-full p-3"
      :placeholder="emailPlaceHolder ?? 'Your email'"
      type="email"
      required
    />
    <span v-if="errors.email" class="text-red-400 text-xs">{{ errors.email }}</span>
    <Textarea
      v-model="message"
      class="mt-16px w-full p-3"
      cols="50"
      :placeholder="messagePlaceHolder ?? 'Please Describe your question or message'"
      rows="5"
      required
    />
    <span v-if="errors.message" class="text-red-400 text-xs">{{ errors.message }}</span>
    <div v-if="props.showCheckbox" class=" my-3">
      <div class="flex align-items-center">
        <Checkbox
          v-model="agreement"
          :binary="true"
          class="check-box"
          input-id="agreement"
          name="agreement"
          required
          type="checkbox"
        />
        <label class="text-semi-bold-1 text-dark-gray-80 ml-3" for="agreement">
          I Accept the Terms of Service and Privacy Policy
        </label>
      </div>
      <span v-if="props.showCheckbox && errors.agreement" class="text-red-400 text-xs mt-3">{{ errors.agreement }}</span>
    </div>
    <button
      :disabled="store.loading || !meta.valid || !meta.dirty"
      :style="{
        borderRadius: '4px',
      }"
      :class="[submitButtonFullWidth ? 'w-full' : '', submitButtonFontClass ? submitButtonFontClass : 'font-heading-5-semi-bold']"
      class="bg-primary-color-envitect-sam-blue text-primary-color-white border-primary-color-envitect-sam-blue  border-none cursor-pointer  px-48px py-12px mt-16px form-submit-button"
      type="submit"
    >
      {{ submitButtonText }}
    </button>
  </form>
</template>

<style scoped lang="scss">
.message-form {
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

.checkbox-label {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: var(--primary-color-dark-gray);
}

:deep(.p-checkbox .p-checkbox-box) {
  height: 24px;
  width: 24px;
  border-radius: 5px !important;
  transition: 0.5s ease;
  border: 1px solid var(--navy-blue-80) !important;
}

.form-submit-button {
  &:disabled {
    background: var(--envitect-sam-blue-30);
    cursor: not-allowed !important;
  }
}
</style>
