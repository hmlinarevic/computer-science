//Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

//input: [1,5,2,1] => output: [1,2,5]
//input: [4,2,2,3,2,2,2] => output: [2,3,4]

/*

const uniqSort = function (arr) {
	const breadcrumbs = {};
	const newArray = [];

	for (let i = 0; i < arr.length; i++) {
		if (!breadcrumbs[arr[i]]) {
			newArray.push(arr[i]);
			breadcrumbs[arr[i]] = true;
		}
	}

	return newArray.sort((a, b) => a - b);
};

const sorted = uniqSort([4, 2, 2, 3, 2, 2, 2]); // => [2,3,4]
console.log(sorted);

*/

// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn

/*

const times10 = (n) => {
	return n * 10;
};
const times3 = (n) => n * 3;

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
// console.log('times10 returns:', times10(9));

*/

// ----------------------------------------------------------------------------

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

/*
const cache = {
	add(fn, arg) {
		const property = `${fn.name}(${arg})`;

		if (this[property]) {
			console.log('value was already in the cache');
		} else {
			this[property] = fn(arg);
			console.log('value added to the cache');
		}
	},
};

cache.add(times10, 9);
cache.add(times10, 9);
cache.add(times3, 9);
console.log(cache);

const memoTimes10 = (n) => {
	return cache[`times10(${n})`];
};

const memoTimes3 = (n) => {
	return cache[`times3(${n})`];
};

const memoizedResult = memoTimes3(9);
console.log(memoizedResult);

*/

// ----------------------------------------------------------------------------

// const times10 = (n) => n * 10;

// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

/*

const memoizedClosureTimes10 = () => {
	const cache = {};

	return (n) => {
		if (cache[n]) {
			console.log('returning cached value...');
			return cache[n];
		} else {
			const result = times10(n);
			cache[n] = result;
			console.log('caching value...');
			return result;
		}
	};
};

const memoClosureTimes10 = memoizedClosureTimes10();
const memoClosureTimesTen = memoizedClosureTimes10();

console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
// try {
// 	console.log('Task 3 calculated value:', memoClosureTimes10(9)); // calculated
// 	console.log('Task 3 cached value:', memoClosureTimes10(9)); // cached
// } catch (e) {
// 	console.error('Task 3:', e);
// }

console.log(memoClosureTimes10(2));
console.log(memoClosureTimes10(2));
console.log(memoClosureTimesTen(2));

*/

// ----------------------------------------------------------------------------

const times = (...args) => {
  let total = 1;
  for (let i = 0; i < args.length; i++) {
    total *= args[i];
  }
  return total;
};

// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.

/*

const memoize = (cb) => {
	const cache = {};

	return (...args) => {
		// works with two arguments
		const property = `${args[0]}-${args[1]}`;
		if (property in cache) return cache[property];
		else {
			const result = cb(...args);
			cache[property] = result;
			return result;
		}
	};
};

// returned function from memoizedAdd
const memoizedTimes = memoize(times);
console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
try {
	console.log('Task 4 calculated value:', memoizedTimes(9, 11)); // calculated
	console.log('Task 4 cached value:', memoizedTimes(9, 11)); // cached
} catch (e) {
	console.error('Task 4:', e);
}

*/

// Task: rewrite this function so that it uses a loop rather than recursion

/*

function joinElements(array, joinString) {
	function recurse(index, resultSoFar) {
		resultSoFar += array[index];

		if (index === array.length - 1) {
			return resultSoFar;
		} else {
			return recurse(index + 1, resultSoFar + joinString);
		}
	}

	return recurse(0, '');
}

const result = joinElements(['s', 'cr', 't cod', ' :) :)'], 'e');
// console.log(result);

*/

const memoize = (cb) => {
  const cache = {};

  return (n) => {
    if (!cache[n]) {
      console.log('caching value and returning result');
      const result = cb(n);
      cache[n] = result;
      console.log(cache);
      return result;
    } else {
      console.log('returning cached value');
      return cache[n];
    }
  };
};

const calcFactorial = memoize((n) => {
  if (n === 1) return 1;
  else {
    return n * calcFactorial(n - 1);
  }
});

calcFactorial(10);

const measurePerformance = () => {
  const t1 = performance.now();
  const factorialResult = calcFactorial(4);
  const t2 = performance.now();
  console.log(factorialResult);
  console.log('performance: ', (t2 - t1) * 1000);
};

measurePerformance();

/*

	5! = 5 * 4 * 3 * 2 * 1

	5! = 5 * 4!
	4! = 4 * 3!
	3! = 3 * 2!
	2! = 2 * 1!
	1! = 1

 */
