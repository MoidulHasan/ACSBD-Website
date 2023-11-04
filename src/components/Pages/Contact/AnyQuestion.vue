<template>
  <div
    class="message-container text-dark-gray-80 bg-color-product-front border-round-md px-48px pt-48px pb-32px"
  >
    <div>
      <h1 class="font-heading-2 text-primary-color-navy-blue">Message Us</h1>
      <p class="text-dark-gray-80 font-regular-3 mt-16px mb-24px">
        We are ready to answer your queries and provide a solution to your
        problems. So, don’t hesitate to reach out to us by filling up the form
        below. And we will get back to you as soon as possible.
      </p>
    </div>
    <form class="message-form text-base" action="">
      <div class="flex flex-column lg:flex-row">
        <InputText
          class="w-full mr-0 lg:mr-1 p-3 border-none"
          type="text"
          placeholder="Name"
        />
        <InputText
          class="w-full mt-16px lg:mt-0 ml-0 lg:ml-1 p-3 border-none"
          type="number"
          placeholder="Number"
        />
      </div>
      <InputText
        class="mt-16px w-full p-3 border-none"
        type="email"
        placeholder="Enter your email"
      />
      <Textarea
        class="mt-16px w-full p-3 border-none"
        rows="5"
        cols="50"
        placeholder="Message"
      />
      <button
        type="button"
        class="bg-primary-color-envitect-sam-blue text-primary-color-white border-primary-color-envitect-sam-blue font-heading-5-semi-bold border-none cursor-pointer w-full px-48px py-12px mt-16px"
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
