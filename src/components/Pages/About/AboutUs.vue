<script lang="ts" setup></script>

<template>
  <div class="aboutUs container">
    <div class="employes">
      <div class="employes-btn">
        <button type="button">
          Our Team
        </button>
      </div>
      <img src="~/assets/images/about-us.png" alt="employ">
    </div>
    <div class="ac-service">
      <h3>About Us AC Service</h3>
      <p>
        AC Service BD is a leading AC Sales, AC installation, AC repair & AC
        Rent company in Bangladesh. AC Service BD started its journey in 2006.
        AC Service BD owns the most diverse access on AC market in the country
        with various service such as AC Sales, installation, repair & Rent. AC
        Service BD has an expert team and well-known engineers. AC Service BD
        hopes is to achieve any challenging goal of AC field. Our clients are
        Hospitals, Group of companies, Markets, Bank, Shopping Mall,
        Multinational Organization, University, Governments project, Tender
        Work, and the private business sector and so on.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aboutUs {
  .employes {
    position: relative;
    .employes-btn {
      width: 100%;
      position: absolute;
      display: flex;
      top: 20px;
      justify-content: center;
      button {
        padding: 15px 70px;
        font-size: 36px;
        font-weight: 700;
        line-height: 44px;
        border: none;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.2);
        color: var(--primary-color-white);
        @media screen and (min-width: 425px) {
          padding: 5px 20px;
          font-size: 20px;
        }
      }
    }

    img {
      width: 100%;
      height: 35vh;

      @media screen and (min-width: 768px) {
        height: 45vh;
      }
      @media screen and (min-width: 1024px) {
        height: 50vh;
      }
    }
  }
  .ac-service {
    h3 {
      font-size: 20px;
      font-weight: 700;
      line-height: 44px;
      margin-bottom: 0;
      text-align: center;
      padding-top: 32px;
      padding-bottom: 16px;
      color: var(--primary-color-navy-blue);

      @media screen and (max-width: 768px) {
        font-size: 25px;
        padding-top: 16px;
        padding-bottom: 8px;
      }
      @media screen and (min-width: 1024px) {
        font-size: 36px;
      }
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      color: var(--primary-color-dark-gray);
      @media screen and (min-width: 1024px) {
        font-size: 16px;
        text-align: start;
        padding: 0 10px;
      }
    }
  }
}
</style>
