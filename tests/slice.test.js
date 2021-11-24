import slice from "../src/slice";

var array = [1, 2, 3, 4]
var emptyArray = []

describe("Creates a slice of `array` from `start` up to, but not including, `end`", () => {

  test("No elements", () => {
    expect(slice(array, 0)).toStrictEqual([1, 2, 3, 4]);
  });
  test("Two elements", () => {
    expect(slice(array, 2)).toStrictEqual([3, 4]);
  });
  test("Empty array", () => {
    expect(slice(emptyArray, 2)).toStrictEqual([]);
  });
  test("Entire array", () => {
    expect(slice(array, array.length)).toStrictEqual([]);
  });



});