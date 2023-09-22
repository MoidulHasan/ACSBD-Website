<template>
  <div class="core-container container grid">
    <div class="core-header-mobile block lg:hidden">
      <h3 class="text-center">Our Core Value</h3>
      <p class="text-center">
        We always try to happy our customers with our best services. AC
        Installation, Servicing, Repair, Maintenance, AC Sales & AC Rent Service
        All over Bangladesh is now available at AC SERVICE. Our 45 expert
        technicians always try to find out your Air Conditioner problem in a
        short time and solved it in a short time.
      </p>
    </div>
    <div class="core-image col-12 lg:col-6">
      <img src="/images/oioioioi 1.png" alt="" />
    </div>
    <div class="core-values col-12 lg:col-6">
      <div class="core-header hidden lg:block">
        <h3>Our Core Values</h3>
        <p>
          We always try to happy our customers with our best services. AC
          Installation, Servicing, Repair, Maintenance, AC Sales & AC Rent
          Service All over Bangladesh is now available at AC SERVICE. Our 45
          expert technicians always try to find out your Air Conditioner problem
          in a short time and solved it in a short time.
        </p>
      </div>
      <!-- great-services  -->
      <div class="core-values-provide flex aligin-items-center">
        <div class="core-values-provide-image">
          <img src="/images/great services.png" alt="great-services" />
        </div>
        <div class="core-great-header">
          <h2>Great Services</h2>
          <p>
            We provide our customers great services with our 45 expert
            technicians team.
          </p>
        </div>
      </div>
      <!-- highest standards -->
      <div class="core-values-provide flex aligin-items-center">
        <div class="core-values-provide-image">
          <img src="/images/highest standards.png" alt="great-services" />
        </div>
        <div class="core-great-header">
          <h2>highest standards</h2>
          <p>
            Our expert technicians team always follows the highest standard &
            rules for your service yours...
          </p>
        </div>
      </div>
      <!-- professional team  -->
      <div class="core-values-provide flex aligin-items-center">
        <div class="core-values-provide-image">
          <img src="/images/professional team.svg" alt="great-services" />
        </div>
        <div class="core-great-header">
          <h2>Professional Team</h2>
          <p>
            We have 20 Professional Teams for services your any kind of Air
            Conditioner solution.
          </p>
        </div>
      </div>
      <!-- creative solutions -->
      <div class="core-values-provide flex aligin-items-center">
        <div class="core-values-provide-image">
          <img src="/images/creative solutions.svg" alt="great-services" />
        </div>
        <div class="core-great-header">
          <h2>creative Solutions</h2>
          <p>
            After visiting your home or office. Our Creative team provides you
            best solution for you.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.core-container {
  padding: 30px 0;
  @media screen and (min-width: 375px) {
    padding: 20px 10px;
  }
  @media screen and (min-width: 768px) {
    padding: 0px 10px;
  }
  @media screen and (min-width: 1024px) {
    padding: 0px 10px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0px 0px;
  }
  .core-header-mobile {
    h3 {
      color: var(--primary-color-navy-blue);
      font-size: 36px;
      font-weight: 700;
      line-height: 44px;
      letter-spacing: 0em;
      text-align: left;
    }
    p {
      margin-top: -20px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }
    @media screen and (min-width: 375px) {
      h3 {
        font-size: 24px;
      }
      p {
        font-size: 14;
        font-weight: 400;
        line-height: 20px;
        opacity: 0.8;
      }
    }
    @media screen and (min-width: 768px) {
      h3 {
        font-size: 26px;
      }
      p {
        font-size: 18x;
        line-height: 24px;
        opacity: 0.8;
      }
    }

    @media screen and (min-width: 1024px) {
      h3 {
        font-size: 360px;
      }
      p {
        font-size: 18x;
        line-height: 24px;
        opacity: 0.8;
      }
    }
  }
  .core-image {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 95%;
      @media screen and (min-width: 375px) {
        width: 70%;
      }
      @media screen and (min-width: 768px) {
        width: 60%;
      }
      @media screen and (min-width: 1024px) and (max-width: 1280px) {
        width: 80%;
      }
    }
  }
  .core-values {
    margin-top: -20px;
    height: auto;

    .core-header {
      h3 {
        color: var(--primary-color-navy-blue);
        font-size: 36px;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 0em;
        text-align: left;
      }
      p {
        margin-top: -20px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    .core-values-provide {
      width: 70%;
      margin-top: 18px;
      @media screen and (min-width: 375px) {
        width: 100%;
      }
      .core-values-provide-image img {
        width: 50px;
        height: 50px;
        border-radius: 2px;
        @media screen and (min-width: 375px) and (max-width: 1280px) {
          width: 40px;
          height: 40px;
        }
        @media screen and (min-width: 1280px) {
          width: 50px;
          height: 50px;
        }
      }
      .core-great-header {
        position: relative;
        margin-top: -26px;
        margin-left: 25px;
        @media screen and (min-width: 375px) {
          margin-top: -21px;
          margin-left: 15px;
        }
        @media screen and (min-width: 768px) {
          margin-top: -22px;
        }
        @media screen and (min-width: 1280px) {
          margin-top: -26px;
        }
        h2 {
          color: var(--primary-color-navy-blue);
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
          letter-spacing: 0em;
          text-align: left;
          @media screen and (min-width: 375px) {
            font-size: 18px;
            line-height: 26px;
          }
          @media screen and (min-width: 768px) {
            font-size: 20px;
            line-height: 26px;
            /* margin-bottom: 0.5px; */
            padding-bottom: 2px;
          }
        }
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          margin-top: -18px;
          @media screen and (min-width: 375px) {
            font-size: 12px;
            line-height: 18px;
            padding-top: 2px;
          }
          @media screen and (min-width: 768px) {
            font-size: 15px;
            line-height: 18px;
          }
        }
      }
    }
  }
}
</style>
