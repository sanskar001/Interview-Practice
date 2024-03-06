// Promise.allSettled() polyfill

function promiseAllSettled(promises) {
  const output = new Array(promises.length);
  let indexCount = 0;

  return new Promise((resolve) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          output[index] = { status: "fullfilled", value: res };
          indexCount++;
          if (indexCount === promises.length) {
            resolve(output);
          }
        })
        .catch((err) => {
          output[index] = { status: "rejected", value: err };
          indexCount++;
          if (indexCount === promises.length) {
            resolve(output);
          }
        });
    });
  });
}

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

promiseAllSettled([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log("Error:", err));
