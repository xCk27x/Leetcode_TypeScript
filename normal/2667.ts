function createHelloWorld() {
  const str = "Hello World";
  return function (...args: any[]): string {
    return str;
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */