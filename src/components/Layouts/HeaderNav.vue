<template>
  <div class="headerContainer">
    <div class="first-row">
      <div
        ref="firstRowHeader"
        class="flex flex-column md:flex-row container align-items-center justify-content-between py-3 md:py-4 gap-3 md:gap-4"
      >
        <!-- main logo-->
        <div
          class="flex align-items-center justify-content-between lg:justify-content-start w-full md:w-auto"
        >
          <NuxtLink class="home-logo-link" to="/">
            <img
              class="home-logo"
              alt="ACBD"
              src="@/assets/images/header/logo_colored.svg"
            />
          </NuxtLink>
          <div class="block md:hidden icons-holder">
            <img
              v-if="!showSearchBar"
              src="@/assets/images/icons/search_icon_with_frame.svg"
              alt="search"
              @click="toggleSeachShow"
            />
            <i
              v-else
              class="cross-search pi pi-times"
              @click="toggleSeachShow"
            />
          </div>
        </div>
        <!--        search bar -->
        <transition name="searchFade">
          <div
            v-if="showSearchBar"
            class="md:mb-0 flex-1 headerSearchBar w-full"
          >
            <div class="p-inputgroup flex-1 flex-wrap w-full">
              <InputText placeholder="Search Product" />
              <Button class="search-button" icon="pi pi-search" />
            </div>
          </div>
        </transition>

        <!--        contact info-->
        <div
          class="md:align-items-center md:justify-content-center lg:justify-content-end float-right hidden md:flex"
        >
          <NuxtLink to="/services">
            <img
              alt="service"
              class="mr-2 lg:mr-3 flex align-items-center service-image"
              src="@/assets/images/header/service.svg"
            />
          </NuxtLink>
          <div>
            <NuxtLink href="tel:09613755755" class="flex align-items-center">
              <img
                alt="phone"
                class="inline-block mr-1 contact-img"
                src="@/assets/images/header/phoneIcon.svg"
              />
              <span class="contact-info">09613 755755</span>
            </NuxtLink>
            <NuxtLink
              href="mailto:info@acsevice.com"
              class="flex align-items-center cursor-pointer"
            >
              <img
                alt="mail"
                class="inline-block mr-1 contact-img"
                src="@/assets/images/header/mail.svg"
              />
              <span class="contact-info">info@acsevice.com</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="second-row">
      <div class="navbar px-0 md:px-3 md:flex md:flex-wrap">
        <nav :class="{ active: show }" class="">
          <div
            class="mobileMenu flex flex-wrap justify-content-between container md:hidden"
          >
            <NuxtLink
              ref="menuToggle"
              :class="[{ 'lg:hidden menuToggle': true }]"
              class="flex flex-column align-items-center justify-content-center"
              @click="toggleMenu"
            >
              <img
                alt="three dot"
                class="headerIcon menuBarIcon"
                src="@/assets/images/header/threebarMenu.svg"
              />
              <span class="block headerIcon-text">Menu</span>
            </NuxtLink>
            <NuxtLink
              class="flex flex-column align-items-center justify-content-center"
            >
              <img
                alt="three dot"
                class="headerIcon"
                src="@/assets/images/header/home.svg"
              />
              <span class="block headerIcon-text">Home</span>
            </NuxtLink>
            <NuxtLink
              class="flex flex-column align-items-center justify-content-center"
            >
              <div class="navbar-content-container flex justify-content-center">
                <span class="navbar-items-count">2</span>
                <img
                  alt="cart"
                  class="favoriteIcon navBarIcons"
                  src="@/assets/images/header/cart.svg"
                />
              </div>
              <span class="block headerIcon-text">Shop</span>
            </NuxtLink>
            <NuxtLink
              class="flex flex-column align-items-center justify-content-center"
            >
              <div class="navbar-content-container flex justify-content-center">
                <span class="navbar-items-count">2</span>
                <img
                  alt="favorite"
                  class="favoriteIcon navBarIcons"
                  src="@/assets/images/header/heart.svg"
                />
              </div>
              <span class="block headerIcon-text">Favorite</span>
            </NuxtLink>

            <NuxtLink
              class="flex flex-column align-items-center justify-content-center"
            >
              <img
                alt="three dot"
                class="headerIcon"
                src="@/assets/images/header/profile.svg"
              />
              <span class="block headerIcon-text">Profile</span>
            </NuxtLink>
          </div>
          <!--          here transition can be added  -->
          <div class="relative menu-box lg:flex lg:flex-wrap">
            <div class="overlap" @click="toggleMenu"></div>
            <ul class="menu container lg:mx-auto">
              <li v-for="navItem in navMenues" :key="navItem.title">
                <NuxtLink
                  :to="navItem.path"
                  active-class="active"
                  class="navLink flex"
                  exact-active-class="active"
                  @click="checkNav(navItem.path)"
                >
                  <span>{{ navItem.title }}</span>
                  <i
                    v-if="navItem.submenu"
                    class="pi pi-chevron-down navLink_i"
                  ></i>
                </NuxtLink>
                <ul v-if="navItem.submenu" class="submenu">
                  <li
                    v-for="subNavItem in navItem.submenu"
                    :key="subNavItem.title"
                  >
                    <NuxtLink
                      :to="subNavItem.path"
                      active-class="active"
                      class="subMenuLink pb-2 flex gap-3 lg:justify-content-between"
                      @click="checkNav(subNavItem.path)"
                    >
                      <span>{{ subNavItem.title }}</span>
                      <i
                        v-if="subNavItem.submenu2"
                        class="pi pi-chevron-right navLink_i subNavLink_i"
                      ></i>
                    </NuxtLink>
                    <ul v-if="subNavItem.submenu2" class="submenu2">
                      <li
                        v-for="multiSubNavItem in subNavItem.submenu2"
                        :key="multiSubNavItem.title"
                        class=""
                      >
                        <NuxtLink
                          :to="multiSubNavItem.path"
                          active-class="active"
                          class="subMenuLink"
                          @click="checkNav(multiSubNavItem.path)"
                        >
                          {{ multiSubNavItem.title }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="right">
                <NuxtLink
                  active-class="active"
                  class="navLink flex align-items-center justify-content-center"
                  to="/"
                >
                  <div
                    class="header-item-container flex justify-content-center"
                  >
                    <span class="header-item-count">2</span>
                    <img
                      alt="cart"
                      class="favoriteIcon navBarIcons"
                      src="@/assets/images/header/cartsIcon.svg"
                    />
                  </div>
                  <span class="block">Cart</span>
                </NuxtLink>
              </li>
              <li class="right">
                <NuxtLink
                  active-class="active"
                  class="navLink flex align-items-center justify-content-center"
                  to="/"
                >
                  <div
                    class="header-item-container flex justify-content-center"
                  >
                    <span class="header-item-count">2</span>
                    <img
                      alt="favorite"
                      class="favoriteIcon navBarIcons"
                      src="@/assets/images/header/heart.svg"
                    />
                  </div>

                  <span class="block">Favorites</span>
                </NuxtLink>
              </li>
              <li class="right">
                <NuxtLink
                  active-class="active"
                  class="navLink flex align-items-center justify-content-center"
                  to="/account/my-details"
                >
                  <img
                    alt="profile"
                    class="profileIcon navBarIcons"
                    src="@/assets/images/header/profile.svg"
                  />
                  <span class="block">Account</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface submenu {
  title: string;
  path: string;
  submenu2?: Array<submenu>;
}

interface menus {
  title: string;
  path: string;
  submenu?: Array<submenu>;
}

const navMenues: Array<menus> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Products",
    path: "/products",
    submenu: [
      {
        title: "Air Conditioner",
        path: "",
        submenu2: [
          {
            title: "Non-Inverter AC",
            path: "/products/non-air-conditioner",
          },
          {
            title: "Inverter AC",
            path: "/products/inverter-ac",
          },
          {
            title: "Window AC",
            path: "/products/window-ac",
          },
          {
            title: "Portable AC",
            path: "/products/portable-ac",
          },
          {
            title: "Ceiling Type AC",
            path: "/products/ceiling-type-ac",
          },
          {
            title: "Cassette Type AC",
            path: "/products/cassette-type-ac",
          },
          {
            title: "Duct Type AC",
            path: "/products/duct-type-ac",
          },
          {
            title: "VRF AC",
            path: "/products/vrf-ac",
          },
        ],
      },
      {
        title: "AC Spares Parts",
        path: "",
        submenu2: [
          {
            title: "Non-Inverter AC",
            path: "/products/non-air-conditioner",
          },
          {
            title: "Inverter AC",
            path: "/products/inverter-ac",
          },
          {
            title: "Window AC",
            path: "/products/window-ac",
          },
          {
            title: "Portable AC",
            path: "/products/portable-ac",
          },
          {
            title: "Ceiling Type AC",
            path: "/products/ceiling-type-ac",
          },
          {
            title: "Cassette Type AC",
            path: "/products/cassette-type-ac",
          },
          {
            title: "Duct Type AC",
            path: "/products/duct-type-ac",
          },
          {
            title: "VRF AC",
            path: "/products/vrf-ac",
          },
        ],
      },
    ],
  },
  {
    title: "AC Rent",
    path: "/ac-rent",
  },
  {
    title: "Work Pricing",
    path: "/work-pricing",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

const show = ref(false);
const firstRowHeader = ref(null);
const showSearchBar = ref(true);

const { width } = useWindowSize();

const toggleMenu = () => {
  show.value = !show.value;
};

const checkNav = (path: string): void => {
  if (path !== "") {
    toggleMenu();
  }
};

watch(
  () => width.value,
  () => {
    if (width.value <= 768) {
      showSearchBar.value = false;
      return;
    }
    showSearchBar.value = true;
  },
);
const toggleSeachShow = () => {
  showSearchBar.value = !showSearchBar.value;
};
</script>

<style scoped lang="scss">
@use "assets/styles/scss/base/mixins" as *;
.first-row {
  border-bottom: 0.1rem solid var(--navy-blue-10);
}

.second-row {
  border-bottom: 0.1rem solid var(--navy-blue-10);
}

.home-logo {
  max-width: 252px;

  @include media-query(lg) {
    max-width: 166.4px !important;
  }
}

.headerSearchBar {
  max-width: 582px !important;
}
:deep(.p-inputgroup .p-inputtext) {
  @include media-query(sm) {
    max-height: 32px;
  }
  @include media-query(lg) {
    max-height: 32px;
  }
}
:deep(.p-inputgroup .p-button) {
  @include media-query(sm) {
    max-height: 32px;
  }
  @include media-query(lg) {
    max-height: 32px;
  }
}

.cross-search {
  display: block;
  color: #ff0000;
  padding: 8px;
  min-height: 16px;
  min-width: 16px;
  border-radius: 2px;
  background: var(--envitect-sam-blue-5);
}

.search-button,
.search-button:hover {
  background-color: var(--primary-color-envitect-sam-blue);
  padding: 14px 29px;
}

.service-image {
  @include media-query(lg) {
    max-height: 40px;
    max-width: 100px;
  }
}

.contact-img {
  @include media-query(lg) {
    max-height: 17px;
  }
}

.contact-info {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: var(--primary-color-dark-gray);

  @include media-query(lg) {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav {
  width: 100%;
}

.menuToggle {
  padding: 0.2rem 0.5rem;
}

nav .menu {
  width: 100%;
}

.menu > li,
.menu > a {
  display: inline-block;
  line-height: 45px;
}

.menu li {
  animation: slideleft 0.5s ease;
}

.menu .navLink {
  text-decoration: none;
  color: var(--primary-color-dark-gray);
  font-size: 1rem;
  font-weight: 500;
  display: block;
  text-transform: capitalize;
  padding: 0.625rem 3rem 0.625rem 0;
  @include media-query(xxl) {
    padding: 0.625rem 1.5rem 0.625rem 0;
  }
  @include media-query(xl) {
    padding: 0.4rem 1.2rem 0.4rem 0;
  }
  @include media-query(lg) {
    padding: 0 1.4rem;
  }
}

.menu .navLink:hover,
.active {
  color: var(--primary-color-envitect-sam-blue) !important;
}

.navLink_i {
  width: 25px;
  padding-left: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}

.menu .navLink:hover .navLink_i {
  transform: scale(1.1) rotate(-180deg);
  transition: 0.5s;
  padding-left: 0;
  padding-right: 0.6rem;
}

nav ul li.right {
  float: right;
  margin-right: 0;
  @include media-query(xl) {
    float: right;
    margin-right: 0;
  }
}

nav ul li.right .navLink {
  padding: 0.625rem 0 0.625rem 3rem;
  @include media-query(xxl) {
    padding: 0.625rem 0 0.625rem 1.5rem;
  }
  @include media-query(xl) {
    padding: 0.4rem 0.5rem 0.4rem 0;
  }
  @include media-query(lg) {
    padding: 0 1.4rem;
  }
}

.submenu {
  position: absolute;
  border-radius: 2px 0px 0px 2px;
  background: #fff;
  box-shadow: 0px 2px 4px 1px rgba(159, 159, 159, 0.35);
  padding: 1rem 0;
  display: none;
  z-index: 1;
}

.submenu li {
  position: relative;
  padding: 0 1rem;
}

.subMenuLink {
  font-size: 1rem;
  font-style: normal;
  line-height: 1.5rem;
  font-weight: 400;
  color: var(--primary-color-dark-gray);
  text-decoration: none;
}

.subMenuLink:hover {
  color: var(--primary-color-envitect-sam-blue) !important;
}

.submenu2 {
  position: absolute;
  left: 100%;
  top: -1rem;
  border-radius: 2px 0px 0px 2px;
  background: #fff;
  box-shadow: 0px 2px 4px 1px rgba(159, 159, 159, 0.35);
  padding: 1rem;
  min-width: 14rem !important;
  z-index: 2;
  /* this is for overlapping the customer card */
  display: none;
}

.submenu2 li {
  display: block;
}

.menu li:hover > .submenu {
  display: block;
  animation: slideup 0.3s ease;
}

.submenu li:hover > .submenu2 {
  display: block;
  animation: slideleft 0.5s ease;
}

/* menu bar */

.headerIcon-text {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: var(--primary-color-dark-gray);
  padding-top: 4px;
}

/* navBarIcons */

.navBarIcons {
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.375rem;
}

.header-item-container,
.navbar-content-container {
  position: relative;
}

.navbar-items-count {
  position: absolute;
  display: block;
  top: -0.2rem;
  left: 0.8rem;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  background: var(--primary-color-navy-blue);
  color: var(--primary-color-white);
  width: 1.125rem;
  height: 1.125rem;
  padding: 1px 5px;
  line-height: normal;
  border-radius: 50%;
}

.header-item-count,
.cart-item-count {
  position: absolute;
  display: block;
  top: -0.5rem;
  left: 0.7rem;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  background: var(--primary-color-navy-blue);
  color: var(--primary-color-white);
  width: 1.125rem;
  height: 1.125rem;
  padding: 1px 5px;
  line-height: normal;
  border-radius: 50%;
}

/* animation */

@keyframes slideup {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
  }
}

@keyframes menu-slideup {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideleft {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .headerContainer {
    position: relative;
  }

  .second-row {
    border-radius: 24px 24px 0px 0px;
    background: var(--primary-color-white);
    box-shadow: 0px -2px 25px 0px rgba(70, 70, 85, 0.1);
    transition: height 0.5s ease-in-out;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 11;
    /* for overlaping customer review */
  }

  nav {
    width: 100%;
    left: 0;
    position: relative;
    z-index: 111;
  }

  .menuToggle {
    padding: 0.2rem 0rem;
  }

  .navbar {
    position: relative;
  }

  .mobileMenu {
    position: relative;
    z-index: 112;
    padding: 0.625rem 1.25rem;
    background: var(--primary-color-white);
    border-radius: 24px 24px 0px 0px;
  }

  .menu-box {
    display: none;
  }

  .overlap {
    position: fixed;
    top: 0;
    bottom: 4.27375rem;
    left: 0;
    right: 0;
    content: " ";
    background: rgba(0, 0, 0, 0.5);
  }

  nav .menu {
    display: none;
    width: 100%;
    position: fixed;
    height: calc(100vh - 4rem);
    overflow-y: scroll;
    background: var(--primary-color-envitect-sam-blue) !important;
    top: 4.5rem;
    border-radius: 1.25rem 1.25rem 0 0;
    padding: 1rem 1rem 2rem 1rem;
    animation: slidedown 0.4s ease;
  }

  nav.active .menu-box {
    display: initial;
  }

  nav.active .menu {
    display: initial;
    left: 0;
    animation: menu-slideup 0.4s ease;
  }

  .menu li {
    width: 100%;
    position: relative;
    line-height: 45px;
  }

  .menu li .navLink {
    position: relative;
    color: var(--primary-color-white);
  }

  .menu .navLink:hover,
  .active {
    color: var(--primary-color-dark-gray) !important;
  }

  .navLink_i {
    color: var(--primary-color-white);
  }

  .menu .navLink:hover .navLink_i {
    width: 16px;
    transform: scale(1.1) rotate(-90deg);
    transition: 0.5s;
    padding-top: 0.6rem;
  }

  nav ul li.right {
    display: none;
  }

  nav ul li.right .navLink {
    padding: 0.625rem 3rem 0.625rem 0;
  }

  .submenu {
    position: relative;
    width: 100%;
    left: 0;
    border-radius: 0.5rem;
    background: #157ecd;
    box-shadow: 0 0 0 0 #fff;
  }

  .submenu > li:not(:last-child) {
    padding-bottom: 1rem;
  }

  .submenu .subMenuLink {
    color: var(--primary-color-white);
  }

  .subMenuLink:hover {
    color: var(--primary-color-white) !important;
  }

  .submenu li .subMenuLink {
    display: inline-block;
  }

  .subMenuLink:hover .subNavLink_i {
    width: 16px;
    transform: scale(1.1) rotate(90deg);
    transition: 0.5s;
    padding-right: 0;
    padding-left: 0;
  }

  .submenu2 {
    position: relative;
    left: 0;
    top: 0;
    border-radius: 0.5rem;
    background: #e4efffff;
    box-shadow: 0 0 0 0 #fff;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin: 0.5rem 0 1rem 0;
    min-width: 6rem;
  }

  .submenu2 .subMenuLink {
    color: var(--primary-color-dark-gray);
  }
}

.searchFade-enter-active,
.searchFade-leave-active {
  transition: all 0.5s ease-in-out;
}

.searchFade-enter-from,
.searchFade-leave-to {
  opacity: 0;
}
</style>
