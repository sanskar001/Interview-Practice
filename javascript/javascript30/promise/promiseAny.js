// Promise.any() polyfill

const promiseAny = (promises) => {
  const errorOutput = new Array(promises.length);
  let indexCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      // Promise.resolve(promise)
      promise.then(resolve).catch((err) => {
        errorOutput[index] = err;
        indexCount++;

        if (indexCount === promises.length) {
          reject(errorOutput);
        }
      });
    });
  });
};

// TESTING

const promise1 = new Promise((resolve) =>
  setTimeout(resolve, 100, "Success-100ms")
);

const promise2 = new Promise((resolve) =>
  setTimeout(resolve, 300, "Success-300ms")
);

const promise3 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Math Random Success");
  } else {
    reject("Math Random Error");
  }
});

Promise.any([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log("Error:", err));
