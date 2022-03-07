/*
    AVL Tree

    Name you class/function (anything we can call new on) Tree

    I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we
    could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
    trees dues how the function calls must be recursive in order to get the balancing correct.

    Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
    tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
    that structure.

    If you have any questions conceptually about balancing the tree, refer to the class website.

    Make sure you are calling the properties
    of the Nodes as follows:
    value - integer - the value being store in the tree
    left  - Node    - the subtree containing Node's with values less than the current Node's value
    right - Node    - the subtree containing Node's with values greater than the current Node's value

  */

class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
  add(value) {
    // decide to go left or right
    if (value > this.value) {
      if (!this.right) {
        this.right = new Node(value);
      } else {
        this.right.add(value);
      }
    } else {
      if (!this.left) {
        this.left = new Node(value);
      } else {
        return this.left.add(value);
      }
    }

    console.log('node placed');
    console.log('this is :', this.value);
    // find the correct place to add
    // make sure you're updating heights

    this.balance();
  }
  balance() {
    // ask is this note out of balance
    // if not out of balance do nothing
    // if it is out of balance, do I need to single or double rotate
    // if single, just call rotate on self
    // if double, call rotate on child then on self
  }
  rotateRR() {
    // from the right to the left
    // if the right child is heavy

    this.right.updateInNewLocation();
    this.updateInNewLocation();
  }
  rotateLL() {
    // from the left to the right
    // if the left child is heavy
    this.left.updateInNewLocation();
    this.updateInNewLocation();
  }
  updateInNewLocation() {
    // calculate the new height
  }
}

const myAVLTree = new Tree();

myAVLTree.add(6);
myAVLTree.add(7);
myAVLTree.add(8);
myAVLTree.add(9);

console.log(myAVLTree);
