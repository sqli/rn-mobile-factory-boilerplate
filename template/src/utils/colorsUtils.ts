export const getColorWithOpacity = (opacity: number, color: string) => {
  const decimalValue = Math.round((255 * opacity) / 100);
  const hexadecimalValue = decimalValue.toString(16).toUpperCase();
  return color + hexadecimalValue;
};
