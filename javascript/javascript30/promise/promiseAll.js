// Polyfil - Promise.all()

const promiseAll = (promises) => {
  const result = new Array(promises.length);
  let indexCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      // Promise.resolve(promise)
      promise
        .then((res) => {
          result[index] = res;
          indexCount++;

          if (indexCount === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};

// ===================================

// TESTING

const promise1 = new Promise((resolve) =>
  setTimeout(resolve, 100, "Success-200")
);

const promise2 = Promise.resolve(3);
const promise3 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Math Random Success");
  } else {
    reject("Math Random Error");
  }
});

promiseAll([promise1, promise2, promise3])
  .then((res) => console.log("Response: ", res))
  .catch((err) => console.log("Error:", err));
