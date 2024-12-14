export const currency = (number, decimals = 0) => {
  const currency = new Intl.NumberFormat(navigator.language, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    style: "currency",
    currency: "IDR"
  });

  return currency.format(number);
};