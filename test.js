const { customSorting } = require("./sorting");
const { getPermutations } = require("./permutations");

/**
 * Testing Permutations
 */
describe("Unique Permutations Function", () => {
  test("Returns array of n length contains all permuatations of given array", () => {
    // Expected Permutations - [1,2], [2,1]
    expect(getPermutations([1, 2])).toHaveLength(2);

    // Expected Permutations - [1,2,3], [2,1,3], [3,2,1], [1,3,2], [3,1,2], [2,3,1]
    expect(getPermutations([1, 2, 3])).toHaveLength(6);

    // Expects 0 when input is undefined
    expect(getPermutations()).toHaveLength(0);
    // Expects 0 when input is an empty array
    expect(getPermutations([])).toHaveLength(0);
  });
});

/**
 * Testing Odd Even Sorting
 */
describe("Odd Even Numbers Custom Sorting", () => {
  test("Returns sorted array by custom odd even logics", () => {
    // Odd - 1,3,7 ,Even - 2,4,16
    expect(customSorting([1, 2, 3, 4, 7, 16])).toEqual([1, 3, 7, 2, 4, 16]);

    // Odd - 3,5,7 ,Even - 2,18
    expect(customSorting([5, 3, 2, 7, 18])).toEqual([3, 5, 7, 2, 18]);

    // Odd - 3,5,7 ,Even - null
    expect(customSorting([9, 13, 5])).toEqual([5, 9, 13]);

    // Expects 0 when input is undefined
    expect(customSorting()).toEqual([]);
    // Expects 0 when input is an empty array
    expect(customSorting([])).toEqual([]);
  });
});
