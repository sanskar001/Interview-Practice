// Question 1: Pangram String Checker

// Pack my box with five dozen liquor jugs

// function pangramCheck(str) {
//   const alphabets = {
//     a: 1,
//     b: 1,
//     c: 1,
//     d: 1,
//     e: 1,
//     f: 1,
//     g: 1,
//     h: 1,
//     i: 1,
//     j: 1,
//     k: 1,
//     l: 1,
//     m: 1,
//     n: 1,
//     o: 1,
//     p: 1,
//     q: 1,
//     r: 1,
//     s: 1,
//     t: 1,
//     u: 1,
//     v: 1,
//     w: 1,
//     x: 1,
//     y: 1,
//     z: 1,
//   };

//   const newString = str.toLowerCase();
//   for (let char of newString) {
//     if (alphabets[char]) {
//       alphabets[char] -= 1;
//     }
//   }

//   for (let key in alphabets) {
//     if (alphabets[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// --------------------------------------------

// function pangramCheck(str) {
//   const newString = str.toLowerCase();
//   const arr = new Array(26).fill(false);

//   for (let char of newString) {
//     const charIndex = char.charCodeAt();
//     if (charIndex >= 97) {
//       arr[charIndex - 97] = true;
//     }
//   }

//   for (let val of arr) {
//     if (!val) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(pangramCheck("Pack my box with five dozen liquor jugs"));
// console.log(pangramCheck("Pack my box with five dozen liquor jug"));

// ===============================================================
