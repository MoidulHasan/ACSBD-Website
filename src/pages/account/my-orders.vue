<script setup lang="ts">
import { getOrders } from "~/app/api/getOrders";

definePageMeta({
  layout: "dashboard",
  title: "My Orders",
});

const { data: orderData } = await getOrders();

const orders = ref(orderData);
const formatDate = (inputDate: string) => {
  const inputDateObj = new Date(inputDate);
  const year = inputDateObj.getUTCFullYear();
  const month = inputDateObj.getUTCMonth();
  const day = inputDateObj.getUTCDate();

  // Convert month number to month name
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[month];

  // Convert day to include 'st', 'nd', 'rd', or 'th'
  let daySuffix: string;
  if (day >= 11 && day <= 13) {
    daySuffix = "th";
  } else {
    switch (day % 10) {
      case 1:
        daySuffix = "st";
        break;
      case 2:
        daySuffix = "nd";
        break;
      case 3:
        daySuffix = "rd";
        break;
      default:
        daySuffix = "th";
    }
  }
  return `${day}${daySuffix} ${monthName}, ${year}`;
};

const showActions = ref(false);
const showCancelOrderModal = ref(false);
const showActionByClick = () => {
  showActions.value = !showActions.value;
};

const categories = ref([
  { name: "Changed my mind", key: "mind" },
  { name: "Wrong Shipping Address", key: "wrong address" },
  { name: "Duplicate Order", key: "duplicate order" },
  { name: "Others", key: "others" },
]);
const selectedCategories = ref([]);
</script>

<template>
  <div class="order-table-container">
    <h2 class="container-title font-heading-3 mb-3 md:mb-5">My Orders</h2>
    <div class="order-table hidden lg:block">
      <DataTable :value="orders">
        <Column header="Products">
          <template #body="slotProps">
            <PagesAccountMyOrdersProductContainer :product="slotProps.data" />
          </template>
        </Column>
        <Column header="Order No#">
          <template #body="slotProps">
            <h2 class="order_number">{{ slotProps.data.order_no }}</h2>
          </template>
        </Column>
        <Column header="Date:">
          <template #body="slotProps">
            <h2 class="font-heading-7 date-text">
              {{ formatDate(slotProps.data.timestamp) }}
            </h2>
          </template>
        </Column>

        <Column field="Status" header="Status">
          <template #body="slotProps">
            <h2
              class="status"
              :class="[
                slotProps.data.status.trim().toLowerCase() === 'cancelled'
                  ? 'cancelled'
                  : slotProps.data.status.trim().toLowerCase() === 'completed'
                  ? 'completed'
                  : '',
              ]"
            >
              {{ slotProps.data.status }}
            </h2>
          </template>
        </Column>
        <Column header="Action" class="cursor-pointer">
          <template #body="slotProps">
            <p class="" @click="showActionByClick">
              <i
                class="pi pi-ellipsis-h action-button"
                style="font-size: 2rem"
              ></i>
            </p>
            <div class="other-actions">
              <ul class="other-actions-list">
                <li class="action font-heading-7 mb-2">Reorder</li>
                <li class="action font-heading-7 mb-2">View Order</li>
                <li
                  class="action font-heading-7"
                  @click="showCancelOrderModal = true"
                >
                  Cancel Order
                </li>
              </ul>
              <ClientOnly>
                <Dialog
                  v-model:visible="showCancelOrderModal"
                  class="cancel-modal"
                  close-on-escape
                  modal
                  :closable="true"
                >
                  <template #container>
                    <div class="modal-items">
                      <div class="header pt-5 pl-5 pr-5 pb-3">
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
                          <img src="~/assets/images/Close.svg" alt="close" class="cursor-pointer modal-close-icon" @click="showCancelOrderModal = false"/>
                        </div>

                      </div>
                      <div class="caution-message flex gap-3 px-5 py-17px mb-3">
                        <img
                          src="@/assets/images/bi_info-circle.svg"
                          alt="Info"
                          class="caution-image"
                        />
                        <p
                          class="caution-text text-regular-4 text-color-info text-justify"
                        >
                          Thank you for your order! Your order is being
                          processed and will be completed within 3-6 hours. You
                          will receive an email confirmation when your order is
                          completed.
                        </p>
                      </div>
                      <div class="cancel-options">
                        <h2
                          class="font-heading-7 text-primary-color-dark-gray font-semibold pl-5 pb-3"
                        >
                          Reasons for Cancellation (Optional)
                        </h2>
                        <div class="flex flex-column gap-3 pl-5 pb-3">
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
                        <div class="additional-text mb-48px">
                          <h3
                            class="font-heading-7 text-primary-color-dark-gray font-semibold pl-5 pb-2"
                          >
                            Additional Comments:
                          </h3>
                          <Textarea
                            class="mx-5 p-3"
                            placeholder="Writing Comments"
                            auto-resize
                            cols="50"
                            rows="5"
                          />
                        </div>
                      </div>
                      <div
                        class="flex align-items-center justify-content-end gap-3 mr-5 mb-5"
                      >
                        <Button
                          class="modal-button cancel font-heading-7 font-semibold bg-envitect-sam-blue-5 text-primary-color-envitect-sam-blue border-primary-color-envitect-sam-blue"
                          @click="showCancelOrderModal = false"
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
        </Column>
      </DataTable>
      <div class="flex justify-content-center">
        <Button class="load-more-button mt-5"> Load More </Button>
      </div>
    </div>
    <!--    mobile content -->
    <div class="order-table-mobile block md:hidden">
      <Divider class="mobile-divider mb-3" />
      <div v-for="order in orders">
        <div class="product-container-mobile mb-4">
          <h2 class="heading-7 mb-3 font-medium product-title-text">Product</h2>
          <PagesAccountMyOrdersProductContainer :product="order" />
          <ul class="order-items-container mt-26px">
            <li class="flex align-items-center order-item-list mb-14px">
              <p class="order-item-title heading-7 mr-12px">Order No#</p>
              <p class="order_number">{{ order.order_no }}</p>
            </li>
            <li class="flex align-items-center order-item-list mb-14px">
              <p class="order-item-title heading-7 mr-12px">Date:</p>
              <p class="font-heading-7 date-text">
                {{ formatDate(order.timestamp) }}
              </p>
            </li>
            <li class="flex align-items-center order-item-list mb-14px">
              <p class="order-item-title heading-7 mr-12px">Status</p>
              <p
                class="status"
                :class="[
                  order.status.trim().toLowerCase() === 'cancelled'
                    ? 'cancelled'
                    : order.status.trim().toLowerCase() === 'completed'
                    ? 'completed'
                    : '',
                ]"
              >
                {{ order.status }}
              </p>
            </li>
            <li class="flex align-items-center order-item-list">
              <p class="order-item-title heading-7 mr-12px">Action</p>
              <div class="mobile-action-container">
                <p
                  class="cursor-pointer action-pointer"
                  @click="showActionByClick"
                >
                  <i
                    class="pi pi-ellipsis-h action-button"
                    style="font-size: 2rem"
                  ></i>
                </p>
                <div class="other-actions">
                  <ul class="other-actions-list">
                    <li class="action font-heading-7 mb-2">Reorder</li>
                    <li class="action font-heading-7 mb-2">View Order</li>
                    <li class="action font-heading-7">Cancel Order</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-content-center">
        <Button class="load-more-button mt-2"> Load More </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "assets/styles/scss/base/mixins" as *;

