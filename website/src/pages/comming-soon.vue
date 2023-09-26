<template>
  <div class="comming-soon flex align-items-center justify-content-center">
    <div class="">
      <div class="image-container text-center">
        <img
          alt="comming soon"
          class="comming-soon-image"
          src="~/assets/images/comming_soon.svg"
        />
      </div>
      <div class="text-center">
        <h1 class="comming-soon-text">This page is comming soon...</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.comming-soon {
  min-height: 48.3vh;
}

.image-container {
  .comming-soon-image {
    max-height: 250px;
    max-width: 250px;
  }
}

.comming-soon-text {
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  color: var(--primary-color-envitect-sam-blue);
  text-align: center;
}

@media (max-width: 900px) {
  .image-container {
    .comming-soon-image {
      max-height: 200px;
      max-width: 200px;
      margin-left: 1rem;
    }
  }
}
</style>
