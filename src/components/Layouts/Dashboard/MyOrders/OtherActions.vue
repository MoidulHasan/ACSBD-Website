<script setup lang="ts">
import { onClickOutside } from "#imports";

const props = defineProps<{
  showActions?: boolean;
  orderIndex?: number;
  clickedIndex?: number;
}>();
const emits = defineEmits<{
  (e: "update:state", value: boolean): void;
}>();
const actionDiv = ref(null);
const showModal = ref(false);
const categories = ref([
  { name: "Changed my mind", key: "mind" },
  { name: "Wrong Shipping Address", key: "wrong address" },
  { name: "Duplicate Order", key: "duplicate order" },
  { name: "Others", key: "others" },
]);
const selectedCategories = ref([]);

onClickOutside(actionDiv, () => {
  emits("update:state", false);
});

watch(
  () => props.orderIndex,
  () => {
    console.log(orderIndex, clickedIndex);
  },
);
</script>

<template>
  <div
    ref="actionDiv"
    class="other-actions"
    :class="{ block: showActions && orderIndex === clickedIndex }"
  >
    <ul class="other-actions-list">
      <li class="action font-heading-7 mb-2">Reorder</li>
      <li class="action font-heading-7 mb-2">View Order</li>
      <li class="action font-heading-7" @click="showModal = true">
        Cancel Order
      </li>
    </ul>
    <ClientOnly>
      <Dialog
        v-model:visible="showModal"
        class="cancel-modal"
        close-on-escape
        modal
        :closable="true"
      >
        <template #container>
          <div class="modal-items">
            <div class="header pt-4 md:pt-5 px-4 md:px-5 pb-3">
              <div class="flex flex-wrap justify-content-between relative">
                <div>
                  <h3
                    class="font-heading-4-semi-bold mb-2 text-primary-color-navy-blue"
                  >
                    Cancel Your Orders
                  </h3>
                  <p class="text-regular-3 text-dark-gray-80">
                    Your request will be solved in 48 hours
                  </p>
                </div>
                <img
                  src="../../../../assets/images/Close.svg"
                  alt="close"
                  class="cursor-pointer modal-close-icon"
                  @click="showModal = false"
                />
              </div>
            </div>
            <div class="caution-message flex gap-3 px-4 md:px-5 py-17px mb-3">
              <img
                src="../../../../assets/images/bi_info-circle.svg"
                alt="Info"
                class="caution-image"
              />
              <p
                class="caution-text text-regular-4 text-color-info text-justify"
              >
                Thank you for your order! Your order is being processed and will
                be completed within 3-6 hours. You will receive an email
                confirmation when your order is completed.
              </p>
            </div>
            <div class="cancel-options">
              <h2
                class="font-heading-7 text-primary-color-dark-gray font-semibold pl-4 md:pl-5 pb-3"
              >
                Reasons for Cancellation (Optional)
              </h2>
              <div class="flex flex-column gap-3 pl-4 md:pl-5 pb-3">
                <div
                  v-for="category of categories"
                  :key="category.key"
                  class="flex align-items-center"
                >
                  <Checkbox
                    v-model="selectedCategories"
                    :input-id="category.key"
                    name="category"
                    :value="category.name"
                    class="mr-2"
                  />
                  <label
                    :for="category.key"
                    class="font-heading-7 text-primary-color-dark-gray"
                    >{{ category.name }}</label
                  >
                </div>
              </div>
              <div class="mb-20px md:mb-48px additional-text">
                <h3
                  class="font-heading-7 text-primary-color-dark-gray font-semibold pl-4 md:pl-5 pb-2 additional-comment"
                >
                  Additional Comments:
                </h3>
                <Textarea
                  class="mx-4 md:mx-5 p-3 w-10"
                  placeholder="Writing Comments"
                  auto-resize
                  rows="3"
                />
              </div>
            </div>
            <div
              class="flex align-items-center justify-content-center md:justify-content-end gap-3 md:mr-5 mb-5"
            >
              <Button
                class="modal-button cancel font-heading-7 font-semibold bg-envitect-sam-blue-5 text-primary-color-envitect-sam-blue border-primary-color-envitect-sam-blue"
                @click="showModal = false"
              >
                Never Mind
              </Button>
              <Button
                class="modal-button cancel-order font-heading-7 font-semibold bg-Crimson-Red-Color text-primary-color-white"
              >
                Cancel Order
              </Button>
            </div>
          </div>
        </template>
      </Dialog>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use "assets/styles/scss/base/mixins" as *;
.other-actions {
  display: none;
  animation: fadeInOut 0.7s ease;
  position: absolute;
  right: 0;
  background-color: var(--primary-color-white);
  box-shadow: 0px -2px 12px rgba(202, 202, 202, 0.25);
  border: 1px solid #f5f5f5;
  padding: 16px;
  border-radius: 4px;
  z-index: 1;
  @include media-query(lg) {
    top: 40px;
    left: -60px;
    min-width: 145px;
  }
  @include media-query(md) {
    top: 40px;
    left: -60px;
    min-width: 145px;
  }
  @include media-query(sm) {
    top: 40px;
    left: -100px;
    min-width: 145px;
  }
}

.action {
  color: var(--dark-gray-80);
}

.other-actions:before {
  content: "";
  position: absolute;
  left: 0;
  top: -10px;
  right: 0;
  margin: 0 auto;
  width: 0;
  height: 0;
  border-bottom: 10px solid var(--primary-color-white);
  border-left: 18px solid transparent;
  border-right: 18px solid transparent;

  @include media-query(sm) {
    margin: 0 90px;
  }
}
.cancel-modal {
  .modal-items {
    background-color: #fff;
    border-radius: 6px;
  }
  .modal-close-icon {
    position: absolute;
    right: -16px;
    top: -16px;

    @include media-query(sm) {
      right: -10px;
      top: -10px;
      max-width: 36px;
      max-height: 36px;
    }
  }
  .caution-message {
    background-color: rgba(75, 160, 181, 0.1);
    .caution-image {
      width: 32px;
      height: 32px;

      @include media-query(sm) {
        width: 24px;
        height: 24px;
      }
    }
    .caution-text {
      max-width: 488px;
    }
  }
  .additional-text {
    margin-bottom: 48px;
    @include media-query(sm) {
      margin-bottom: 20px;
    }
    @include media-query(md) {
      margin-bottom: 24px;
    }
  }
  .modal-button {
    display: inline-flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 6px;
    @include media-query(sm) {
      padding: 12px 24px;
      border-radius: 6px;
    }
  }
  .cancel {
    border-width: 1px;
    border-style: solid;
  }
  .cancel-order {
    border: none;
  }
}
</style>
