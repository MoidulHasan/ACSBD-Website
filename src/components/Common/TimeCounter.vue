<template>
  <div class="flex gap-3">
    <div class="flex flex-column w-fit">
      <div
        class="time-box text-semi-bold-1 flex justify-content-center align-items-center"
      >
        {{ remainingDay }}
      </div>
      <p class="time-label text-semi-bold-5">Days</p>
    </div>

    <div class="flex flex-column w-fit">
      <div
        class="time-box text-semi-bold-1 flex justify-content-center align-items-center"
      >
        {{ remainingHour }}
      </div>
      <p class="time-label text-semi-bold-5">Hours</p>
    </div>

    <div class="flex flex-column w-fit">
      <div
        class="time-box text-semi-bold-1 flex justify-content-center align-items-center"
      >
        {{ remainingMinute }}
      </div>
      <p class="time-label text-semi-bold-5">Mins</p>
    </div>

    <div class="flex flex-column w-fit">
      <div
        class="time-box text-semi-bold-1 flex justify-content-center align-items-center"
      >
        {{ remainingSecond }}
      </div>
      <p class="time-label text-semi-bold-5">Secs</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  countDownToTime: string | Date;
}>();

const { remainingDay, remainingHour, remainingMinute, remainingSecond } =
  useTimeCounter(props.countDownToTime);
</script>

<style lang="scss" scoped>
.time-box {
  width: 100%;
  height: 32px;
  flex-shrink: 0;

  border-radius: 2px;
  background: var(--primary-color-envitect-sam-blue);

  color: var(--White-Color, #fff);
}

.time-label {
  margin-top: 5px;
  color: var(--dark-gray-80);
}

@media (max-width: 575.98px) {
  .time-box {
    width: 28.522px;
    height: 22.817px;
    flex-shrink: 0;
  }

  .time-label {
    font-size: 10px;
  }
}
</style>
