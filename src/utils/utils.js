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

export const handleTotalTable = (data) => {
  let grandTotal = 0;
  let totalEx = 0;
  let totalDiscountAmountWithVat = 0;
  let amountMultiplyPurchasePrice = 0;

  data.forEach((el) => {
    totalEx += el.totalEx || 0;
    grandTotal += el.total || 0;
    totalDiscountAmountWithVat += el.discountAmountWithVat || 0;
    amountMultiplyPurchasePrice += (el.amount || 0) * (el.purchasePrice || 0);
  });
  let totalVat = grandTotal - totalEx;
  let marginTotal =
    (((times(totalEx) - times(amountMultiplyPurchasePrice)) /
      times(amountMultiplyPurchasePrice)) *
      times(100)) /
    10;

  return {
    totalEx,
    totalVat,
    marginTotal,
    totalDiscountAmountWithVat,
    grandTotal,
  };
};
