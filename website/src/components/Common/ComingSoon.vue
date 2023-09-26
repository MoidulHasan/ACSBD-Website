<template>
  <div class="coming-soon flex align-items-center justify-content-center">
    <div class="">
      <div class="image-container text-center">
        <img
          alt="coming soon"
          class="coming-soon-image"
          src="~/assets/images/coming_soon.svg"
        />
      </div>
      <div class="text-center">
        <h1 class="coming-soon-text">This page is coming soon...</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.coming-soon {
  min-height: 48.3vh;
}

.image-container {
  .coming-soon-image {
    max-height: 250px;
    max-width: 250px;
  }
}

.coming-soon-text {
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  color: var(--primary-color-envitect-sam-blue);
  text-align: center;
}

@media (max-width: 900px) {
  .image-container {
    .coming-soon-image {
      max-height: 200px;
      max-width: 200px;
      margin-left: 1rem;
    }
  }
}
</style>
