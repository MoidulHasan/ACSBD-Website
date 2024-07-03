<template>
  <div class="making-technology container">
    <h2>Making Technology Again Working for You</h2>
    <div class="technologies-container">
      <div class="technologies">
        <img src="/images/client-first.png" alt="client" />
        <div class="service-type">
          <h3>Client First</h3>
          <h3>Always</h3>
        </div>
      </div>

      <div class="technologies">
        <img src="/images/people-strength.png" alt="client" />
        <div class="service-type">
          <h3>Our People Our</h3>
          <h3>Strength</h3>
        </div>
      </div>

      <div class="technologies">
        <img src="/images/quality-policy.png" alt="client" />
        <div class="service-type">
          <h3>Quality Policy Not</h3>
          <h3>Negotiable</h3>
        </div>
      </div>

      <div class="technologies">
        <img src="/images/experience.png" />
        <div class="service-type">
          <h3>Excelence We give</h3>
          <h3>our best</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.making-technology {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    padding-bottom: 36px;
    color: var(--primary-color-navy-blue);
    text-align: center;
    @media only screen and (max-width: 780px) {
      font-size: 20px;
      line-height: 28px;
      padding-bottom: 16px;
    }
  }
  .technologies-container {
    display: grid;
    /* background: #e9e0e0; */
    width: 100%;
    grid-template-columns: auto auto;
    align-self: center;
    @media only screen and (min-width: 425px) {
      width: 400px;
    }
    @media only screen and (min-width: 768px) {
      width: 500px;
      margin-left: 30px;
    }
    @media only screen and (min-width: 1024px) {
      width: 900px;
      grid-template-columns: auto auto auto auto;
    }
    @media only screen and (min-width: 1280px) {
      width: 1100px;
      grid-template-columns: auto auto auto auto;
    }
    .technologies {
      width: 200px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      img {
        width: 70px;
        height: 70px;
      }
      .service-type {
        h3 {
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          color: var(--primary-color-dark-gray);
          opacity: 0.7;
          @media only screen and (max-width: 780px) {
            font-size: 14px;
            line-height: 28px;
          }
        }

        h3:last-child {
          margin-top: -8px;
          @media only screen and (min-width: 780px) {
            margin-top: 0px;
          }
          @media only screen and (max-width: 780px) {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
