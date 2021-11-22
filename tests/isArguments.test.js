import isArguments from "../src/isArguments";

describe("Checks if `value` is likely an `arguments` object.", () => {

  test("Arguments object.", () => {
    expect(isArguments(function() { return arguments }())).toStrictEqual(true);
  });

  test("Non-arguments object.", () => {
    expect(isArguments([1, 2, 3])).toStrictEqual(false);
  });

  test("Non-object.", () => {
    expect(isArguments(undefined)).toStrictEqual(false);
  });

});