const array1 = [2, 5, 1, 5, 3, 3, 1, 2, 4];
// 2
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// 1
const array3 = [2, 3, 4, 5];
// undefined

// O(n^2)
const checkForReccuringChars1 = (ar) => {
	for (let i = 0; i < ar.length; i++) {
		for (let j = i + 1; j < ar.length; j++) {
			if (ar[i] === ar[j]) {
				console.log('write more');
			}
		}
	}

	return undefined;
};

// O(n)
const checkForReccuringChars2 = (ar) => {
	const map = {};

	for (let i = 0; i < ar.length; i++) {
		if (map[ar[i]]) {
			return 'first reccuring char is ' + ar[i];
		}
		map[ar[i]] = true;
	}
	return undefined;
};

console.log(checkForReccuringChars1(array1));
