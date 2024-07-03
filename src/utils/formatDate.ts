export const formatDate = (inputDate: string) => {
  const inputDateObj = new Date(inputDate);
  const year = inputDateObj.getUTCFullYear();
  const month = inputDateObj.getUTCMonth();
  const day = inputDateObj.getUTCDate();

  // Convert month number to month name
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[month];

  // Convert day to include 'st', 'nd', 'rd', or 'th'
  let daySuffix: string;
  if (day >= 11 && day <= 13) {
    daySuffix = "th";
  } else {
    switch (day % 10) {
      case 1:
        daySuffix = "st";
        break;
      case 2:
        daySuffix = "nd";
        break;
      case 3:
        daySuffix = "rd";
        break;
      default:
        daySuffix = "th";
    }
  }
  return `${day}${daySuffix} ${monthName}, ${year}`;
};
