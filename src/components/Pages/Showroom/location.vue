<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="container h-582px location grid w-full border-round-lg mb-5 relative"
  >
    <div
      class="overflow-scroll showroom-details overflow-x-hidden h-582px col-6"
    >
      <div
        class="showroom-address bg-product-front-color pt-38px pb-36px px-32px border-round-lg my-20px ml-24px mr-16px cursor-pointer"
        @click="active = 0"
      >
        <h2 class="font-bold">Uttor Badda Showroom</h2>
        <h3 class="font-semibold pt-8px pb-12px">BTI Premier Plaza</h3>
        <p class="font-normal">
          Shop # 2/A, 2nd Floor, Cha # 90/A, Progoti Shoroni Shahjadpur,
          Gulshan, Badda, Dhaka
        </p>
        <h4 class="font-bold pt-12px"><span>Call:</span> +880 1980 001111</h4>
      </div>

      <div
        class="showroom-address pt-38px pb-36px px-32px border-round-lg my-20px ml-24px mr-16px cursor-pointer"
        @click="active = 1"
      >
        <h2 class="font-bold">Uttor Badda Showroom</h2>
        <h3 class="font-semibold pt-8px pb-12px">BTI Premier Plaza</h3>
        <p class="font-normal">
          Shop # 2/A, 2nd Floor, Cha # 90/A, Progoti Shoroni Shahjadpur,
          Gulshan, Badda, Dhaka
        </p>
        <h4 class="font-bold pt-12px"><span>Call:</span> +880 1980 001111</h4>
      </div>

      <div
        class="showroom-address pt-38px pb-36px px-32px border-round-lg my-20px ml-24px mr-16px cursor-pointer"
        @click="active = 2"
      >
        <h2 class="font-bold">Uttor Badda Showroom</h2>
        <h3 class="font-semibold pt-8px pb-12px">BTI Premier Plaza</h3>
        <p class="font-normal">
          Shop # 2/A, 2nd Floor, Cha # 90/A, Progoti Shoroni Shahjadpur,
          Gulshan, Badda, Dhaka
        </p>
        <h4 class="font-bold pt-12px"><span>Call:</span> +880 1980 001111</h4>
      </div>
    </div>
    <div class="col-6 location-map">
      <TabView v-model:activeIndex="active" class="h-full relative">
        <TabPanel>
          <iframe
            class="w-full h-582px border-round-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14594.146117743501!2d90.40015865!3d23.870586149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1698489167226!5m2!1sen!2sbd"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </TabPanel>
        <TabPanel>
          <iframe
            class="w-full h-582px border-round-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.111052032637!2d90.41869117453375!3d23.77905948767713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79a72a9a765%3A0x74cb2ace7eebb365!2sModdho%20Badda%20Balur%20Chor%20Panir%20Pump!5e0!3m2!1sen!2sbd!4v1698502069923!5m2!1sen!2sbd"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </TabPanel>
        <TabPanel>
          <iframe
            class="w-full h-582px border-round-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29239.341338589573!2d90.5814026763103!3d23.64311940323298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b34a23050595%3A0xe92de4bde15fc703!2sSonargaon!5e0!3m2!1sen!2sbd!4v1698502149636!5m2!1sen!2sbd"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const active = ref(0);
</script>
<style lang="scss" scoped>
@use "assets/styles/scss/base/_variables" as *;

.location {
  .showroom-details {
    background: $product-front-color;
    .showroom-address {
      box-shadow: 0px 3.84288px 3.84288px 0px rgba(189, 189, 189, 0.25);
      background: white;
      color: black;
      h2 {
        font-size: 26px;
      }
      h3 {
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
      h4 {
        font-size: 16px;
      }
    }
  }
}
</style>
