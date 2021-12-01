import chunk from '../src/chunk.js';

describe("Creates an array of elements split into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements." , () => {

  test("Dividing the array by two.",  () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
  });

  test("Dividing the array by three.",  () => {
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
  });

  test("Empty array.",  () => {
    expect(chunk([], 2)).toStrictEqual([]);
  });
  
});