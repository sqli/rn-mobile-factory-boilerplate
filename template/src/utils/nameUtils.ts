export const getInitials = (firstName: string, lastName: string) =>
  (firstName[0] + lastName[0]).toUpperCase();

export const capitalizeAfterSpaceOrHyphen = (text: string) =>
  text.toLowerCase().replace(/(?:^|\s|-)([a-z])/g, match => match.toUpperCase());
