import moment from "moment";

export const getTodayType = () => {
  const today = moment();

  const dayOfWeek = today.day();

  if (dayOfWeek === 0) {
    return "sunday";
  } else if (dayOfWeek === 6) {
    return "saturday";
  } else {
    return "workingDay";
  }
};
