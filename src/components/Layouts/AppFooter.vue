<template>
  <div class="footer pt-6 pb-4">
    <div class="container mx-auto">
      <div class="footerItems">
        <div class="grid footerCols">
          <div class="col flex flex-column text-white">
            <div class="mb-5">
              <img alt="ac service" src="~/assets/images/logo.svg" />
            </div>
            <div class="flex gap-2 mb-12px">
              <img
                alt="footer phone icon"
                src="~/assets/images/footer_phone.svg"
              />
              <span class="font-medium"> 01712262552 / 09613755755 </span>
            </div>
            <div class="flex gap-2 mb-12px">
              <img
                alt="footer email icon"
                src="~/assets/images/footer_email.svg"
              />
              <span>info@acservicebd.com </span>
            </div>
            <div class="flex gap-2 mb-12px">
              <div class="location">
                <img
                  alt="footer address icon"
                  src="~/assets/images/footer_address.svg"
                />
              </div>

              <span class="mr-3"
                >BTI Premier Shopping Mall, Cha# 90/A, 2nd Floor, Progoti
                Shoroni, Shahjadpur, North Badda, Dhaka-1212.
              </span>
            </div>
          </div>
          <div class="col-12 md:col flex flex-column text-white">
            <h2 class="mt-1 mb-3 md:mb-5 font-semibold">Shopping With Us</h2>
            <NuxtLink class="footer-point" to="/our-showroom"
              >Our Showroom
            </NuxtLink>
            <NuxtLink class="footer-point" to="/about">
              Why Shop With Us
            </NuxtLink>
            <NuxtLink class="footer-point" to="/frequently-asked-questions">
              Frequently Asked Questions
            </NuxtLink>
            <NuxtLink class="footer-point" to="/purchase-procedure"
              >Online Purchase Procedure
            </NuxtLink>
            <NuxtLink class="footer-point" to="/payment-methods"
              >Online Payment Methods
            </NuxtLink>
            <NuxtLink class="footer-point" to="/payment-security"
              >Online Payment Security
            </NuxtLink>
          </div>
          <div class="col-12 md:col flex flex-column text-white">
            <h2 class="mt-1 mb-3 md:mb-5 font-semibold">Customer Service</h2>
            <NuxtLink class="footer-point" to="/contact-us">
              Contact US
            </NuxtLink>
            <NuxtLink class="footer-point" to="/warranty-policy">
              Warranty Policy
            </NuxtLink>
            <NuxtLink class="footer-point" to="/return-refund-policy">
              Return & Refund Policy
            </NuxtLink>
            <NuxtLink class="footer-point" to="/privacy-policy">
              Privacy Policy
            </NuxtLink>
            <NuxtLink class="footer-point" to="/cookie-policy"
              >Cookie Policy
            </NuxtLink>
            <NuxtLink class="footer-point" to="/terms-conditions"
              >Terms & Conditions
            </NuxtLink>
          </div>
          <div class="col flex flex-column text-white">
            <h2 class="mt-1 mb-3 md:mb-5 font-semibold">Get Connected</h2>
            <h4 class="footer-point mb-4">
              AC SERVICE always posts AC related news & company news regularly.
              So connect with us our recently news.
            </h4>
            <div class="p-inputgroup subscription">
              <InputText placeholder="Enter Email..." />
              <Button class="subscribeButton" label="Subscribe" />
            </div>
            <div class="flex align-items-center">
              <text class="font-semibold mr-3">Follow Us:</text>
              <div class="flex gap-2 md:gap-3 align-items-center">
                <NuxtLink class="" to="https://www.facebook.com/">
                  <img alt="facebook" src="~/assets/images/facebook.svg" />
                </NuxtLink>
                <NuxtLink to="https://www.facebook.com/">
                  <img alt="linkedin" src="~/assets/images/link.svg" />
                </NuxtLink>
                <NuxtLink to="https://www.facebook.com/">
                  <img alt="tweeter" src="~/assets/images/tweet.svg" />
                </NuxtLink>
                <NuxtLink to="https://www.facebook.com/">
                  <img alt="pinterest" src="~/assets/images/pin.svg" />
                </NuxtLink>
                <NuxtLink to="https://www.facebook.com/">
                  <img alt="instagram" src="~/assets/images/ins.svg" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="copyWrite text-white">
        © 2006-2023 acservice.com.bd | All Rights Reserved |
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer {
  background-color: var(--primary-color-navy-blue);
}

.footerItems::after {
  width: 100% !important;
  height: 0.5px;
  content: " ";
  background-color: #a5aec2;
  display: block;
}

.footerCols {
  padding-bottom: 60px;
}

.footer-point {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 12px;
  text-decoration: none;
  color: var(--primary-color-white);
}

.subscription {
  max-height: 48px;
  border-radius: 4px;
  margin-bottom: 32px;
}

.subscribeButton,
.subscribeButton:hover {
  border-radius: 0px 4px 4px 0px;
  padding: 20px 12px;
  background: var(--primary-color-envitect-sam-blue);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  overflow: hidden;
  border: none;
  outline: none !important;
}

:deep(.p-button:enabled:hover) {
  background: var(--primary-color-envitect-sam-blue);
  color: white;
  border-color: var(--primary-color-envitect-sam-blue);
  outline: none;
}

.location {
  width: 25px !important;
  height: 25px;
}

.copyWrite {
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  padding-top: 9px;
}
</style>
