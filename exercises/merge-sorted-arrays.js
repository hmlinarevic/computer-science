// O(a + b)
const mergeSortedArrays = (ar1, ar2) => {
	if (ar1.length === 0) {
		return ar2;
	}

	if (ar2.length === 0) {
		return ar1;
	}

	const totalListLength = ar1.length + ar2.length;

	const newArray = [];
	for (let i = 0, j = 0, k = 0; i < totalListLength; i++) {
		if (ar1[j] <= ar2[k] || !ar2[k]) {
			newArray.push(ar1[j]);
			j++;
		} else {
			newArray.push(ar2[k]);
			k++;
		}
	}
	return newArray;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
