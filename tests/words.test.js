import words from "../src/words";

var array = ['fred, barney, pebbles'];
var array2 = ['fred, barney, & pebbles', /[^, ]+/g];
var emptyArray = [''];

describe("Splits `string` into an array of its words.", () => {

  test("comma split", () => {
    expect(words(array)).toStrictEqual(['fred', 'barney', 'pebbles']);
  });
  test("ampersand split", () => {
    expect(words(array2)).toStrictEqual(['fred', 'barney', '&', 'pebbles']);
  });
  test("Empty array", () => {
    expect(words(emptyArray)).toStrictEqual([]);
  });



});