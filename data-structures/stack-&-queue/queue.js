/** Class representing a Queue.
 * @constructor
 */
class Queue {
  constructor() {
    this._storage = {};
    this._head = 0;
    this._tail = 0;
  }
  _reset() {
    this._head = 0;
    this._tail = 0;
  }
  /*
   * Enqueues a new value at the end of the queue
   * @param {*} value the value to enqueue
   */
  enqueue(value) {
    this._storage[this._tail] = value;
    this._tail++;
  }
  /*
   * Dequeues the value from the beginning of the queue and returns it
   * @return {*} the first and oldest value in the queue
   */
  dequeue() {
    if (this.isEmpty()) throw new Error('Queue is empty');

    const element = this._storage[this._head];
    delete this._storage[this._head];
    this._head++;

    if (this.isEmpty()) this._reset();
    return element;
  }
  /*
   * Returns the value at the beginning of the queue without removing it from the queue
   * @return {*} the first and oldest value in the queue
   */
  peek() {
    if (!this.isEmpty()) {
      return this._storage[this._head];
    }
  }

  isEmpty() {
    return this._head === this._tail;
  }
}

const myQueue = new Queue();
// myQueue.enqueue('apple');

console.log(myQueue.isEmpty());
// myQueue.enqueue('apple');
// myQueue.enqueue('strawberry');

// myQueue.enqueue('apple');
// myQueue.enqueue('banana');
// myQueue.enqueue('kiwi');
// myQueue.enqueue('pineapple');

// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();

console.log(myQueue);
