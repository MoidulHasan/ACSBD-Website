<template>
  <div class="mission-vision-container">
    <div class="mission-vision container">
      <div class="mission">
        <img src="/images/mission.svg" alt="mission" />
        <div class="mission-text">
          <h3>Mission</h3>
          <p>
            Our Mission is to the corporate culture of Reliability, Integrity,
            Consistency, and Efficiency (RICE), and it will continue to be the
            support pillars that will enable us to hasten delivery of our
            products and services to our valued clients with the highest quality
            possible.
          </p>
        </div>
      </div>
      <div class="vision">
        <img src="/images/vision.png" alt="vision" />
        <div class="vision-text">
          <h3>Vision</h3>
          <p>
            Our VISION is to provide quality support to our valued customer in
            AC Installation, AC Repair, AC Rent and Sell any kinds of branded AC
            in our customers. Customers satisfaction is our first priority.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.mission-vision-container {
  background-color: var(--product-Front-color);
  padding: 40px 0;
  .mission-vision {
    display: flex;
    align-items: start;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
    .mission {
      padding-right: 15px;
    }
    .vision {
      padding-left: 15px;
      @media only screen and (max-width: 768px) {
        padding-left: 0px;
        margin-top: 24px;
      }
    }
    .mission,
    .vision {
      display: flex;
      align-items: start;
      justify-content: space-between;
      width: 50%;
      padding: 0 10px;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
      img {
        width: 60px;
      }
      .mission-text,
      .vision-text {
        margin-left: 24px;
        margin-top: -6px;

        h3 {
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
        }
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          color: var(--primary-color-dark-gray);
          @media only screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
