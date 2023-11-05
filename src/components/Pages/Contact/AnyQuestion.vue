<template>
  <div
    class="message-container text-dark-gray-80 bg-color-product-front border-round-md px-48px pt-48px h-full"
  >
    <div>
      <h1 class="font-heading-2 text-primary-color-navy-blue">Message Us</h1>
      <p class="text-dark-gray-80 font-regular-3 mt-16px mb-24px">
        We are ready to answer your queries and provide a solution to your
        problems. So, don’t hesitate to reach out to us by filling up the form
        below. And we will get back to you as soon as possible.
      </p>
    </div>
    <form action="" class="message-form text-base mb-32px">
      <div class="flex flex-column lg:flex-row">
        <InputText
          class="w-full mr-0 lg:mr-1 p-3 border-none"
          placeholder="Name"
          type="text"
        />
        <InputText
          class="w-full mt-16px lg:mt-0 ml-0 lg:ml-1 p-3 border-none"
          placeholder="Number"
          type="number"
        />
      </div>
      <InputText
        class="mt-16px w-full p-3 border-none"
        placeholder="Enter your email"
        type="email"
      />
      <Textarea
        class="mt-16px w-full p-3 border-none"
        cols="50"
        placeholder="Message"
        rows="5"
      />
      <button
        :style="{
          borderRadius: '4px',
        }"
        class="bg-primary-color-envitect-sam-blue text-primary-color-white border-primary-color-envitect-sam-blue font-heading-5-semi-bold border-none cursor-pointer w-full px-48px py-12px mt-16px"
        type="button"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.message-container {
  .message-form {
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
</style>
