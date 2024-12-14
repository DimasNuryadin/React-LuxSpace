export const formatThousand = (number, decimals = 0) => {
  const thousand = new Intl.NumberFormat(navigator.language, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return thousand.format(number);
};
