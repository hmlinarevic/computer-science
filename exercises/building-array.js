class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  add(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    if (!this.length) return 'no items in the array';
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  remove(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const storage = new myArray();
storage.add('phone');
storage.add('brick');
storage.add('apple');
storage.add('orange');

console.log(storage);
