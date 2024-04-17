type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(init: number): Counter {
  let count = init;
  return <Counter>{
    increment(): number {
      return ++count;
    },
    decrement(): number {
      return --count;
    },
    reset(): number {
      count = init;
      return count;
    },
  }
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/