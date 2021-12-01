import isEmpty from "../src/isEmpty";

describe("Checks if `value` is an empty object, collection, map, or set. Objects are considered empty if they have no own enumerable string keyed properties. Array-like values such as `arguments` objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a `length` of `0`. Similarly, maps and sets are considered empty if they have a `size` of `0`.", () => {

  test("Null value.", () => {
    expect(isEmpty(null)).toStrictEqual(true);
  });

  test("Boolean value as true.", () => {
    expect(isEmpty(true)).toStrictEqual(true);
  });

  test("Boolean value as false.", () => {
    expect(isEmpty(false)).toStrictEqual(false);
  });

  test("Integer", () => {
    expect(isEmpty(1)).toStrictEqual(false);
  });

  test("Array.", () => {
    expect(isEmpty([1, 2, 3])).toStrictEqual(false);
  });

  test("String.", () => {
    expect(isEmpty('abc')).toStrictEqual(false);
  });

  test("Map.", () => {
    expect(isEmpty({ 'a': 1 })).toStrictEqual(false);
  });

});