import chunk from '../src/chunk.js';

test("Dividing the array by two.", () => {
  expect(chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([['a', 'b'], ['c', 'd']]);
});

test("Dividing the array by three.", () => {
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([['a', 'b', 'c'], ['d']]);
});

test("Empty array.", () => {
  expect(chunk([], 2)).toStrictEqual([]);
});