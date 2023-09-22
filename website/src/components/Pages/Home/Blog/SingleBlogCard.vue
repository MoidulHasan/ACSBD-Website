<template>
  <div class="card flex align-items-center justify-content-center py-8">
    <Card class="w-22rem">
      <!-- style="width: 348px; height: 524px" -->
      <template #header>
        <img alt="user header" src="/images/blog/blog-1.png" class="w-22rem" />
      </template>
      <template #content class="p-card-content">
        <div class="flex justify-content-between">
          <div>
            <p>AC Tips</p>
          </div>
          <div>
            <i class="pi pi-eye">5940 View(s)</i>
          </div>
        </div>
        <div>
          <h1 class="title">
            How to Figure out What Size Air Condition Will Cool a Room?
          </h1>
        </div>

        <p class="content">
          How to Figure out What Size Air Conditioner Will Cool a Room? to talk
          to you about the best way to conditioner you...
        </p>
      </template>
      <template #footer>
        <div class="flex">
          <p>Explore More</p>
          <i class="pi pi-arrow-right"></i>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.p-card-content {
  padding-top: 0px;
}
.title {
  color: var(--dark-gray-100, #565656);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
.content {
  color: var(--dark-gray-80, #787878);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}
</style>
