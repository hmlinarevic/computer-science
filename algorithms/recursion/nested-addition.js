const testData = [1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 13, [14]]];

const nestedAdd = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (Array.isArray(element)) {
      sum += nestedAdd(element);
    } else {
      sum += arr[i];
    }
  }
  return sum;
};

const result = nestedAdd(testData);
console.log(result);
