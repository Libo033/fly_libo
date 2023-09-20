export const formatDate = (date: string): string => {
  let dateSplited = date.split("-");

  return dateSplited[2] + "/" + dateSplited[1] + "/" + dateSplited[0];
};
