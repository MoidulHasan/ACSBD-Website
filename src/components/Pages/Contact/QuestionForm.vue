<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import * as yup from "yup";

const { $apiClient } = useNuxtApp();

const toast = useToast();
const store = useStore();

const validationSchema = yup.object({
  name: yup.string().required("Name is Required"),
  phone: yup.string().required("Phone Number is Required"),
  email: yup
    .string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  message: yup.string().required("Message is Required"),
});

const { handleSubmit, errors, resetForm, meta } = useForm({
  validationSchema,
  initialValues: {
    name: "",
    phone: "",
    email: "",
    message: "",
  },
});
const { value: name } = useField("name");
const { value: phone } = useField("phone");
const { value: email } = useField("email");
const { value: message } = useField("message");

const onSubmit = handleSubmit(async (values, actions) => {
  const requestBody = {
    name: values.name,
    phone: values.phone,
    email: values.email,
    message: values.message,
  };

  const makeRequest = async (url, method, body) => {
    store.loading = true;
    const response = await $apiClient(url, {
      method,
      body,
    }).catch((error) => error.data);
    store.loading = false;
    return response;
  };

  const response = await makeRequest(`/visitors-messages`, "POST", requestBody);

  if (!response.errors && response.message) {
    toast.add({
      severity: "success",
      summary: "Request Success",
      detail: response.message,
      life: 3000,
    });
    resetForm();
    return;
  }

  // let response;

  if (response.errors) {
    Object.keys(response.errors).forEach((fieldName) => {
      if (fieldName === "name") {
        actions.setFieldError("name", response.errors[fieldName]);
      }
      if (fieldName === "phone") {
        actions.setFieldError("phone", response.errors[fieldName]);
      }
      if (fieldName === "email") {
        actions.setFieldError("email", response.errors[fieldName]);
      }
      if (fieldName === "message") {
        actions.setFieldError("message", response.errors[fieldName]);
      }
      toast.add({
        severity: "error",
        summary: "Request Failed",
        detail: response.errors[fieldName].join(" , "),
        life: 3000,
      });
    });
  }

  toast.add({
    severity: "error",
    summary: "Request failed",
    detail: response.statusText,
    life: 3000,
  });
});
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
          placeholder="Enter Your Name"
          type="text"
        />
        <span class="text-red-400 text-xs">{{ errors.name }}</span>
      </div>
      <div class="col-12 lg:col-6">
        <InputText
          v-model="phone"
          class="w-full mt-3 lg:mt-0 ml-0 lg:ml-1 p-3"
          placeholder="Enter Your Phone Number"
          type="number"
        />
        <span class="text-red-400 text-xs">{{ errors.phone }}</span>
      </div>
    </div>
    <InputText
      v-model="email"
      class="mt-3 w-full p-3"
      placeholder="Enter your email"
      type="email"
    />
    <span class="text-red-400 text-xs">{{ errors.email }}</span>
    <Textarea
      v-model="message"
      class="mt-16px w-full p-3"
      cols="50"
      placeholder="Please Describe your question or message"
      rows="5"
    />
    <span class="text-red-400 text-xs">{{ errors.message }}</span>
    <button
      :disabled="store.loading || !meta.valid || !meta.dirty"
      :style="{
        borderRadius: '4px',
      }"
      class="bg-primary-color-envitect-sam-blue text-primary-color-white border-primary-color-envitect-sam-blue font-heading-5-semi-bold border-none cursor-pointer w-full px-48px py-12px mt-16px"
      type="submit"
    >
      Submit
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
</style>
