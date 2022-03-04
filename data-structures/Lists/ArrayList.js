class ArrayList {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	push(value) {
		this.data[this.length] = value;
		this.length++;
	}
	pop() {
		if (this.length < 1) throw new Error('array already empty');

		const response = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return response;
	}
	get(index) {
		return this.data[index];
	}
	delete(index) {
		if (index === this.length - 1) return this.pop();

		const response = this.data[index];
		delete this.data[index];
		this._collapseTo(index);
		return response;
	}
	_collapseTo(index) {
		for (let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const shoppingList = new ArrayList();

shoppingList.push('kiwi');
shoppingList.push('grapes');
shoppingList.push('cheese');
shoppingList.push('bread');
shoppingList.push('milk');

console.log(shoppingList);

console.log(shoppingList.delete(3));

console.log(shoppingList);
