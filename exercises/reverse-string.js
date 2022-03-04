// create a function that reverses a string

const string = 'Hi my name is Vader';

const reverseStringCool = (str) => {
	const t1 = performance.now();
	const result = str.split('').reverse().join('');
	const t2 = performance.now();
	console.log('performance: ', t2 - t1);
	return result;
};

// console.log(reverseStringCool(string));

const reverseString = (str) => {
	// need guards (if input is string, etc..)

	const t1 = performance.now();

	let result = '';
	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	const t2 = performance.now();
	console.log('performance: ', t2 - t1);
	return result;
};

// console.log(reverseString(string));

// ES6
const reverseStringES6 = (str) => [...str].reverse().join('');
console.log(reverseStringES6(string));
