import moment from "moment";
export const checkIfInOneHour = (departure: string) => {
  const now = moment();
  const timeToday = moment(departure, "HH:mm").set({
    year: now.year(),
    month: now.month(),
    date: now.date(),
  });

  if (timeToday.isBefore(now)) {
    return false;
  }

  const diffInMinutes = timeToday.diff(now, "minutes");
  return diffInMinutes > 0 && diffInMinutes <= 60;
};
