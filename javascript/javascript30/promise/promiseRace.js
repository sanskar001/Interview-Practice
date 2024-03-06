// Promise.race() polyfill

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
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

promiseRace([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log("Error:", err));
