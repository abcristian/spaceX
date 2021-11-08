export const getActualDate = (timestamp: number) => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const date = dateObject.getDate();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();
  return `${date}/${month}/${year}`;
};
