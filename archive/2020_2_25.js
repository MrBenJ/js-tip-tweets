
// TIP: ES2020 Introduces private fields
// in classes! Use it with the # sign!

class Counter {
  #value = 0;

  increment() {
    this.#value += 1;
  }

  decrement() {
    this.#value -= 1;
  }

  getValue() {
    return this.#value;
  }
}
const counter = new Counter();
counter.increment();
counter.increment();
counter.getValue(); // 2
counter.value // undefined
counter.#value // Error!



