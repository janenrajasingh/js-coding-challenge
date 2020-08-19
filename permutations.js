/**
 *
 * @param {array} inputArr Array having the elements
 * @returns {array} Returns the multiple dimension array which has the permutations of given array
 */
module.exports.getPermutations = (inputArr) => {
  const resultArr = [];

  /**
   * Declare recursive function to permutate
   */
  const permutateFunction = (inputArr, index = 0) => {
    // Directly Push for last element
    if (index === inputArr.length) {
      const newArr = inputArr;
      resultArr.push(newArr);
      return;
    }

    // Initial Function Execution for 1st element
    permutateFunction(inputArr, index + 1);

    for (let i = index + 1; i < inputArr.length; i++) {
      let temp = inputArr[index];
      inputArr[index] = inputArr[i];
      inputArr[i] = temp;
      // Permute every element of the array
      permutateFunction(inputArr, index + 1);
      temp = inputArr[index];
      inputArr[index] = inputArr[i];
      inputArr[i] = temp;
    }
  };

  // Execute the permutate function
  permutateFunction(inputArr);
  return resultArr;
};
