/**
 *
 * Merge Sort
 * Recursive algorithm (Divide & Conquer)
 * Time Complexity - O(n log n)
 * Space Complexity - O(n)
 */

const numbers = [38, 27, 43, 3, 9, 82, 10];

// ascending
const mergeAsc = (left, right) => {
  const list = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      list.push(left[i]);
      i++;
    } else {
      list.push(right[j]);
      j++;
    }
  }

  return list.concat(left.slice(i), right.slice(j));
};

// descending
const mergeDsc = (left, right) => {
  const list = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      list.push(left[i]);
      i++;
    } else {
      list.push(right[j]);
      j++;
    }
  }

  return list.concat(left.slice(i), right.slice(j));
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const half = Math.floor(arr.length / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return mergeAsc(sortedLeft, sortedRight);
};

const result = mergeSort(numbers);
console.log(result);
