const items = require('./test-items');

/*
	my version
*/
const bubbleSort = (numbers) => {
	let swap = true;
	let swapped;
	let temp;
	let iterations = 0;

	while (swap) {
		swapped = false;
		iterations++;

		for (let i = 0; i < numbers.length - 1; i++) {
			if (numbers[i] > numbers[i + 1]) {
				temp = numbers[i];
				numbers[i] = numbers[i + 1];
				numbers[i + 1] = temp;
				swapped = true;
			}
		}
		swap = swapped ? true : false;
	}

	console.log('total iterations:', iterations);
};
// const sortedItems = bubbleSort(items);
// console.log(sortedItems);

// ----------------------------------------------------------------------------

/*
	fem version
*/
const bubbleSortPro = (numbers) => {
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

const sortedItems = bubbleSortPro(items);
console.log(sortedItems);

// ----------------------------------------------------------------------------

const numbers = [8, 7, 5, 4, 2, 4, 3, 2, 1, 0];

/**
 *
 * Bubble Sort
 * Time Complexity --> O(n^2)
 */

const bubble = (items) => {
	let swap, element;

	do {
		swap = false;

		for (let i = 0; i < items.length - 1; i++) {
			element = items[i];
			if (element > items[i + 1]) {
				items[i] = items[i + 1];
				items[i + 1] = element;
				swap = true;
			}
		}
	} while (swap);
};

bubble(numbers);
console.log(numbers);
