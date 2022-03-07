/*
  details about the problem:

  1. array is sorted
  2. find a pair that sum is equal to 8
  3. operation is add
*/

// test data
const arr1 = [1, 2, 3, 9];
const arr2 = [1, 2, 4, 4];

// O(n + n^2) --> O(n^2)
const findPair = (arr, match) => {
  let first, second, result;
  let iterations = 0;

  for (let i = 0; i < arr.length; i++) {
    iterations++;
    first = arr[i];
    for (let j = 0; j < arr.length; j++) {
      iterations++;
      second = arr[j];
      if (first + second === match) {
        result = {
          isMatch: 'yes',
          match,
          first,
          second,
        };
      }
    }
  }

  if (result) {
    result.iterations = iterations;
    return result;
  }

  if (!result) {
    result = {
      iterations,
      isMatch: 'no',
      match,
    };
  }

  return result;
};

// const result = findPair(arr2, 8);
// console.log(result);

// O(n - 1) --> O(n)
const findPairImproved = (arr, match) => {
  let first, second, result;
  let iterations = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    iterations++;
    first = arr[i];
    second = arr[i + 1];
    if (first + second === match) {
      result = {
        iterations,
        isMatch: 'yes',
        first,
        second,
        match,
      };
    }
  }

  if (!result) {
    result = {
      iterations,
      isMatch: 'no',
      match,
    };
  }

  return result;
};

const result = findPairImproved(arr2, 8);
console.log(result);
