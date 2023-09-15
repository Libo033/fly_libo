import { IFly } from "./interfaces";

export const filterOriDestPass = (
  fly: IFly,
  origin: string,
  destination: string,
  passengers: number
): boolean => {
  if (fly.origin !== origin) {
    return false;
  } else if (fly.destination !== destination) {
    return false;
  } else if (fly.availability <= passengers) {
    return false;
  } else {
    return true;
  }
};
