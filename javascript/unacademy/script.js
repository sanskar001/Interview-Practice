// Question 1: Diff between forEach and Map
/*
- forEach return undefined
- forEach mutate original array

- map return new modified array
- map does not mutate original array
- we can also perform chaining on map() function
*/

// -----------------------------------------------------

// Question 2: null and undefined
/*
null - actual value and empty in memory
undefined: declared but not defined
Not defined: VAriable is not present or declared.
*/

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// -----------------------------------------------------

// Question 3: Explaining Event Delegation

// const container = document.querySelector(".container");

// container.addEventListener("click", function (e) {
//   const targetCardButton = e.target;
//   const targetCard = targetCardButton.closest(".card");
//   if (targetCard) {
//     targetCard.style.backgroundColor = "lightsalmon";
//   }
// });

// ----------------------------------------

// Question 4: Array Flattening

// const arr = [
//   [1, 2],
//   [3, 4],
//   [5, [6, [7, 8], 9]],
//   [10, [11, 12]],
// ];

// // console.log(arr.flat(1));

// function flatten(arr) {
//   const resultArr = [];
//   function helper(inputArr) {
//     for (let i = 0; i < inputArr.length; i++) {
//       if (Array.isArray(inputArr[i])) {
//         helper(inputArr[i]);
//       } else {
//         resultArr.push(inputArr[i]);
//       }
//     }
//   }

//   helper(arr);

//   return resultArr;
// }

// console.log(flatten(arr));

// -----------------------------

// function customFlat(arr, depth = 1) {
//   const resultArr = [];

//   function helper(inputArr, depth) {
//     for (let i = 0; i < inputArr.length; i++) {
//       if (Array.isArray(inputArr[i]) && depth > 0) {
//         // console.log({ arr: inputArr[i], depth: depth });
//         helper(inputArr[i], depth - 1);
//       } else {
//         resultArr.push(inputArr[i]);
//       }
//     }
//   }

//   helper(arr, depth);

//   return resultArr;
// }

// console.log(customFlat(arr, 3));
// console.log(customFlat(arr, 2));
// console.log(customFlat(arr));
// ---------------------------------------------------

// Question 5: diff between var, let and const

/*

var
- function scoped
- Redeclarable
- Reassignable or mutatable
- Hoisting
- Become Global properties

Let
- Block scoped
- Non-Redeclarable
- Reassignable or mutatable
- No Hoisting

const
- Block scoped
- Non-Redeclarable
- Non-Reassignable or mutatable
- No Hoisting

*/

// ---------------------------------------------------

// Question 6: setTimeout output

// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

/*
3, 3, 3
*/

// function a() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// a();

/*
0, 1, 2
*/

// ---------------------------------------------------

// Question 7: Implement Promise.all()

// function myPromiseAll(promises) {
//   const result = [];

//   return new Promise((resolve, reject) => {
//     promises.forEach((promise, index) => {
//       promise
//         .then((res) => {
//           result.push(res);
//           if (index === promises.length - 1) {
//             resolve(result);
//           }
//         })
//         .catch((err) => reject(err));
//     });
//   });
// }

// myPromiseAll([
//   Promise.resolve("Success1"),
//   Promise.resolve("Success2"),
//   Promise.reject("Rejected!"),
// ])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// ---------------------------------------------------

// Question 8: Implementing Debouncing

const searchInput = document.querySelector("#search");

let count = 0;
function getData(query) {
  console.log(`count:${count++} | Fetching Data... | Query: ${query}`);
}

function debouncing(expensiveFunc, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      expensiveFunc(...args);
    }, delay);
  };
}

const debouncedGetData = debouncing(getData, 300);

searchInput.addEventListener("input", function (e) {
  debouncedGetData(e.target.value);
});
