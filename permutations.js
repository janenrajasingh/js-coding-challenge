/**
 *
 * @param {array} inputArr Array having the elements
 * @returns {array} Returns the multiple dimension array which has the permutations of given array
 */
module.exports.getPermutations = (inputArr = []) => {
  const resultArr = [];
  if (inputArr.length == 0) return [];
  /**
   * Declare recursive function to permutate
   */
  const permutateFunction = (inputArr, index = 0) => {
    // Directly Push for last element
    if (index === inputArr.length) {
      resultArr.push([...inputArr]);
      return;
    }

    // Initial Function Execution for 1st element
    permutateFunction(inputArr, index + 1);

    for (let i = index + 1; i < inputArr.length; i++) {
      // Initial Swapping
      [inputArr[index], inputArr[i]] = [inputArr[i], inputArr[index]];
      // Permute every element of the array
      permutateFunction(inputArr, index + 1);
      // Swapping Values
      [inputArr[index], inputArr[i]] = [inputArr[i], inputArr[index]];
    }
  };

  // Execute the permutate function
  permutateFunction(inputArr);
  return resultArr;
};
