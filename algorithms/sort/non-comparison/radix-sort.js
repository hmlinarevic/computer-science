const numbers = [109, 224, 19010, 58, 0, 3];

const getLongestNumber = (array) => {
  let longest = 0;

  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i];
    longest = currentLength > longest ? currentLength : longest;
  }

  return longest;
};

const getDigit = (num, place, longestNumber) => {
  const string = num.toString();
  const size = string.length;

  const mod = longestNumber - size;
  return string[place - mod] || 0;
};

const radixSort = (nums) => {
  const longestNumber = getLongestNumber(nums);
  const buckets = new Array(10).fill([]);
};

const sorted = radixSort(numbers);
console.log(sorted);
