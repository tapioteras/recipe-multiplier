export interface CalculatedPortion {
  amount?: number;
  originalPortion: number;
  multipliedPortion: number;
}

export const round = (value) => Math.round(value * 100) / 100;

export const calculatePortion = ({
  amount = 0,
  originalPortion = 1,
  multipliedPortion = 0,
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
