<template>
  <div>
    <div>
      <h1>Have any Question</h1>
      <p>
        We are ready to answer your queries and provide a solution to your
        problems. So, don’t hesitate to reach out to us by filling up the form
        below. And we will get back to you as soon as possible.
      </p>
    </div>
    <form action="">
      <InputText type="text" placeholder="Name" />
      <InputText type="number" placeholder="Number" />
      <InputText type="email" placeholder="Enter your email" />
      <Textarea rows="5" cols="50" placeholder="Message" />
      <button
        type="button"
        class="bg-primary border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
