import countBy from "../src/countBy";

const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
     ]

describe(" Creates an object composed of keys generated from the results of running each element of `collection` thru `iteratee`", () => {

    
  test("!REQUIRED!", () => {
    expect(countBy(users, value => value.active)).toStrictEqual({"true": 2, "false": 1})
  });


});