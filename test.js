const { customSorting } = require("./sorting");
const { getPermutations } = require("./permutations");

describe("Unique Permutations Function", () => {
  test("Returns array of n length contains all permuatations of given array", () => {
    expect(getPermutations([1, 2])).toHaveLength(2);
    expect(getPermutations([1, 2, 3])).toHaveLength(6);
  });
});

describe("Odd Even Numbers Custom Sorting", () => {
  test("Returns sorted array by custom odd even logics", () => {
    expect(customSorting([1, 2, 3, 4, 7, 16])).toEqual([1, 3, 7, 2, 4, 16]);
    expect(customSorting([5, 3, 2, 7, 18])).toEqual([3, 5, 7, 2, 18]);
  });
});
