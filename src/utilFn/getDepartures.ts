/* eslint-disable @typescript-eslint/no-explicit-any */
import { checkIfInOneHour } from "./checkIfIsInOneHours";
export const getDepartures = (allBussesData: any) => {
  const filteredDepartures: { bus: string; time: string }[] = [];
  const allBusses = Object.entries(allBussesData);
  allBusses.forEach((bus: any) => {
    const tmp = bus[1].starts
      .filter((departure: string) => checkIfInOneHour(departure))
      .map((departure: string) => {
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
