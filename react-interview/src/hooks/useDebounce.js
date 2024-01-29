export const useDebounce = (expensiveFunc) => {
  let timerId;

  return function (query) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      expensiveFunc(query);
    }, 300);
  };
};
