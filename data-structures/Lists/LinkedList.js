/*
  LinkedList

  Name your class / constructor (something you can call new on) LinkedList

  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.

  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses,
                      and returns removed value

  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value) {
		const node = new Node(value);
		if (!this.head) this.head = node;
		else this.tail.next = node;

		this.tail = node;
		this.length++;
	}
	pop() {
		return this.delete(this.length - 1);
	}
	_find(index) {
		if (index >= this.length) return 0;

		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}
		return current;
	}
	get(index) {
		const node = this._find(index);
		if (!node) return undefined;
		return node.value;
	}

	delete(index) {
		let current;

		if (index === 0) {
			this.head = this.head.next;
		} else {
			const pre = this._find(index - 1);
			current = pre.next;

			if (current.next) {
				pre.next = current.next;
			} else {
				delete pre.next;
				this.tail = pre;
			}
		}

		this.length--;
		return current.value;
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next;
	}
}

const myLinkedList = new LinkedList();

myLinkedList.push('potato');
myLinkedList.push('carrot');
myLinkedList.push('apple');
myLinkedList.push('gun');
myLinkedList.push('ball');
myLinkedList.push('frisbee');

console.log(myLinkedList);

console.log('POP: ', myLinkedList.pop());

console.log(myLinkedList);
