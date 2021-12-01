import slice from "../src/slice";

var array = [1, 2, 3, 4]
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var emptyArray = []

describe("Creates a slice of `array` from `start` up to, but not including, `end`", () => {

  test("Four elements, slice size zero", () => {
    expect(slice(array, 0)).toStrictEqual([1, 2, 3, 4]);
  });

  test("Four elements, slice size two", () => {
    expect(slice(array, 2)).toStrictEqual([3, 4]);
  });

  test("Nine elements, slice size two", () => {
    expect(slice(array2, 2)).toStrictEqual([3, 4, 5, 6, 7, 8, 9]);
  });

  test("Nine elements, slice size four", () => {
    expect(slice(array2, 4)).toStrictEqual([5, 6, 7, 8, 9]);
  });

  test("Nine elements, slice size six", () => {
    expect(slice(array2, 6)).toStrictEqual([7, 8, 9]);
  });

  test("Empty array, slice size two", () => {
    expect(slice(emptyArray, 2)).toStrictEqual([]);
  });

  test("Entire array, slice size array length", () => {
    expect(slice(array, array.length)).toStrictEqual([]);
  });

  test("null container", () => {
    expect(slice(null, 4)).toStrictEqual([]);
  });

  test("null slice size", () => {
    expect(slice(array, null)).toStrictEqual(array);
  });

  test("starting point a negative number", () => {
    expect(slice(array, -2)).toStrictEqual([3,4]);
  });

  test("slice larger than array", () => {
    expect(slice(array, 5)).toStrictEqual([]);
  });



});