export const getDateValue = (value: string): number => {
  let valueSplitted = value.split("-");

  return (
    parseInt(valueSplitted[0]) * 365 +
    parseInt(valueSplitted[1]) * 30 +
    parseInt(valueSplitted[2])
  );
};
