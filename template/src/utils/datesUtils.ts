export const getDateInDDMMYYYY = (date: string) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  return `${day}.${month}.${year}`;
};

export const getTimestampFromString = (dateString: string) => new Date(dateString).getTime();

export const getIsDateBeforeAnother = (oneDate: string, anotherDate: string) =>
  getTimestampFromString(oneDate) < getTimestampFromString(anotherDate);

export const convertUTCDateToLocalDate = (date: Date) => {
  const newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  const offset = date.getTimezoneOffset() / 60;
  const hours = date.getHours();

  newDate.setHours(hours - offset);

  return newDate;
};
