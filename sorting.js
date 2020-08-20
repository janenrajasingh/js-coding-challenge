/**
 * Array Sorting Custom Function
 */
const sortArray = (inputArr) => {
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
    inputArr[j + 1] = key;
  }
  return inputArr;
};

/**
 *
 * @param {array} arrData List of numbers needs to be sorted in custom way
 * @returns {array} The array contains the given numbers sorted in odd and even
 */
module.exports.customSorting = (arrData = []) => {
  //to sort array if not sorted already
  input = sortArray(arrData);
  let evenArr = [];

  // Filter the odd numbers in result array
  arrData = arrData.filter((x) => {
    if (x % 2 != 0) return true;
    else {
      evenArr.push(x);
      return false;
    }
  });

  // Push the sorted even numbers in result array sequently
  for (let el of evenArr) {
    arrData.push(el);
  }
  return arrData;
};
