const chunk = require('../src/chunk.js');

test("Creates an array of elements split into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.", () => {
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toBe([['a', 'b'], ['c', 'd']]);
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toBe([['a', 'b', 'c'], ['d']]);
});