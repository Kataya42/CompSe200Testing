import countBy from "../src/countBy";

const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
     ]

const users2 = [
    { 'user': 'barney', 'active': true },
    ]    
    
const users3 = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'mikko', 'active': false },
    { 'user': 'pekka', 'active': true },
    { 'user': 'tuomas', 'active': false }
    ]    
const usersEmpty = [{}]   

describe(" Creates an object composed of keys generated from the results of running each element of `collection` thru `iteratee`", () => {

  test("Three users", () => {
    expect(countBy(users, value => value.active)).toStrictEqual({"true": 2, "false": 1});
  });

  test("One user", () => {
    expect(countBy(users, value => value.active)).toStrictEqual({"true": 1, "false": 0});
  });

  test("Six Ussrs", () => {
    expect(countBy(users, value => value.active)).toStrictEqual({"true": 3, "false": 3});
  });

  test("Empty array", () => {
    expect(countBy(usersEmpty, value => value.active)).toStrictEqual({"true": 0, "false": 0});
  });

  test("Null", () => {
    expect(countBy(null, value => value.active)).toStrictEqual({"true": 0, "false": 0});
  });


});