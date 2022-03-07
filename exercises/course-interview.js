// given 2 arrays, create a function that let's a user know (true/false) weather these two arrays contain any common items

// data-1
const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'i'];
// false

// data-2
const arr3 = ['a', 'b', 'c', 'x'];
const arr4 = ['z', 'y', 'x'];
// true

// O(a + b)
const hasCommonItem = (ar1, ar2) => {
  // let list1Length, list2Length, longerList;
  // list1Length = ar1.length;
  // list2Length = ar2.length;

  // if (list1Length > list2Length) longerList = ar1;
  // else if (list2Length > list1Length) longerList = ar2;

  // for this function to work properly it is not needed to check which list is bigger
  let bigList, smallList;
  bigList = ar1;
  smallList = ar2;

  if (ar2.length > ar1.length) {
    bigList = ar2;
    smallList = ar1;
  }

  const map = {};
  let insertions = 0;
  for (let i = 0; i < bigList.length; i++) {
    if (!map[bigList[i]]) {
      insertions++;
      map[bigList[i]] = true;
    }
  }
  console.log(map);
  console.log('insertions :', insertions);

  for (let j = 0; j < smallList.length; j++) {
    if (map[smallList[j]]) {
      console.log('we have common item');
      console.log(smallList[j]);
      return;
    }
  }
  console.log('no common items');
};

// hasCommonItem(arr3, arr4);

const containsCommonItem = (ar1, ar2) => {
  return ar1.some((item) => ar2.includes(item));
};

console.log(containsCommonItem(arr3, arr4));
// how to loop through an object

let strings;

strings.pop(); // O(1)
strings.unshift('x'); // O(n) traverses and moves all indices by 1
