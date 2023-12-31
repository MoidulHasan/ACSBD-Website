<template>
  <div class="w-full">
    <form class="grid" @submit="submitComment">
      <h2 class="font-heading-3 text-primary-color-navy-blue col-12">
        Leave a Comments
      </h2>
      <div class="col-12 lg:col-6">
        <InputText
          v-model="comment.name"
          aria-describedby="text-error"
          placeholder="Name"
          required
          type="text"
          class="lg:pr-2 w-full bg-color-product-front"
        />
      </div>
      <div class="col-12 lg:col-6">
        <InputText
          id="email"
          v-model="comment.email"
          aria-describedby="text-error"
          placeholder="Email"
          required
          type="text"
          class="lg:pl-2 w-full bg-color-product-front"
        />
      </div>
      <div class="col-12">
        <Textarea
          v-model="comment.message"
          aria-describedby="text-error"
          auto-resize
          placeholder="Comment"
          required
          rows="5"
          class="w-full bg-color-product-front"
        />
      </div>
      <div class="col-12">
        <Button class="button-style" label="Submit Not" type="submit" />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
interface Comment {
  name: string;
  email: string;
  message: string;
}

const comment: Ref<Comment> = ref({
  name: "",
  email: "",
  message: "",
});
const submitComment = () => {
  comment.value.name = "";
  comment.value.email = "";
  comment.value.message = "";
};
</script>

<style lang="scss" scoped>
.button-style {
  display: inline-flex;
  padding: 8px 48px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: var(--primary-color-envitect-sam-blue);
  border-radius: 6px;
}

:deep(.p-inputtext) {
  padding: 16px 24px 16px 24px;
  box-shadow: none;
}
</style>
