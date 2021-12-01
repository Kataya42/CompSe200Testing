import reduce from "../src/reduce";

describe("Reduces `collection` to a value which is the accumulated result of running each element in `collection` thru `iteratee`, where each successive invocation is supplied the return value of the previous. If `accumulator` is not given, the first element of `collection` is used as the initial value. The iteratee is invoked with four arguments: (accumulator, value, index|key, collection).", () => {

  test("Array as collection, sum function as iteratee.", () => {
    expect(reduce([1, 2], (sum, n) => sum + n, 0)).toStrictEqual(3);
  });

  test("Map as collection, function as iteratee.", () => {
    expect(
      reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
          (result[value] || (result[value] = [])).push(key)
          return result
      }, {})
    ).toStrictEqual({ '1': ['a', 'c'], '2': ['b'] });
    /*
     * Iteration order is not quaranteed so maybe 'toBe' should be used here instead of 'toStrictEqual'
     * but it causes the test to fail with a response: 'serializes to the same string'.
     */
  });

});