const numbers = [109, 224, 19010, 58, 0, 3];

const getHighNumLength = (nums) => {
	let high = nums[0].toString().length;

	for (let i = 0; i < nums.length; i++) {
		const numLength = nums[i].toString().length;
		if (numLength > high) {
			high = numLength;
		}
	}
	return high;
};

const getDigit = (num, position) => {
	const numStr = num.toString();
	const onesPosition = numStr.length - 1;
	const requestedPosition = onesPosition - position;

	const digit = numStr[requestedPosition];
	return digit || 0;
};

const createBuckets = (num) => {
	const buckets = [];
	for (let i = 0; i < num; i++) {
		buckets[i] = [];
	}
	return buckets;
};

const radixSort = (nums) => {
	const buckets = createBuckets(10);
	const highNumLength = getHighNumLength(nums);
	let iterations = highNumLength;
	let digitPosition = 0;

	while (iterations) {
		while (nums.length) {
			const num = nums.shift();
			const digit = getDigit(num, digitPosition);
			buckets[digit].push(num);
		}

		buckets.forEach((bucket) => {
			while (bucket.length) {
				const num = bucket.shift();
				nums.push(num);
			}
		});

		iterations--;
		digitPosition++;
	}

	return nums;
};

const sorted = radixSort(numbers);
console.log(sorted);