.order-table-container {
  padding: 32px 60px;
  border-radius: 8px;
  background-color: var(--product-Front-color);
  @include media-query(sm) {
    padding: 0px;
    background-color: transparent;
  }

  .container-title {
    color: var(--navy-blue-80);
  }
  .order_number {
    color: var(--primary-color-envitect-sam-blue);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding: 2px 12px;
    background-color: var(--envitect-sam-blue-5);
    max-width: 102px;
  }
  .status {
    color: var(--navy-blue-60);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding: 2px 12px;
    background-color: #f0f5fd;
    max-width: 102px;
    border-radius: 2px;
  }
  .cancelled {
    background-color: #ffefea;
    color: #f00;
  }
  .completed {
    background-color: #f4fff5;
    color: #27ae60;
  }
  .product-title-text,
  .date-text,
  .order-item-title {
    color: var(--dark-gray-80);
  }
  .order-item-title {
    min-width: 86px;
  }

  .action-button {
    color: #a5aec2 !important;
  }

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

  .mobile-action-container {
    position: relative;
  }
  .cursor-pointer:hover + .other-actions {
    display: block;
    transition: 0.7s;
    animation: fadeInOut 0.7s ease;
  }

  .mobile-divider {
    background-color: #e8ebf0;
  }
  .product-container-mobile {
    padding: 16px;
    border: 1px solid #f5f5f5;
  }

  .order-item-list {
    margin-bottom: 14px;
  }

  .load-more-button {
    color: var(--primary-color-envitect-sam-blue);
    background-color: var(--primary-color-white);
    border-radius: 6px;
    padding: 12px 48px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    outline: none !important;
    border: 1px solid var(--primary-color-envitect-sam-blue);

    &:hover,
    &:active {
      color: var(--primary-color-envitect-sam-blue);
      background-color: var(--primary-color-white);
      outline: none !important;
      border: 1px solid var(--primary-color-envitect-sam-blue);
    }
  }
}

:deep(.p-datatable .p-datatable-tbody > tr > td) {
  border-radius: 4px;
  border-top: 16px solid var(--product-Front-color);
  padding: 16px !important;
}

:deep(
    .p-datatable
      .p-datatable-tbody
      > tr
      > td.cursor-pointer:hover
      .other-actions
  ) {
  display: block;
  animation: fadeInOut 0.7s ease;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(10px);
  } // Initial state
  100% {
    opacity: 1;
    transform: translateY(0);
  } // Final state
}

.cancel-modal {
  .modal-items {
    background-color: #fff;
    border-radius: 6px;
    @include media-query(sm) {
      border-radius: 12px;
    }
  }
  .modal-close-icon {
    position: absolute;
    right: -16px;
    top: -16px;
  }
  .caution-message {
    background-color: rgba(75, 160, 181, 0.1);

    .caution-image {
      width: 32px;
      height: 32px;
    }
    .caution-text {
      max-width: 488px;
    }
  }
  .modal-text {
    color: var(--navy-blue-80);
    margin-bottom: 40px;
  }
  .modal-button {
    display: inline-flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 6px;
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
