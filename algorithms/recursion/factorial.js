const memoize = (cb) => {
  const cache = {};

  return (n) => {
    if (cache[n]) return cache[n];
    else {
      const result = cb(n);
      cache[n] = result;
      console.log(cache);
      return result;
    }
  };
};

const factorial = memoize((n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
});

const result = factorial(10);
