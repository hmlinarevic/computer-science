const memoize = (cb) => {
  const cache = {};

  return (n) => {
    if (cache[n]) {
      return cache[n];
    } else {
      const result = cb(n);
      cache[n] = result;
      console.log(cache);
      return result;
    }
  };
};

const fibonacci = memoize((n) => {
  if (n === 2 || n === 1) {
    return 1;
  } else if (n === 0) {
    return 0;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
});

const calcPerformance = (callback, arg) => {
  const t1 = performance.now();
  console.log('RESULT:', callback(arg));
  const t2 = performance.now();
  console.log((t2 - t1) * 1000);
};

calcPerformance(fibonacci, 15);
calcPerformance(fibonacci, 10);
