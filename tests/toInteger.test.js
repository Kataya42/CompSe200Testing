import toInteger from "../src/toInteger";

describe("Converts `value` to an integer", () => {

  test("Int", () => {
    expect(toInteger(2)).toBe(2);
  });

  test("Decimal", () => {
    expect(toInteger(3.2)).toBe(3);
  });
  test("Infinity", () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
  });
  test("Min value", () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  });
  test("string", () => {
    expect(toInteger("3")).toBe(3);
  });
  test("string and decimal", () => {
    expect(toInteger("3.2")).toBe(3);
  });

});