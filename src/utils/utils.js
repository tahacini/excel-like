const x = 10;

export const times = (num) => num * x;

export const handleDiscount = (num1, num2) => {
  const result = (times(num1) - (times(num1) / times(100)) * times(num2)) / x;
  return result;
};

export const handleMargin = (num1, num2) => {
  const result = (((times(num1) - times(num2)) / times(num2)) * times(100)) / x;
  return result;
};

export const handleTotalEx = (num1, num2) => {
  const result = num1 * num2;
  return result;
};

export const handleTotal = (num1, num2) => {
  const result = (times(num1) * (times(num2) / times(100) + 1)) / x;
  return result;
};

export const handletotalWithoutDiscount = (num1, num2, num3) => {
  const result = num1 * num2 * (num3 / 100 + 1);
  return result;
};

export const handleDiscountAmountWithVat = (num1, num2) => {
  const result = (times(num1) - times(num2)) / x;
  return result;
};
