export interface CalculatedPortion {
  amount?: number;
  originalPortion: number;
  multipliedPortion: number;
}

export const round = (value) => Math.round(value * 100) / 100;

export const calculatePortion = ({
  amount = 0,
  originalPortion = 1,
  multipliedPortion = 1,
}: CalculatedPortion) => {
  const onePortion = amount / originalPortion;
  if (originalPortion > multipliedPortion) {
    return round(onePortion * multipliedPortion);
  } else if (originalPortion < multipliedPortion) {
    return round(onePortion * multipliedPortion);
  } else {
    return amount;
  }
};

export const fractionStrToDecimal = (str) =>
  str.split("/").reduce((p, c) => p / c);

export const convertAmount = (amount: string): number | string => {
  let newAmount = amount;
  if (newAmount.includes("n.")) {
    newAmount = newAmount.replace("n.", "").trim();
  }
  if (newAmount.includes("/")) {
    if (newAmount.includes(" ")) {
      newAmount = newAmount
        .split(" ")
        .map((p) => (p.includes("/") ? fractionStrToDecimal(p.trim()) : p))
        .filter((p) => !isNaN(p))
        .reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    } else {
      newAmount = fractionStrToDecimal(newAmount);
    }
  } else if (newAmount.includes("-")) {
    newAmount = newAmount.split("-")[0];
  } else if (newAmount.includes(",")) {
    newAmount = newAmount.replace(",", ".");
  }

  if (isNaN(newAmount) || !newAmount.toString().length) {
    newAmount = "";
  } else {
    newAmount = parseFloat(newAmount);
  }

  return newAmount;
};
