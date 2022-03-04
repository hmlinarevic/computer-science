/** Class representing a Stack. */

class Stack {
	constructor() {
		this._storage = {};
		this._length = 0;
	}
	/*
	 * Adds a new value at the end of the stack
	 * @param {*} value the value to push
	 */
	push(value) {
		if (!value) throw new Error('no arguments');
		this._storage[this._length] = value;
		this._length++;
	}
	/*
	 * Removes the value at the end of the stack and returns it
	 * @return {*} the last and newest value in the stack
	 */
	pop() {
		if (this.isEmpty()) throw new Error('stack empty - underflows');

		const element = this._storage[this._length - 1];
		delete this._storage[this._length - 1];
		this._length--;
		return element;
	}
	/*
	 * Returns the value at the end of the stack without removing it
	 * @return {*} the last and newest value in the stack
	 */
	peek() {
		return this._storage[this._length - 1];
	}

	isEmpty() {
		return this._length < 1;
	}
}

const myStack = new Stack();

myStack.push('apple');
myStack.push('orange');
myStack.push('cheese');

console.log(myStack.pop());

console.log(myStack);
