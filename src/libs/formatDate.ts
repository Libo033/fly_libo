export const formatDate = (date: string): string => {
  let newDate: string = "";
  let dateSplited = date.split("-");

  newDate = dateSplited[2] + "/" + dateSplited[1] + "/" + dateSplited[0];

  return newDate;
};
