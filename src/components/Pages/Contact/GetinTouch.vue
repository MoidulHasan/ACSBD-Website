import { CommonSectionHeader } from '#build/components';
<template>
  <div class="container-getin-touch">
    <div class="getin-touch-section">
      <h3 class="font-bold">Get in Touch</h3>
      <p class="text-xs lg:text-base">
        We are ready to answer your queries and provide a solution to your
        problems. So, don’t hesitate to reach out to us by filling up the form
        below. And we will get back to you as soon as possible.
      </p>
    </div>
    <!-- contact number  -->
    <div class="contact-section flex align-items-center">
      <div class="contact-img border-round-xs flex">
        <img src="/images/call 1.png" alt="call" />
      </div>
      <div
        class="contact-number flex flex-column text-xs lg:text-base font-semibold"
      >
        <span>01911 493824 </span>
        <span>01681 155 591 </span>
      </div>
    </div>
    <!-- contact email  -->
    <div class="email-section flex align-items-center">
      <div class="email-img border-round-xs">
        <img src="/images/email 1.png" alt="email" />
      </div>
      <div class="contact-email flex flex-column text-base font-medium">
        <span>info@acservicebd.com</span>
        <span>hello@acservicebd.com</span>
      </div>
    </div>
    <!-- location address  -->
    <div class="location-section flex align-items-center">
      <div class="location-img">
        <img src="/images/map.png" alt="email" />
      </div>
      <div class="location-address flex flex-column text-base">
        <span>BTI Premier Plaza, Shop # 2/A, 2nd Floor, Cha # 90/A,</span>
        <span>Progoti Shoroni, shahjadpur, Gulshan, Badda, Dhaka.</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.container-getin-touch {
  padding: 48px 55px 76px 48px;
  color: var(--dark-gray-80);
  background-color: var(--product-Front-color);
  @media only screen and (max-width: 1023px) {
    padding: 20px 16px 16px;
  }
  .getin-touch-section {
    h3 {
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
    }
  }
  .contact-section {
    padding-bottom: 24px;
    @media only screen and (max-width: 1023px) {
      padding-bottom: 12px;
    }
    .contact-img {
      background-color: var(--primary-color-white);
      padding: 18px;
      @media only screen and (max-width: 1023px) {
        padding: 13px;
      }
      img {
        width: 24px;
        height: 24px;
        @media only screen and (max-width: 1023px) {
          width: 18px;
          height: 18px;
        }
      }
    }
    .contact-number {
      color: var(--primary-color-navy-blue);
      margin-left: 24px;
      @media only screen and (max-width: 1023px) {
        margin-left: 20.08px;
      }
    }
  }
  .email-section {
    padding-bottom: 24px;
    @media only screen and (max-width: 1023px) {
      padding-bottom: 12px;
    }
    .email-img {
      background: var(--product-BG-color);
      padding: 18px;
      @media only screen and (max-width: 1023px) {
        padding: 13px;
      }
      img {
        width: 24px;
        height: 24px;
        @media only screen and (max-width: 1023px) {
          width: 18px;
          height: 18px;
        }
      }
    }
    .contact-email {
      margin-left: 24px;
      @media only screen and (max-width: 1023px) {
        margin-left: 20.08px;
      }
      span {
        @media only screen and (max-width: 1023px) {
          font-size: 12.206px;
          background-color: yellow;
        }
      }
    }
  }
  .location-section {
    .location-img {
      background: var(--product-BG-color);
      padding: 18px;
      @media only screen and (max-width: 1023px) {
        padding: 13px;
      }
      img {
        width: 24px;
        height: 24px;
        @media only screen and (max-width: 1023px) {
          width: 18px;
          height: 18px;
        }
      }
    }
    .location-address {
      margin-left: 24px;
      @media only screen and (max-width: 1023px) {
        margin-left: 20.08px;
      }
      span {
        @media only screen and (max-width: 1023px) {
          font-size: 12.206px;
        }
      }
    }
  }
}
</style>
