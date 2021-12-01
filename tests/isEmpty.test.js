import isEmpty from "../src/isEmpty";

const testPerson = {
        name: "matti",
        age: 28,
        motivation: false,
    };

function Student() {
    this.name = "John";
}
Student.prototype.age = 15;

const emptyTestPerson = {
};

function testfunc(){
    return "test";
};

const testMap = new Map([
    ["apples", 500]]
);
const emptyMap = new Map([]);

const testSet= new Set(["a","b","c"]);
var buf = Buffer.from('abc');

var arBuf = new ArrayBuffer(16);

const one = [1,2,3];
const two = [4, 5, 6];

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
  test("Buffer", () => {
    expect(isEmpty(buf)).toStrictEqual(false);
  });
  test("typed Buffer", () => {
    expect(isEmpty(arBuf)).toStrictEqual(true);
  });
  
  test("Integer array.", () => {
    expect(isEmpty([1, 2, 3])).toStrictEqual(false);
  });

  test("String array", () => {
    expect(isEmpty(["a", "b", "c"])).toStrictEqual(false);
  });
  test("function array", () => {
    expect(isEmpty([testfunc])).toStrictEqual(false);
  });
  test("Buffer array", () => {
    expect(isEmpty([buf])).toStrictEqual(false);
  });

  test("Arguments array", () => {
    expect(isEmpty([...one, ...two])).toStrictEqual(false);
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
    expect(isEmpty(testMap)).toStrictEqual(false);
  });
  test("Empty Map.", () => {
    expect(isEmpty(emptyMap)).toStrictEqual(true);
  });
  test("Empty Object.", () => {
    expect(isEmpty(emptyTestPerson)).toStrictEqual(true);
  });
  test("Object.", () => {
    expect(isEmpty(testPerson)).toStrictEqual(false);
  });
  test("function", () => {
    expect(isEmpty(testfunc)).toStrictEqual(true);
  });
  test("set", () => {
    expect(isEmpty(testSet)).toStrictEqual(false);
  });
  test("prototype", () => {
    expect(isEmpty(Student.prototype)).toStrictEqual(false);
  });

});