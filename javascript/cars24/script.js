// Hoisting

// function abc() {
//   console.log(a);

//   var a = 10;
// }

// abc();

// Answer: undefined

// ----------------------------------------------------

// function abc(a) {
//   console.log("Previous:", a);

//   var a = 10;

//   console.log("Next:", a);
// }

// abc(30);

/*
Previous: 30
Next: 10
*/

// ----------------------------------------------------

// function abc() {
//   console.log(a, b, c);

//   const c = 30;
//   let b = 20;
//   var a = 10;
// }

// abc();

// Answer: var => undefined and let and const gives Reference Error

// ----------------------------------------------------

// Question 2: Implicit and Explicit Binding

// var obj = {
//   name: "Sanskar",
//   display: function () {
//     console.log(this.name);
//   },
// };

// var obj1 = {
//   name: "ABC",
// };

// obj.display.call(obj1);

// Answer: ABC

// -------------------

// var obj = {
//   name: "Sanskar",
//   display: () => {
//     console.log(this.name);
//   },
// };

// var obj1 = {
//   name: "ABC",
// };

// obj.display(); // Undefined (this => Gloabl Object => Window)
// obj.display.call(obj1); // undefined (this => Gloabl Object => Window)

// ----------------------------------------------------

// Question 3: Implement Caching/Memoize Function

// const clumsyProduct = (num1, num2) => {
//   for (let i = 1; i <= 100000000; i++) {}
//   return num1 * num2;
// };

// const caching = (expenseFunc) => {
//   const memory = {};

//   return (...args) => {
//     const key = args.join("_");

//     if (key in memory) {
//       return memory[key];
//     } else {
//       const result = expenseFunc(...args);
//       memory[key] = result;
//       return result;
//     }
//   };
// };

// const memoizedClumsyProduct = caching(clumsyProduct);

// console.time("First Call");
// console.log(memoizedClumsyProduct(534, 4352));
// console.timeEnd("First Call");

// console.time("Second Call");
// console.log(memoizedClumsyProduct(534, 4352));
// console.timeEnd("Second Call");

/*
2323968
First Call: 76.15ms
2323968
Second Call: 0.124ms
*/

// ----------------------------------------------------

// Question 4: Output Based Question on Event Loop

// console.log("a");
// setTimeout(() => console.log("set"), 0);
// Promise.resolve(() => console.log("Pro")).then((res) => res());
// console.log("b");

/*
a
b
Pro
set
*/

// ----------------------------------------------------

// Question 5: Infinite Curring

// function add(num1) {
//   return function (num2) {
//     return function (num3) {
//       return function (num4) {
//         return function () {
//           return num1 + num2 + num3 + num4;
//         };
//       };
//     };
//   };
// }

// Infiinite Curring
// function add(a) {
//   return function (b) {
//     if (b) {
//       return add(a + b);
//     } else {
//       return a;
//     }
//   };
// }

// console.log(add(5)(2)(7)(6)());

// ----------------------------------------------------

// Question 6: Implement this code

// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total);

// class Calculator {
//   constructor() {
//     this.total = 0;
//   }

//   add(num) {
//     this.total += num;
//     return this;
//   }
//   subtract(num) {
//     this.total -= num;
//     return this;
//   }
//   multiply(num) {
//     this.total *= num;
//     return this;
//   }
// }

// const calc = new Calculator();
// const result = calc.add(10).multiply(5).subtract(30).add(10);

// console.log(result.total);
