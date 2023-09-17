<template>
  <div class="mb-8 headerContainer">
    <div class="first-row">
      <div
        class="grid container align-items-center justify-between pt-4 pb-10px"
      >
        <div
          class="col-12 lg:col-3 flex justify-content-center lg:justify-content-start"
        >
          <img src="@/assets/images/header/logo_colored.svg" alt="ACBD" />
        </div>
        <div class="col-12 md:col-12 lg:col-5">
          <div class="p-inputgroup flex-1">
            <InputText placeholder="Search Product" />
            <Button icon="pi pi-search" class="search-button" />
          </div>
        </div>
        <div
          class="col-12 lg:col-4 md:align-items-center md:justify-content-center lg:justify-content-end float-right hidden md:flex"
        >
          <img
            src="@/assets/images/header/service.svg"
            alt="service"
            class="mr-3"
          />
          <div>
            <p class="flex align-items-center">
              <img
                class="inline-block mr-1 contact-img"
                src="@/assets/images/header/phoneIcon.svg"
                alt="phone"
              />
              <span class="contact-info">09613 755755</span>
            </p>
            <p class="flex align-items-center">
              <img
                class="inline-block mr-1 contact-img"
                src="@/assets/images/header/mail.svg"
                alt="mail"
              />
              <span class="contact-info">info@acsevice.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="second-row">
      <div class="navbar">
        <nav :class="{ active: show }">
          <div
            class="mobileMenu flex justify-content-between container lg:hidden"
          >
            <!--            <input id="check" type="checkbox" name="check" class="hidden" />-->
            <!--            <label-->
            <!--              ref="menuToggle"-->
            <!--              :class="[{ 'lg:hidden menuToggle': true }]"-->
            <!--              @click="toggleMenu"-->
            <!--            >-->
            <!--              <i v-html="menuSvg"></i>-->
            <!--            </label>-->
            <!--            <label class="lg:hidden"> <i v-html="callSvg"></i></label> -->

            <NuxtLink
              ref="menuToggle"
              class="flex flex-column align-items-center justify-content-center"
              :class="[{ 'lg:hidden menuToggle': true }]"
              @click="toggleMenu"
            >
              <img
                class="headerIcon menuBarIcon"
                src="@/assets/images/header/threebarMenu.svg"
                alt="three dot"
              />
              <span class="block headerIcon-text">Menu</span>
            </NuxtLink>
            <NuxtLink
              class="flex flex-column align-items-center justify-content-center"
            >
              <img
                class="headerIcon"
                src="@/assets/images/header/home.svg"
                alt="three dot"
              />
              <span class="block headerIcon-text">Home</span>
            </NuxtLink>
            <NuxtLink
              class="flex flex-column align-items-center justify-content-center"
            >
              <div class="navbar-content-container flex justify-content-center">
                <span class="navbar-items-count">2</span>
                <img
                  class="favoriteIcon navBarIcons"
                  src="@/assets/images/header/cart.svg"
                  alt="cart"
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
                  class="favoriteIcon navBarIcons"
                  src="@/assets/images/header/heart.svg"
                  alt="favorite"
                />
              </div>
              <span class="block headerIcon-text">Favorite</span>
            </NuxtLink>

            <NuxtLink
              class="flex flex-column align-items-center justify-content-center"
            >
              <img
                class="headerIcon"
                src="@/assets/images/header/profile.svg"
                alt="three dot"
              />
              <span class="block headerIcon-text">Profile</span>
            </NuxtLink>
          </div>
          <ul class="menu container lg:mx-auto">
            <li v-for="navItem in navMenues" :key="navItem.title">
              <NuxtLink
                class="navLink flex"
                active-class=""
                exact-active-class=""
                :to="navItem.path"
              >
                <span>{{ navItem.title }}</span>
                <i
                  v-if="navItem.submenu"
                  class="navLink_i"
                  v-html="caretSvg"
                ></i>
              </NuxtLink>
              <ul v-if="navItem.submenu" class="submenu">
                <li
                  v-for="subNavItem in navItem.submenu"
                  :key="subNavItem.title"
                >
                  <NuxtLink
                    class="subMenuLink pb-2 flex gap-3 lg:justify-content-center"
                  >
                    <span>{{ subNavItem.title }}</span>
                    <i class="" v-html="caretRightSvg"></i>
                  </NuxtLink>
                  <ul v-if="subNavItem.submenu2" class="submenu2">
                    <li
                      v-for="multiSubNavItem in subNavItem.submenu2"
                      :key="multiSubNavItem.title"
                      class=""
                    >
                      <NuxtLink class="subMenuLink">{{
                        multiSubNavItem.title
                      }}</NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="right">
              <NuxtLink
                class="navLink flex align-items-center justify-content-center"
                active-class=""
                to="/"
              >
                <div class="header-item-container flex justify-content-center">
                  <span class="header-item-count">2</span>
                  <img
                    class="favoriteIcon navBarIcons"
                    src="@/assets/images/header/cartsIcon.svg"
                    alt="cart"
                  />
                </div>
                <span class="block">Cart</span>
              </NuxtLink>
            </li>
            <li class="right">
              <NuxtLink
                class="navLink flex align-items-center justify-content-center"
                active-class=""
                to="/"
              >
                <div class="header-item-container flex justify-content-center">
                  <span class="header-item-count">2</span>
                  <img
                    class="favoriteIcon navBarIcons"
                    src="@/assets/images/header/heart.svg"
                    alt="favorite"
                  />
                </div>

                <span class="block">Favorites</span>
              </NuxtLink>
            </li>
            <li class="right">
              <NuxtLink
                class="navLink flex align-items-center justify-content-center"
                active-class=""
                to="/"
              >
                <img
                  class="profileIcon navBarIcons"
                  src="@/assets/images/header/profile.svg"
                  alt="profile"
                />
                <span class="block">Account</span>
              </NuxtLink>
            </li>
          </ul>
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
    path: "",
    submenu: [
      {
        title: "Air Conditioner",
        path: "",
        submenu2: [
          {
            title: "Non-Inverter AC",
            path: "",
          },
          {
            title: "Inverter AC",
            path: "",
          },
          {
            title: "Window AC",
            path: "",
          },
          {
            title: "Portable AC",
            path: "",
          },
          {
            title: "Ceiling Type AC",
            path: "",
          },
          {
            title: "Cassette Type AC",
            path: "",
          },
          {
            title: "Duct Type AC",
            path: "",
          },
          {
            title: "VRF AC",
            path: "",
          },
        ],
      },
      {
        title: "AC Spares Parts",
        path: "",
        submenu2: [
          {
            title: "Non-Inverter AC",
            path: "",
          },
          {
            title: "Inverter AC",
            path: "",
          },
          {
            title: "Window AC",
            path: "",
          },
          {
            title: "Portable AC",
            path: "",
          },
          {
            title: "Ceiling Type AC",
            path: "",
          },
          {
            title: "Cassette Type AC",
            path: "",
          },
          {
            title: "Duct Type AC",
            path: "",
          },
          {
            title: "VRF AC",
            path: "",
          },
        ],
      },
    ],
  },
  {
    title: "AC Rent",
    path: "/acrent",
  },
  {
    title: "Work Pricing",
    path: "/workpricing",
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
    path: "",
  },
];

