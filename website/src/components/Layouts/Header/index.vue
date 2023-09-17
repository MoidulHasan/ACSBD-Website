<template>
  <div class="mb-8">
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
      <div class="container">
        <nav :class="{ active: show }">
          <div class="mobileMenu flex justify-content-between">
            <!--            <input id="check" type="checkbox" name="check" class="hidden" />-->
            <label
              ref="menuToggle"
              :class="[{ 'lg:hidden menuToggle': true }]"
              @click="toggleMenu"
            >
              <i v-html="menuSvg"></i>
            </label>
            <label class="lg:hidden"> <i v-html="callSvg"></i></label>
          </div>
          <ul class="menu">
            <li>
              <NuxtLink class="navLink" active-class="" to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink class="navLink" active-class="" to="/"
                >Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="navLink flex" active-class="">
                <span>Products</span>
                <i class="navLink_i" v-html="caretSvg"></i>
              </NuxtLink>
              <ul class="submenu">
                <li>
                  <NuxtLink
                    class="subMenuLink pb-2 flex gap-3 lg:justify-content-center"
                  >
                    <span>Air Conditioner</span>
                    <i class="" v-html="caretRightSvg"></i>
                  </NuxtLink>
                  <ul class="submenu2">
                    <li>
                      <NuxtLink class="subMenuLink">Non-Inverter AC</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="subMenuLink">Inverter AC</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="subMenuLink">Cooling AC</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="subMenuLink">Sasroyi AC</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="subMenuLink">Komdami AC</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NuxtLink
                    class="subMenuLink flex gap-3 lg:justify-content-center"
                  >
                    <span>AC Spare Parts</span>
                    <i class="" v-html="caretRightSvg"></i>
                  </NuxtLink>
                  <ul class="submenu2">
                    <li>
                      <NuxtLink class="subMenuLink">Fiver Card</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="subMenuLink">Fan Turbo</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="subMenuLink">Cooling Engine</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="subMenuLink">Suparior Dana</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink class="subMenuLink">Cable Dan</NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <NuxtLink class="navLink" active-class="" to="/"
                >AC Rent</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="navLink" active-class="" to="/"
                >Work Pricing</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="navLink" active-class="" to="/">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink class="navLink" active-class="" to="/"
                >About Us</NuxtLink
              >
            </li>
            <li>
              <NuxtLink class="navLink" active-class="" to="/"
                >Contact Us</NuxtLink
              >
            </li>
            <li class="right">
              <NuxtLink class="navLink" active-class="" to="/">
                Account</NuxtLink
              >
            </li>
            <li class="right">
              <NuxtLink class="navLink" active-class="" to="/"
                >Favourites</NuxtLink
              >
            </li>
            <li class="right">
              <NuxtLink class="navLink" active-class="" to="/">Carts</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface dropDownLink {
  title: string;
  path: string;
  cName: string;
  childMenu?: Array<dropDownLink>;
}
interface navLink {
  title: string;
  path: string;
  cName: string;
  subMenu?: Array<dropDownLink>;
}

const menuItems: Array<navLink> = [
  {
    title: "Home",
    path: "/",
    cName: "nav-links",
  },
  {
    title: "Services",
    path: "/services",
    cName: "nav-links",
  },
  {
    title: "Products",
    path: "/products",
    cName: "nav-links",
    subMenu: [
      {
        title: "Air Conditioner",
        path: "/air-conditioner",
        cName: "dropdown",
        childMenu: [
          {
            title: "Non-Inverter AC",
            path: "/non-inverter-ac",
            cName: "dropdown",
          },
          {
            title: "Non-Inverter AC",
            path: "/non-inverter-ac",
            cName: "dropdown",
          },
          {
            title: "Non-Inverter AC",
            path: "/non-inverter-ac",
            cName: "dropdown",
          },
          {
            title: "Non-Inverter AC",
            path: "/non-inverter-ac",
            cName: "dropdown",
          },
          {
            title: "Non-Inverter AC",
            path: "/non-inverter-ac",
            cName: "dropdown",
          },
          {
            title: "Non-Inverter AC",
            path: "/non-inverter-ac",
            cName: "dropdown",
          },
          {
            title: "Non-Inverter AC",
            path: "/non-inverter-ac",
            cName: "dropdown",
          },
          {
            title: "Non-Inverter AC",
            path: "/non-inverter-ac",
            cName: "dropdown",
          },
          {
            title: "Non-Inverter AC",
            path: "/non-inverter-ac",
            cName: "dropdown",
          },
        ],
      },
      {
        title: "AC Spares Parts",
        path: "/ac-spares-parts",
        cName: "dropdown",
      },
    ],
  },
];

