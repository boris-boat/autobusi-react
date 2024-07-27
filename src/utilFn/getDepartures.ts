import { checkIfInOneHour } from "./checkIfIsInOneHours";
import moment from "moment";
export const getDepartures = (allBussesData) => {
  let filteredDepartures = [];
  let allBusses = Object.entries(allBussesData);
  allBusses.forEach((bus) => {
    const tmp = bus[1].starts
      .filter((departure) => checkIfInOneHour(departure))
      .map((departure) => {
        return {
          bus: bus[0],
          time: departure,
        };
      });
    filteredDepartures.push(...tmp);
  });
  filteredDepartures.sort((a, b) => {
    const numA = parseInt(a.time.replace(":", ""), 10);
    const numB = parseInt(b.time.replace(":", ""), 10);
    return numA - numB;
  });
  return filteredDepartures;
};
