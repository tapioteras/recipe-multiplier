import { calculatePortion, convertAmount } from "../src/utils";

describe("calculate portion", () => {
  it("should calculate without difference", () =>
    expect(
      calculatePortion({
        amount: 200,
        originalPortion: 2,
        multipliedPortion: 2,
      })
    ).toEqual(200));
  it("should calculate with doubled portion", () =>
    expect(
      calculatePortion({
        amount: 200,
        originalPortion: 2,
        multipliedPortion: 4,
      })
    ).toEqual(400));
  it("should calculate with reduced portion", () =>
    expect(
      calculatePortion({
        amount: 200,
        originalPortion: 2,
        multipliedPortion: 1,
      })
    ).toEqual(100));
  it("should calculate with one portion", () =>
    expect(
      calculatePortion({
        amount: 0.5,
        originalPortion: 2,
        multipliedPortion: 1,
      })
    ).toEqual(0.25));
  it("should calculate with zero portion", () =>
    expect(
      calculatePortion({
        amount: 0.5,
        originalPortion: 2,
        multipliedPortion: 0,
      })
    ).toEqual(0));
  it("should calculate with a slight portion increase", () =>
    expect(
      calculatePortion({
        amount: 200,
        originalPortion: 2,
        multipliedPortion: 2.1,
      })
    ).toEqual(210));
  it("should calculate with a slight portion decrease", () =>
    expect(
      calculatePortion({
        amount: 200,
        originalPortion: 2,
        multipliedPortion: 1.9,
      })
    ).toEqual(190));
});

describe("convert amount", () => {
  it("should convert various amounts", () => {
    expect(convertAmount("1/2")).toEqual(0.5);
    expect(convertAmount("n. 1/2")).toEqual(0.5);
    expect(convertAmount("1")).toEqual(1);
    expect(convertAmount("ripaus")).toEqual("");
    expect(convertAmount("1 1/2")).toEqual(1.5);
    expect(convertAmount("n. 1 1/2")).toEqual(1.5);
    expect(convertAmount("1,5")).toEqual(1.5);
    expect(convertAmount("")).toEqual("");
    expect(convertAmount("n. 3")).toEqual(3);
  });
});
