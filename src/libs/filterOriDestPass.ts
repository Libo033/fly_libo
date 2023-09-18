import { getDateValue } from "./getDateValue";
import { IFly } from "./interfaces";

export const filterOriDestPass = (
  fly: IFly,
  origin: string,
  destination: string,
  passengers: number,
  date: number = 0
): boolean => {
  if (fly.origin !== origin) {
    return false;
  } else if (fly.destination !== destination) {
    return false;
  } else if (fly.availability <= passengers) {
    return false;
  } else if (date !== 0 && getDateValue(fly.data) < date + 1) {
    return false;
  } else {
    return true;
  }
};
