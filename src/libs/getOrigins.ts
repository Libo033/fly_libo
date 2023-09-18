import { IFly } from "./interfaces";

export const getOrigins = (array: IFly[]): string[] => {
  let setDeVuelos: Set<string> = new Set();

  array.forEach((fly) => {
    setDeVuelos.add(fly.origin);
  });

  return Array.from(setDeVuelos);
};
