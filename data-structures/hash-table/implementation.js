class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		const address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
	}

	get(key) {
		const address = this._hash(key);
		const currentBucket = this.data[address];
		if (!currentBucket) {
			return undefined;
		}

		for (let i = 0; i < currentBucket.length; i++) {
			if (currentBucket[i][0] === key) {
				return currentBucket[i][1];
			}
		}
	}

	keys() {
		const keysList = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				for (let j = 0; j < this.data[i].length; j++) {
					keysList.push(this.data[i][j][0]);
				}
			}
		}
		return keysList;
	}
}

const myHashTable = new HashTable(1);

myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.set('kiwi', 20);
myHashTable.set('mandarine', 200);
myHashTable.set('pineapple', 1);

console.log(myHashTable);
console.log(myHashTable.keys());
// console.log(myHashTable.get('something'));
