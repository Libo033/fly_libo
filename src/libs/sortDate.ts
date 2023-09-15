import { IFly } from "./interfaces";

export const sortDate = (one: IFly, two: IFly) => {
  const oneSplit = one.data.split("-");
  const twoSplit = two.data.split("-");

  return (
    parseInt(oneSplit[0]) * 365 +
    parseInt(oneSplit[1]) * 30 +
    parseInt(oneSplit[2]) -
    (parseInt(twoSplit[0]) * 365 +
      parseInt(twoSplit[1]) * 30 +
      parseInt(twoSplit[2]))
  );
};