const menuSvg: string = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 0.0825195L0.0015583 0.0825216L0.00155848 2.45288L20 2.45288L20 0.0825195ZM16 6.89734L0.00124791 6.89734L0.00124808 9.2677L16 9.2677L16 6.89734ZM0.00288873 13.7122L12.002 13.7122L12.002 16.0825L0.00288891 16.0825L0.00288873 13.7122Z" fill="white"/>
</svg>`;
const callSvg: srting = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="2" fill="white"/>
<path d="M18.6467 16.22C18.6467 16.46 18.5933 16.7067 18.48 16.9467C18.3667 17.1867 18.22 17.4134 18.0267 17.6267C17.7 17.9867 17.34 18.2467 16.9333 18.4134C16.5333 18.58 16.1 18.6667 15.6333 18.6667C14.9533 18.6667 14.2267 18.5067 13.46 18.18C12.6933 17.8534 11.9267 17.4134 11.1667 16.86C10.4 16.3 9.67334 15.68 8.98 14.9934C8.29334 14.3 7.67334 13.5734 7.12 12.8134C6.57334 12.0534 6.13334 11.2934 5.81334 10.54C5.49334 9.78004 5.33334 9.05337 5.33334 8.36004C5.33334 7.90671 5.41334 7.47337 5.57334 7.07337C5.73334 6.66671 5.98667 6.29337 6.34 5.96004C6.76667 5.54004 7.23334 5.33337 7.72667 5.33337C7.91334 5.33337 8.1 5.37337 8.26667 5.45337C8.44 5.53337 8.59334 5.65337 8.71334 5.82671L10.26 8.00671C10.38 8.17337 10.4667 8.32671 10.5267 8.47337C10.5867 8.61337 10.62 8.75337 10.62 8.88004C10.62 9.04004 10.5733 9.20004 10.48 9.35337C10.3933 9.50671 10.2667 9.66671 10.1067 9.82671L9.6 10.3534C9.52667 10.4267 9.49334 10.5134 9.49334 10.62C9.49334 10.6734 9.5 10.72 9.51334 10.7734C9.53334 10.8267 9.55334 10.8667 9.56667 10.9067C9.68667 11.1267 9.89334 11.4134 10.1867 11.76C10.4867 12.1067 10.8067 12.46 11.1533 12.8134C11.5133 13.1667 11.86 13.4934 12.2133 13.7934C12.56 14.0867 12.8467 14.2867 13.0733 14.4067C13.1067 14.42 13.1467 14.44 13.1933 14.46C13.2467 14.48 13.3 14.4867 13.36 14.4867C13.4733 14.4867 13.56 14.4467 13.6333 14.3734L14.14 13.8734C14.3067 13.7067 14.4667 13.58 14.62 13.5C14.7733 13.4067 14.9267 13.36 15.0933 13.36C15.22 13.36 15.3533 13.3867 15.5 13.4467C15.6467 13.5067 15.8 13.5934 15.9667 13.7067L18.1733 15.2734C18.3467 15.3934 18.4667 15.5334 18.54 15.7C18.6067 15.8667 18.6467 16.0334 18.6467 16.22Z" stroke="#1476BF" stroke-width="1.5" stroke-miterlimit="10"/>
<path d="M16.3333 9.99996C16.3333 9.59996 16.02 8.98663 15.5533 8.48663C15.1267 8.02663 14.56 7.66663 14 7.66663" stroke="#1476BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6667 10C18.6667 7.42004 16.58 5.33337 14 5.33337" stroke="#1476BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
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
  font-weight: 500;
  line-height: 1.5rem;
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
  min-width: 11.75rem;
  z-index: 1000;
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

@keyframes slideleft {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
  }
}

@keyframes slide-in {
  from {
    left: -100%;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}

@keyframes slide-down {
  0% {
    height: 0;
  }

  100% {
    height: auto;
  }
}

@media (max-width: 900px) {
  .second-row {
    background-color: var(--primary-color-envitect-sam-blue) !important;
    transition: height 0.5s ease-in-out;
    animation: slide-down 0.5s ease-in-out;
  }

  nav {
    width: 100%;
    left: 0;
    padding: 0.8rem 0 0.6rem 0;
  }

  nav .menu {
    display: none;
    animation: slide-in 0.5s ease-in-out;
  }

  nav.active .menu {
    display: initial;
  }

  .menu li {
    width: 100%;
    position: relative;
    line-height: 45px;
  }

  nav ul li.right {
    float: none;
    margin-right: 0;
  }

  nav ul li.right .navLink {
    padding: 0.625rem 3rem 0.625rem 0;
  }

  .submenu {
    position: relative;
    width: 100%;
    left: 0;
    border-radius: 2px 0px 0px 2px;
    background: #fff;
    box-shadow: 0 0 0 0 #fff;
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
    z-index: 1000;
    //display: none;
  }
}
</style>
