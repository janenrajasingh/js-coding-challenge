/**
 *
 * @param {array} inputArr Array having the elements
 * @returns {array} Returns the multiple dimension array which has the permutations of given array
 */
module.exports.getPermutations = (inputArr) => {
  const resultArr = [];

  function permuteFunction(inputArr, index = 0) {
    if (index === inputArr.length) {
      const newArr = inputArr;
      resultArr.push(newArr);
      return;
    }
    // Initial Function Execution for 1st element
    permuteFunction(inputArr, index + 1);

    // Declaring permute function
    for (let i = index + 1; i < inputArr.length; i++) {
      let temp = inputArr[index];
      inputArr[index] = inputArr[i];
      inputArr[i] = temp;

      // Get permute for every element of the array
      permuteFunction(inputArr, index + 1);

      temp = inputArr[index];
      inputArr[index] = inputArr[i];
      inputArr[i] = temp;
    }
  }

  // Execute the permute function
  permuteFunction(inputArr);
  return resultArr;
};
