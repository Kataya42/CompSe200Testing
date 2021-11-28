import difference from "../src/difference";

describe("Creates an array of `array` values not included in the other given arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) for equality comparisons. The order and references of result values are determined by the first array.", () => {

  test("Two arrays with one non-mutual value in the inspected array", () => {
    expect(difference([2,1], [2,3])).toStrictEqual([1]);
  });

  test("Two arrays with two non-mutual value in the inspected array.", () => {
    expect(difference([2,1,4,6], [2,3,6])).toStrictEqual([1,4]);
  });

  test("Two arrays with the exclusion array being empty.", () => {
    expect(difference([2,1], [])).toStrictEqual([2,1]);
  });

  test("Two arrays with the inspection array being empty.", () => {
    expect(difference([], [2,1])).toStrictEqual([]);
  });

  test("Inspection array being compared to non-array.", () => {
    expect(difference([2,1], 2)).toStrictEqual([2,1]);
  });

  test("Non-array being compared to proper exlusion array.", () => {
    expect(difference(2, [2,3])).toStrictEqual([]);
  });

  test("Two non-arrays being compared.", () => {
    expect(difference(2, 2)).toStrictEqual([]);
  });

});