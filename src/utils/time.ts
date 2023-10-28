export const calculateRemainingTime = (endTime: string | Date) => {
  const currentTime = new Date().getTime();
  const endTimeInMilliseconds = new Date(endTime).getTime();

  if (currentTime >= endTimeInMilliseconds) {
    return {
      remainingDays: 0,
      remainingHours: 0,
      remainingMinutes: 0,
      remainingSeconds: 0,
    };
  }

  const timeDifference = endTimeInMilliseconds - currentTime;

  const millisecondsInOneSecond = 1000;
  const millisecondsInOneMinute = 60 * millisecondsInOneSecond;
  const millisecondsInOneHour = 60 * millisecondsInOneMinute;
  const millisecondsInOneDay = 24 * millisecondsInOneHour;

  const remainingDays = Math.floor(timeDifference / millisecondsInOneDay);
  const remainingHours = Math.floor(
    (timeDifference % millisecondsInOneDay) / millisecondsInOneHour,
  );
  const remainingMinutes = Math.floor(
    (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute,
  );
  const remainingSeconds = Math.floor(
    (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond,
  );

  return {
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  };
};
