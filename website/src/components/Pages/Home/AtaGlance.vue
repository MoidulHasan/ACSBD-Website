<template>
  <div class="at-a-glance">
    <div class="bg-glance">
      <div class="container-glance container">
        <h2>AC Service at a Glance</h2>
        <div class="root-glance grid">
          <div class="service-expert-glance col-6 md:col-6 lg:col">
            <div class="icon-glance">
              <img src="/images/expert-technician.svg" alt="expert" />
            </div>
            <div class="count-glance">
              <span>45+</span>
              <p>Expert Technician</p>
            </div>
          </div>
          <div class="service-projects-glance col-6 md:col-6 lg:col">
            <div class="icon-glance">
              <img src="/images/complete-projects.svg" alt="expert" />
            </div>
            <div class="count-glance">
              <span>25000+</span>
              <p>Completed Projects</p>
            </div>
          </div>

          <div class="service-customers-glance col-6 md:col-6 lg:col">
            <div class="icon-glance">
              <img src="/images/happy-customers.svg" alt="expert" />
            </div>
            <div class="count-glance">
              <span>24600+</span>
              <p>Happy Customers</p>
            </div>
          </div>

          <div class="service-year-glance col-6 md:col-6 lg:col">
            <div class="icon-glance">
              <img src="/images/years-of-company.svg" alt="expert" />
            </div>
            <div class="count-glance">
              <span>16+</span>
              <p>Years of Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AtaGlance",
};
</script>
<style lang="scss">
.at-a-glance {
  color: var(--primary-color-white);
  background-image: url("/images/at-a-glance.png");
  background-size: cover;
  text-align: center;
  height: 300px;
  width: 100%;
  @media screen and (max-width: 1023px) {
    height: 420px;
    background-position: center;
  }
  @media screen and (max-width: 425px) {
    height: 350px;
    background-position: center;
  }
  .bg-glance {
    margin: 80px 0;
    width: 100%;
    height: 100%;
    background: rgba(29, 53, 102, 0.8);
    .container-glance {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-items: center;
      height: 100%;
      h2 {
        text-align: center;
        font-size: 28px;
        margin-top: 45px;
        @media screen and (max-width: 1023px) {
          font-size: 25px;
          margin-top: 30px;
        }
        @media screen and (max-width: 425px) {
          font-size: 15px;
        }
      }
      .root-glance {
        width: 100%;
        margin-top: 0px;
        .service-expert-glance,
        .service-customers-glance {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          .icon-glance {
            height: 50px;
            width: 50px;
            background: var(--primary-color-white);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            @media screen and (max-width: 425px) {
              width: 40px;
              height: 40px;
            }
            img {
              width: 25px;
              height: 25px;
              @media screen and (max-width: 425px) {
                width: 20px;
                height: 20px;
              }
            }
          }
          .count-glance {
            margin-top: 5px;
            & span {
              font-size: 25px;
              font-weight: 600;
              @media screen and (max-width: 425px) {
                font-size: 20px;
              }
            }
            p {
              margin-top: 0px;
              font-size: 15px;
              font-weight: 500;
              letter-spacing: 0.2px;
              @media screen and (max-width: 425px) {
                font-size: 13px;
              }
            }
          }
          &::before {
            content: "";
            position: absolute;
            width: 1.2px;
            height: 50%;
            background: linear-gradient(
              to top,
              #ffffff,
              rgba(29, 53, 102, 0.1)
            );
            top: 0;
            left: 3;
            right: 0;
            /* bottom: 0; */
          }
          &::after {
            content: "";
            position: absolute;
            width: 1.2px;
            height: 50%;
            background: linear-gradient(
              to bottom,
              #ffffff,
              rgba(29, 53, 102, 0.1)
            );
            left: 3;
            right: 0;
            bottom: 0;
          }
        }
        .service-projects-glance {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          .icon-glance {
            height: 50px;
            width: 50px;
            background: var(--primary-color-white);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            @media screen and (max-width: 425px) {
              width: 40px;
              height: 40px;
            }
            img {
              width: 25px;
              height: 25px;
              @media screen and (max-width: 425px) {
                width: 20px;
                height: 20px;
              }
            }
          }
          .count-glance {
            margin-top: 5px;
            & span {
              font-size: 25px;
              font-weight: 600;
              @media screen and (max-width: 425px) {
                font-size: 20px;
              }
            }
            p {
              margin-top: 0px;
              font-size: 15px;
              font-weight: 500;
              letter-spacing: 0.2px;
              @media screen and (max-width: 425px) {
                font-size: 13px;
              }
            }
          }
          @media screen and (min-width: 1024px) {
            &::before {
              content: "";
              position: absolute;
              width: 1.2px;
              height: 50%;
              background: linear-gradient(
                to top,
                #ffffff,
                rgba(29, 53, 102, 0.1)
              );
              top: 0;
              left: 3;
              right: 0;
            }
            &::after {
              content: "";
              position: absolute;
              width: 1.2px;
              height: 50%;
              background: linear-gradient(
                to bottom,
                #ffffff,
                rgba(29, 53, 102, 0.1)
              );
              left: 3;
              right: 0;
              bottom: 0;
            }
          }
        }
        .service-year-glance {
          display: flex;
          flex-direction: column;
          align-items: center;
          .icon-glance {
            height: 50px;
            width: 50px;
            background: var(--primary-color-white);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            @media screen and (max-width: 425px) {
              width: 40px;
              height: 40px;
            }
            img {
              width: 25px;
              height: 25px;
              @media screen and (max-width: 425px) {
                width: 20px;
                height: 20px;
              }
            }
          }
          .count-glance {
            margin-top: 5px;
            & span {
              font-size: 25px;
              font-weight: 600;
              @media screen and (max-width: 425px) {
                font-size: 20px;
              }
            }
            p {
              margin-top: 0px;
              font-size: 15px;
              font-weight: 500;
              letter-spacing: 0.2px;
              @media screen and (max-width: 425px) {
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
ss
