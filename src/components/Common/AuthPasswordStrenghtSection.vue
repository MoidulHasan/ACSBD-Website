<script setup lang="ts">
const props = defineProps<{
  password: string;
}>();
const emit = defineEmits<{
  (e: "updateStrength", value: number): void;
}>();

const strength = ref(0);
const progressBar = ref(null);
const upperCase = ref(null);
const lowerCase = ref(null);
const digit = ref(null);
const length = ref(null);
const special = ref(null);

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

watch(
  () => props.password,
  (newVal) => {
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
    emit("updateStrength", strength.value);
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
  },
);
</script>

<template>
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
          <span class="pl-2">Include at least one Uppercase letter (A-Z)</span>
        </li>
        <li
          ref="lowerCase"
          class="requirement lowerCase mb-2 flex align-items-center justify-center"
        >
          <i class="pi pi-check-circle" />
          <span class="pl-2">Include at least one lowercase letter (a-z)</span>
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
          <span class="pl-2">Include at least one special character</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.strength_container {
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
}
</style>
