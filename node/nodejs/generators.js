function* quips() {
  yield "1";
  yield "2";
  yield "3";
}

const iter = quips();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }

  [Symbol.interator]() {
    return this;
  }

  next() {
    const value = this.value;
    if (value < this.stop) {
      this.value++;
      return { done: false, value };
    } else {
      return { done: true, value: undefined };
    }
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop);
}

const res = range(0, 3);
// console.log(res);

// for (const iterator of res) {
//   console.log(iterator);
// }

function* range1(start, stop) {
  for (let i = start; i < stop; i++) {
    yield i;
  }
}

const res1 = range1(0, 3);
console.log(res1);

for (const iterator of res1) {
  console.log(iterator);
}

// function splitIntoRows(icons, rowLength) {
//   var rows = [];
//   for (var i = 0; i < icons.length; i += rowLength) {
//     rows.push(icons.slice(i, i + rowLength));
//   }
//   return rows;
// }

function* splitIntoRows(icons, rowLength) {
  for (var i = 0; i < icons.length; i += rowLength) {
    yield icons.slice(i, i + rowLength);
  }
}

const a = splitIntoRows([1, 2, 3], 2);

for (const d of a) {
  console.log(d);
}

function* filter(test, iterable) {
  for (var item of iterable) {
    if (test(item)) yield item;
  }
}

const result = filter((v) => v > 3, [1, 2, 3, 4, 5]);

for (const d of result) {
  console.log(d);
}
