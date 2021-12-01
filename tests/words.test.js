import words from "../src/words";

describe("Splits `string` into an array of its words.", () => {

  test("comma split", () => {
    expect(words('fred, barney, pebbles')).toStrictEqual(['fred', 'barney', 'pebbles']);
  });

  test("pattern defined", () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toStrictEqual(['fred', 'barney', '&', 'pebbles']);
  });

  test("Empty array", () => {
    expect(words("")).toStrictEqual([]);
  });




});