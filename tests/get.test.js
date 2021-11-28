import get from "../src/get";

describe("Gets the value at `path` of `object`. If the resolved value is `undefined`, the `defaultValue` is returned in its place.", () => {

  test("Defined value without set default value.", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(object, 'a[0].b.c')).toStrictEqual(3);
  });

  test("Defined value without set default value.", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(object, ['a', '0', 'b', 'c'])).toStrictEqual(3);
  });

  test("Undefined value with set default value.", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(object, 'a.b.c', 'default')).toStrictEqual('default');
  });

  test("Undefined value without set default value.", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(object, 'a.b.c')).toStrictEqual(undefined);
  });

  test("Defined value with set default value.", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] }
    expect(get(object, ['a', '0', 'b', 'c'], 'default')).toStrictEqual(3);
  });

});