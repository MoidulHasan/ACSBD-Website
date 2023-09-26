import { calculateRemainingTime } from "~/utils/time";

export const useTimeCounter = (countDownToTime: Date | string) => {
  const remainingDay = ref(null);
  const remainingHour = ref(null);
  const remainingMinute = ref(null);
  const remainingSecond = ref(null);

  const updateCountdown = () => {
    if (!calculateRemainingTime) {
      return;
    }

    const {
      remainingDays,
      remainingHours,
      remainingMinutes,
      remainingSeconds,
    } = calculateRemainingTime(countDownToTime);

    remainingDay.value = remainingDays;
    remainingHour.value = remainingHours;
    remainingMinute.value = remainingMinutes;
    remainingSecond.value = remainingSeconds;
  };

  const formattedRemainingTime = computed(() => {
    return `${remainingDay.value} days, ${remainingHour.value} hours, ${remainingMinute.value} minutes, ${remainingSecond.value} seconds`;
  });

  watch(
    () => formattedRemainingTime.value,
    () => {
      const intervalId = setInterval(updateCountdown, 1000);
      return () => clearInterval(intervalId);
    },
    { immediate: true },
  );

  return {
    remainingDay,
    remainingHour,
    remainingMinute,
    remainingSecond,
    formattedRemainingTime,
  };
};
