import { IFly } from "./interfaces";

export const getDestinations = (array: IFly[], origin: string): string[] => {
  let setDeVuelos: Set<string> = new Set();

  let orden = array.filter((fly) => fly.origin === origin);

  orden.forEach((fly) => {
    setDeVuelos.add(fly.destination);
  });

  return Array.from(setDeVuelos);
};
