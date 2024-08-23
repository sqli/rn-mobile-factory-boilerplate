export const convertEnumToObject = <T extends string, V>(
  enumObject: Record<string, T>,
  fillValue: V,
): Record<T, V> => {
  const result: Record<T, V> = {} as Record<T, V>;
  Object.values(enumObject).forEach(key => {
    result[key] = fillValue;
  });
  return result;
};

export const deepCopy = (object: [] | object) => JSON.parse(JSON.stringify(object));
