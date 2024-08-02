export const moneyFormater = (cent) => {
  return (Math.round(cent) / 100).toFixed(2);
};
