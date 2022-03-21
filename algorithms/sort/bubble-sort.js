const numbers = [8, 7, 5, 4, 2, 4, 3, 2, 1, 0];

/**
 *
 * Bubble Sort
 * Time Complexity --> O(n^2)
 * Space Complexity
 */

const bubbleSort = (numbers) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i + 1]) {
        const temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return numbers;
};
