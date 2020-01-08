# `.map()` under the hood

## 1 - The array method

- Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

_Example:_ use Array.map to sum each element to its index value and then multiply the result by the length of the array

```
const arr = [1, 2, 3];

const mappedArr = arr.map(
  (element, index, origArr) => (element + index) * origArr.length
);
```

`map` method/function signature:

- always returns an array
- it accepts three parameters - current element, current index, original array, only the first one is mandatory

## 2 - Syntax

Can be written with an inline arrow function:

```
const arr = [1, 2, 3];

const mappedArr = arr.map(
  (element, index, origArr) => (element + index) * origArr.length
);
```

Can be written with an inline anonymous function:

```
const mappedArr = arr.map(
  function (element, index, origArr) {
      return (element + index) * origArr.length
  }
);
```

Can be written with the an iterator (also known as a callback) function:

function myIteratorFn (element, index, origArr) {
return (element + index) \* origArr.length
}

const mappedArr = arr.map(myIteratorFn);

Can be written with the iterator function as an arrow function:

const myIteratorFn = (element, index, origArr) => (element + index) \* origArr.length

const mappedArr = arr.map(myIteratorFn);

## 3 - Write a myMap method which is a copy of .map()

```
Array.prototype.myMap = iteratorFn => {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    const transformedElement = iteratorFn(arr[i], i, arr);

    resultArr.push(transformedElement);
  }

  return resultArr;
};
```

## 4 - Use your very own map function

```
const arr = [1, 2, 3];

const mappedArr = arr.myMap(
  (element, index, origArr) => (element + index) * origArr.length
);
```

## 5 - Running any of the above will resuly in [3, 9, 15]
