const data = [
  { id: 5, name: 'Sam' },
  { id: 11, name: 'Sarah' },
  { id: 21, name: 'John' },
  { id: 10, name: 'Burke' },
  { id: 1, name: 'Brian' },
  { id: 13, name: 'Simona' },
  { id: 31, name: 'Asim' },
  { id: 6, name: 'Niki' },
  { id: 19, name: 'Aysegul' },
  { id: 25, name: 'Kyle' },
  { id: 18, name: 'Jem' },
  { id: 2, name: 'Marc' },
  { id: 51, name: 'Chris' },
];

const lookingFor = { id: 1, name: 'Brian' };

const sortedData = data.sort((a, b) => a.id - b.id);
console.log(sortedData);

const binarySearch = (target, array) => {
  do {
    let index = Math.floor(array.length / 2);
    let element = array[index];

    if (element.id === target) {
      return {
        message: 'target found',
        array,
        index,
        element,
      };
    } else if (element.id > target) {
      array = array.slice(0, index);
    } else {
      array = array.slice(index);
    }
  } while (array.length > 1);
};

// console.log(binarySearch(lookingFor.id, sortedData));

const binarySearch2 = (id, array) => {
  let min = 0;
  let max = array.length - 1;
  let index;
  let element;

  while (min <= max) {
    index = Math.floor(min + max / 2);
    element = array[index];

    if (element.id < id) {
      min = index + 1;
    } else if (element.id > id) {
      max = index - 1;
    } else {
      return element;
    }
  }

  return undefined; // void 0;
};

const searchResult = binarySearch2(lookingFor.id, sortedData);
console.log(searchResult);
