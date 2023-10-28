<script setup lang="ts">
definePageMeta({
  title: "Registration",
});

const passfield = ref(null);
const email = ref("");
const password = ref("");
const strength = ref(0);
const progressBar = ref(null);
const upperCase = ref(null);
const lowerCase = ref(null);
const digit = ref(null);
const length = ref(null);
const special = ref(null);
const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const criterias = reactive([
  { id: 1, ref: length, regex: /^(?=.{8,})/ },
  { id: 2, ref: upperCase, regex: /[A-Z]/ },
  { id: 3, ref: digit, regex: /\d/ },
  { id: 4, ref: lowerCase, regex: /[a-z]/ },
  { id: 5, ref: special, regex: /(?=(.*[!@#$%^&*()\-_+.]){1,})/ },
]);

const setProgressClass = (state: string) => {
  progressBar.value.classList.value = `progressBar ${state}`;
};

const emailSatisfied = ref(true);

const emailRegex =
  /^(?=.{1,256}$)(?=.{1,64}@.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateEmail = () => {
  emailSatisfied.value = emailRegex.test(email.value);
};

watch(password, (newVal) => {
  criterias.forEach((criteria) => {
    const satisfied = newVal && criteria.regex.test(newVal);
    satisfied
      ? criteria.ref?.classList.add("active")
      : criteria.ref?.classList.remove("active");
  });
  strength.value = criterias.reduce(
    (sum, item) => (sum += item.ref?.classList.contains("active") ? 1 : 0),
    0,
  );

  switch (strength.value) {
    case 1:
      setProgressClass("bad");
      break;
    case 2:
      setProgressClass("weak");
      break;
    case 3:
      setProgressClass("medium");
      break;
    case 4:
      setProgressClass("semi-strong");
      break;
    case 5:
      setProgressClass("strong");
      break;
    default:
      setProgressClass("");
      break;
  }
});
</script>

<template>
  <div>
    <CommonAuthFormSection
      form-title="Let’s get you started!"
      form-sub-title="First let’s create your Jicson acount with dulalux@gmail.com"
      form-icon
    >
      <template #innerContent>
        <form class="registration-form">
          <div class="mb-4">
            <CommonAuthTextInput
              type="email"
              placeholder-text="Enter Email"
              @update:text="email = $event"
              @input="validateEmail"
            />
            <transition name="error-message">
              <p v-if="!emailSatisfied && email" class="error-message mt-1">
                Invalid Email Address
              </p>
            </transition>
          </div>

          <div class="password-input mb-3">
            <InputText
              ref="passfield"
              v-model="password"
              class="password basic-input w-full"
              :type="isOpen ? 'text' : 'password'"
              placeholder="password"
            />
            <i
              class="pi showIcon"
              :class="[isOpen ? 'pi-eye' : 'pi-eye-slash']"
              @click="toggleOpen"
            />
          </div>
          <div class="strength_container">
            <h2 class="strength-text">Password strenght</h2>
            <div class="progressBar_container my-2">
              <div ref="progressBar" class="progressBar"></div>
            </div>
            <div class="requirements">
              <h2 class="strength-text">Password must contain:</h2>
              <ul class="requirement-lists mt-2 mb-5">
                <li
                  ref="length"
                  class="requirement length mb-2 flex align-items-center justify-center"
                >
                  <i class="pi pi-check-circle" />
                  <span class="pl-2">Be a Min of 8 Charecters</span>
                </li>
                <li
                  ref="upperCase"
                  class="requirement upperCase mb-2 flex align-items-center justify-center"
                >
                  <i class="pi pi-check-circle" />
                  <span class="pl-2"
                    >Include at least one Uppercase letter (A-Z)</span
                  >
                </li>
                <li
                  ref="lowerCase"
                  class="requirement lowerCase mb-2 flex align-items-center justify-center"
                >
                  <i class="pi pi-check-circle" />
                  <span class="pl-2"
                    >Include at least one lowercase letter (a-z)</span
                  >
                </li>
                <li
                  ref="digit"
                  class="requirement number mb-2 flex align-items-center justify-center"
                >
                  <i class="pi pi-check-circle" />
                  <span class="pl-2">Include at least one number (0-9)</span>
                </li>
                <li
                  ref="special"
                  class="requirement special flex align-items-center justify-center"
                >
                  <i class="pi pi-check-circle" />
                  <span class="pl-2"
                    >Include at least one special character</span
                  >
                </li>
              </ul>
            </div>
          </div>
          <Button
            type="submit"
            class="auth-button w-full"
            :disabled="strength !== 5 && !email"
          >
            Create Account
          </Button>
        </form>
      </template>
    </CommonAuthFormSection>
  </div>
</template>

<style scoped lang="scss">
.registration-form {
  .basic-input {
    padding: 18px 16px;
    border-radius: 4px;
    border: 1px solid #dcdae8;
    color: #808080;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &:focus {
      color: #000;
    }
  }
  .error-message {
    color: var(--color-danger);
  }

  .password-input {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .showIcon {
    width: 24px !important;
    height: 16px !important;
    color: var(--dark-gray-90);
    margin-left: -2rem;
    cursor: pointer;
  }

  .strength-text {
    color: #808080;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }

  .progressBar_container {
    height: 6px;
    border-radius: 24px;
    background: #d9d9d9;
    width: 100%;
  }

  .progressBar {
    transition: 0.6s;
    content: "";
    width: 0;
    height: 6px;
    border-radius: 4px;
    &.bad {
      width: 20%;
      background-color: var(--color-danger);
    }
    &.weak {
      width: 40%;
      background-color: var(--color-orange);
    }
    &.medium {
      width: 60%;
      background-color: var(--color-warning);
    }
    &.semi-strong {
      width: 80%;
      background-color: #68d37c;
    }
    &.strong {
      width: 100%;
      background-color: var(--color-success);
    }
  }

  .requirement-lists {
    list-style: none;

    .requirement {
      color: #808080;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      transition: 0.6s;
      &.active {
        color: var(--color-success);
      }
    }
  }

  .auth-button {
    height: 50px;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    padding: 14px 16px;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    gap: 12px;
    background: var(--primary-color-envitect-sam-blue);
    color: var(--primary-color-white);
  }
}

.error-message-enter-active,
.error-message-leave-active {
  transition: opacity 0.6s ease;
}

.error-message-enter-from,
.error-message-leave-to {
  opacity: 0;
}
</style>
