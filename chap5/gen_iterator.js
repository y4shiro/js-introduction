class MyIterator {
  constructor(data) {
    this.data = data;
    this[Symbol.iterator] = function*() {
      let current = 0;
      let that = this;
      while (current < that.data.length) {
        yield that.data[current++];
      }
    };
  }
}

let itr = new MyIterator(['1', '2', '3']);
for (let value of itr) {
  console.log(value);
}
