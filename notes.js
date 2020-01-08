// step zero - remember that .map is part of array prototype

const exeArray = [1, 2, 3];

// step1 - use Array.map to sum an element to it's index value and then multiply it by the length of the array
const mappedArr1 = exeArray.map(
  (element, index, origArr) => (element + index) * origArr.length
);

console.log("mapped array 1", mappedArr1);

// step 2 - the array map with an iteratee
const iterateeFn = (element, index, origArr) =>
  (element + index) * origArr.length;

const mappedArr2 = arr.map(iterateeFn);

console.log("mapped array 2", mappedArr2);

// step 3 - re-write a funtion that does the same as map
const myMap = (arr, fn) => {
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    const transformedEle = fn(arr[i], i, arr);

    finalArr.push(transformedEle);
  }

  return finalArr;
};

const mappedArr3 = myMap(arr, iterateeFn);

console.log("mapped array 3", mappedArr3);

// step 4 - create your own Array.prototype

Array.prototype.myMap = fn => {
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    const transformedEle = fn(arr[i], i, arr);

    finalArr.push(transformedEle);
  }

  return finalArr;
};

const mappedArr4 = arr.myMap(iterateeFn);

console.log("mapped array 4", mappedArr4);
