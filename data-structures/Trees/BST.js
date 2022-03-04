/*

Binary Search Tree!

Name your class Tree.

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/

class Tree {
	// code goes here
	constructor() {
		this.root = null;
	}

	add(value) {
		const node = new Node(value);
		if (!this.root) return (this.root = node);
		let current = this.root;

		while (true) {
			if (value < current.value) {
				if (!current.left) {
					current.left = node;
					break;
				}
				current = current.left;
			} else {
				if (!current.right) {
					current.right = node;
					break;
				}
				current = current.right;
			}
		}
		return this;
	}

	toObject() {
		return this.root;
	}
}

// you might consider using a Node class too
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const myTree = new Tree();

myTree.add(5);
myTree.add(2);
myTree.add(3);
myTree.add(6);
myTree.add(11);
myTree.add(8);

console.log(myTree);
