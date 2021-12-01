import isEmpty from "../src/isEmpty";

const testPerson = {
        name: "matti",
        age: 28,
        motivation: false
    };

const emptyTestPerson = {
};

describe("Checks if `value` is an empty object, collection, map, or set. Objects are considered empty if they have no own enumerable string keyed properties. Array-like values such as `arguments` objects, arrays, buffers, strings, or jQuery-like collections are considered empty if they have a `length` of `0`. Similarly, maps and sets are considered empty if they have a `size` of `0`.", () => {

  test("Null value.", () => {
    expect(isEmpty(null)).toStrictEqual(true);
  });

  test("Boolean value as true.", () => {
    expect(isEmpty(true)).toStrictEqual(true);
  });

  test("Boolean value as false.", () => {
    expect(isEmpty(false)).toStrictEqual(true);
  });

  test("Number.", () => {
    expect(isEmpty(1)).toStrictEqual(true);
  });

  test("Array.", () => {
    expect(isEmpty([1, 2, 3])).toStrictEqual(false);
  });

  test("Empty array.", () => {
    expect(isEmpty([])).toStrictEqual(true);
  });

  test("String.", () => {
    expect(isEmpty('abc')).toStrictEqual(false);
  });

  test("Empty string.", () => {
    expect(isEmpty('')).toStrictEqual(true);
  });

  test("Map.", () => {
    expect(isEmpty({ 'a': 1 })).toStrictEqual(false);
  });
  test("Empty Map.", () => {
    expect(isEmpty({})).toStrictEqual(true);
  });
  test("Empty Object.", () => {
    expect(isEmpty(emptyTestPerson)).toStrictEqual(true);
  });
  test("Object.", () => {
    expect(isEmpty(testPerson)).toStrictEqual(false);
  });
 

});