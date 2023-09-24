<template>
  <div class="tab-with-content relative">
    <div class="container relative flex flex-column align-items-center">
      <div class="tabs pb-8">
        <div
          class="faq-topics container flex gap-4 lg:gap-7 align-items-center justify-content-center"
        >
          <NavLink class="services topic text-center">
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img
                class="faq-image"
                src="@/assets/images/services.svg"
                alt=""
              />
            </div>
            <h3 class="topic-title">Services?</h3>
          </NavLink>
          <Navlink class="ac-rent topic text-center">
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img class="faq-image" src="@/assets/images/ac_rent.svg" alt="" />
            </div>
            <h3 class="topic-title">AC Rent?</h3>
          </Navlink>
          <NavLink class="products topic text-center">
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img
                class="faq-image"
                src="@/assets/images/products.svg"
                alt=""
              />
            </div>
            <h3 class="topic-title">Products?</h3>
          </NavLink>
          <NavLink class="policy topic text-center">
            <div
              class="image-container flex align-items-center justify-content-center"
            >
              <img class="faq-image" src="@/assets/images/policy.svg" alt="" />
            </div>
            <h3 class="topic-title">Policy?</h3>
          </NavLink>
        </div>
      </div>
      <div>
        <PagesFaqTabComponent />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.tab-with-content {
  background: var(--product-Front-color);
  padding: 0 410px;

  .tabs {
    position: absolute;
    top: -74px;
    .faq-topics {
      .topic {
        padding: 21px 32px;
        border-radius: 4px;
        background: var(--primary-color-white);
        box-shadow: 0px 4px 12px 1px rgba(164, 164, 164, 0.18);
        text-decoration: none;

        .image-container {
          margin-bottom: 12px;
          width: 70px;
          height: 70px;
          background-color: var(--product-Front-color);
          border-radius: 50%;
        }

        .topic-title {
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          color: var(--primary-color-envitect-sam-blue);
        }
      }
    }
  }
}
</style>
