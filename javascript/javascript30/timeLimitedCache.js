const TimeLimitedCache = class {
  constructor() {
    this.memory = {};
  }

  set(key, value, duration) {
    const expiryTime = new Date().getTime() + duration;
    let isExisted = false;

    if (this.memory[key]) {
      isExisted = true;
    }
    this.memory[key] = { value, duration, expiryTime };
    return isExisted;
  }

  get(key) {
    const item = this.memory[key];
    const now = new Date().getTime();

    if (item.expiryTime > now) {
      return item.value;
    } else {
      return -1;
    }
  }

  count() {
    let unExpiredCount = 0;
    Object.keys(this.memory).forEach((key) => {
      const item = this.memory[key];
      const now = new Date().getTime();

      if (item.expiryTime > now) {
        unExpiredCount++;
      }
    });

    return unExpiredCount;
  }
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.set(2, 55, 2000)); // false
console.log(timeLimitedCache.set(3, 33, 10)); // false
console.log(timeLimitedCache.get(1)); // 42
setTimeout(() => {
  console.log(timeLimitedCache.count()); // 2
}, 100);

/*

const TimeLimitedCache = function() {
    this.cache = new Map();  // Using Map so we don't need a size variable
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let found = this.cache.has(key);
    if (found) clearTimeout(this.cache.get(key).ref);  // Cancel previous timeout
    this.cache.set(key, {
        value,  // Equivalent to `value: value`
        ref: setTimeout(() => this.cache.delete(key), duration)
    });
    return found;
};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

*/
