<template>
  <div class="message-container border-round-md">
    <div class="message-title">
      <h1>Message Us</h1>
      <p class="text-xs md:text-base">
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
          class="w-full mt-2 lg:mt-0 ml-0 lg:ml-1 p-3 border-none"
          type="number"
          placeholder="Number"
        />
      </div>
      <InputText
        class="mt-2 w-full p-3 border-none"
        type="email"
        placeholder="Enter your email"
      />
      <Textarea
        class="mt-2 w-full p-3 border-none"
        rows="5"
        cols="50"
        placeholder="Message"
      />
      <button
        type="button"
        class="message-submit text-base font-semibold border-1 my-2 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.message-container {
  color: var(--dark-gray-80);
  background-color: var(--product-Front-color);
  padding: 48px 48px 32px;
  @media only screen and (max-width: 1023px) {
    padding: 20px 16px 16px;
  }
  .message-title {
    h1 {
      margin: 0;
      color: var(--primary-color-navy-blue);
      font-size: 36px;
      padding-bottom: 16px;
      @media only screen and (max-width: 1023px) {
        font-size: 20px;
        padding-bottom: 12px;
      }
    }
    p {
      padding-bottom: 24px;
      @media only screen and (max-width: 1023px) {
        padding-bottom: 12px;
      }
      @media only screen and (max-width: 768px) {
        padding-bottom: 20px;
      }
    }
  }
  .message-form {
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .message-submit {
      width: 100%;
      background-color: var(--primary-color-envitect-sam-blue);
      border: var(--primary-color-envitect-sam-blue);
      color: var(--primary-color-white);
      padding: 12px 48px;
    }
  }
}
</style>
