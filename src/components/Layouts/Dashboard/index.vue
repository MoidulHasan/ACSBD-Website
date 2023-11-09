<script setup lang="ts">
import { getProfile } from "~/app/api/getProfile";
const { data: profile } = await getProfile();

const navLinks = [
  { icon: "pi pi-user", title: "My Details", to: "/account/my-details" },
  { icon: "pi pi-shopping-cart", title: "My Orders", to: "/account/my-orders" },
  {
    icon: "pi pi-heart",
    title: "My Wishlist/Favourite",
    to: "/account/my-wishlist",
  },
  {
    icon: "pi pi-bell",
    title: "My Notifications",
    to: "/account/my-notification",
  },
  {
    icon: "pi pi-verified",
    title: "My Promo Code",
    to: "/account/my-promo-code",
  },
  { icon: "pi pi-sign-out", title: "Logout" },
];

const visible = ref(false);
const handleLogOut = (title: string) => {
  if (title === "Logout") {
    visible.value = true;
  }
};

const gotToHome = () => {
  navigateTo("/");
  // navigateTo("http://localhost:3000/", {
  //   open: {
  //     target: "_blank",
  //     windowFeatures: {
  //       width: 500,
  //       height: 500,
  //     },
  //   },
  // });
};
</script>

<template>
  <div>
    <div class="dashboard py-5">
      <div class="profile-info flex flex-column align-items-center">
        <div class="profile-image-container relative mb-12px">
          <img
            class="profile-image"
            :src="profile?.image"
            :alt="profile?.name"
          />
          <div>
            <img
              class="edit-image"
              src="~/assets/images/imgEditIcon.svg"
              alt="change profile picture"
            />
          </div>
        </div>
        <h2 class="profile-name font-heading-6 mb-4px">{{ profile?.name }}</h2>
        <h3 class="profile-title font-heading-7">{{ profile?.title }}</h3>
      </div>
      <div class="pages-link">
        <ul>
          <li
            v-for="link in navLinks"
            :key="link.title"
            class="w-full text-center"
          >
            <NuxtLink
              class="flex gap-3 align-items-center nav-item w-full font-heading-7 font-medium cursor-pointer"
              active-class="active"
              :to="link?.to"
              @click="handleLogOut(link.title)"
            >
              <i :class="[link.icon, 'nav-icon']" />
              <span>{{ link.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <ClientOnly>
      <Dialog
        v-model:visible="visible"
        class="logout-modal"
        close-on-escape
        modal
      >
        <template #container>
          <div class="modal-items">
            <p class="modal-text font-heading-7 font-semibold text-center">
              Are sou sure, <br />
              you want to logout?
            </p>
            <div class="flex align-items-center gap-3">
              <Button
                class="modal-button cancel font-heading-7 font-semibold"
                @click="visible = false"
              >
                Cancel
              </Button>
              <Button
                class="modal-button logout font-heading-7 font-semibold"
                @click="gotToHome"
              >
                Logout
              </Button>
            </div>
          </div>
        </template>
      </Dialog>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
@use "assets/styles/scss/base/mixins" as *;

.dashboard {
  background-color: var(--product-Front-color);
  border-radius: 8px;
  text-align: center;
  .profile-info {
    margin-bottom: 45px;

    .profile-image-container {
      .product-image {
        width: 110px;
        height: 110px;
        border-radius: 110px;
      }
      .edit-image {
        width: 24px;
        height: 24px;
        cursor: pointer;
        position: absolute;
        right: 0px;
        bottom: 11px;
      }
    }
    .profile-name {
      color: var(--primary-color-navy-blue);
    }
    .profile-title {
      color: var(--dark-gray-80);
    }
  }

  .nav-item {
    padding: 17px 13px 13px 58px;
    color: var(--dark-gray-80);
    transition: 0.6s;
    &:hover,
    &.active {
      background-color: var(--primary-color-envitect-sam-blue);
      color: var(--primary-color-white);
    }
    @include media-query(sm) {
      padding: 10px 24px;
    }
    .nav-icon {
      width: 20px;
      height: 20px;
    }
  }
}

.logout-modal {
  .modal-items {
    background-color: #fff;
    border-radius: 6px;
    padding: 61px 63px;
    @include media-query(sm) {
      padding: 61px 20px;
      border-radius: 12px;
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
    background-color: var(--envitect-sam-blue-5);
    color: var(--primary-color-envitect-sam-blue);
  }
  .logout {
    color: var(--primary-color-white);
    background-color: var(--primary-color-envitect-sam-blue);
  }
}
</style>
