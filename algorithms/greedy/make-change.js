// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.

// coin values: 5, 10, 25

// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10)

const makeChange = (coins, amount) => {
	const sortedCoins = coins.sort((a, b) => b - a);
	let total = 0;

	sortedCoins.forEach((coin) => {
		while (amount >= coin) {
			amount -= coin;
			total++;
		}
	});
	return total;
};

// -----------------------------------------------

/**
 * improved
 */
const makeChange2 = (coins, amount) => {
	const sortedCoins = coins.sort((a, b) => b - a);

	let total = 0;
	let i = 0;
	while (amount > 0) {
		if (amount >= coins[i]) {
			amount -= coins[i];
			total++;
		} else {
			i++;
		}
	}
	return total;
};

const totalCoins = makeChange2([5, 10, 25], 40);
console.log(totalCoins);