const caretSvg: string = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M16.293 9.29297L12 13.586L7.70697 9.29297L6.29297 10.707L12 16.414L17.707 10.707L16.293 9.29297Z" fill="#565656"/>
</svg>`;

const caretRightSvg: string = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.33333 5.83341L12.5 10.0001L8.33333 14.1667" stroke="#4A5D85" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const show = ref(false);

const toggleMenu = () => {
  show.value = !show.value;
};
</script>

<style scoped>
.first-row {
  border-bottom: 0.1rem solid var(--primary-color-navy-blue-10);
}
.search-button,
.search-button:hover {
  background-color: var(--primary-color-envitect-sam-blue);
  padding: 14px 29px;
}

.contact-info {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: var(--primary-color-dark-gray);
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

.menu .navLink {
  text-decoration: none;
  color: var(--primary-color-dark-gray);
  font-size: 1rem;
  font-weight: 500;
  display: block;
  text-transform: capitalize;
  padding: 0.625rem 3rem 0.625rem 0;
}

.navLink_i {
  padding-left: 0.25rem;
  display: flex;
  justify-contet: center;
  align-items: center;
}

nav ul li.right {
  float: right;
  margin-right: 0;
}

nav ul li.right .navLink {
  padding: 0.625rem 0 0.625rem 3rem;
}

.submenu {
  position: absolute;
  border-radius: 2px 0px 0px 2px;
  background: #fff;
  box-shadow: 0px 2px 4px 1px rgba(159, 159, 159, 0.35);
  padding: 1rem 0;
  display: none;
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
  z-index: 99;
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

@media (max-width: 900px) {
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
    z-index: 9999;
  }
  nav {
    width: 100%;
    left: 0;
    padding: 0.625rem 1.25rem;
    position: relative;
  }

  .menuToggle {
    padding: 0.2rem 0rem;
  }

  .navbar {
    position: relative;
  }
  .mobileMenu {
    position: relative;
    z-index: 9999;
  }

  nav .menu {
    display: none;
    width: calc(100% - 2rem);
    position: fixed;
    max-height: calc(100vh - 10rem - 4.27375rem);
    min-height: 0;
    overflow-y: scroll;
    background: var(--primary-color-envitect-sam-blue) !important;
    top: 10rem;
    z-index: 9990;
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 1rem;
  }

  nav.active .menu {
    display: initial;
    left: 1rem;
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

  .navLink_i {
    color: var(--primary-color-white);
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
    border-radius: 2px 0px 0px 2px;
    background: #157ecd;
    box-shadow: 0 0 0 0 #fff;
  }
  .submenu .subMenuLink {
    color: var(--primary-color-white);
  }

  .submenu2 .subMenuLink {
    color: var(--primary-color-dark-gray);
  }

  .submenu li .subMenuLink {
    display: inline-block;
  }

  .submenu2 {
    position: relative;
    left: 0;
    top: 0;
    border-radius: 2px 0px 0px 2px;
    background: #fff;
    box-shadow: 0 0 0 0 #fff;
    padding: 0 1rem 1rem 1rem;
    min-width: 6rem;
    z-index: 999;
  }
}
</style>
