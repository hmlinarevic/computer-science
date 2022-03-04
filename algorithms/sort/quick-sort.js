const numbers = [3, 1, 4, 5, 2];

const quickSort = (nums) => {
	if (nums.length < 2) return nums;

	const pivot = nums[nums.length - 1];
	const left = [];
	const right = [];

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] < pivot) {
			left.push(nums[i]);
		} else {
			right.push(nums[i]);
		}
	}
	// const sortedLeft = quickSort(left);
	// const sortedRight = quickSort(right);
	// return sortedLeft.concat(pivot, sortedRight);

	return [...quickSort(left), pivot, ...quickSort(right)];
};

const result = quickSort(numbers);
console.log(result);
