/* eslint-disable comma-dangle */
/* eslint-disable no-multi-spaces */
/* eslint-disable indent */
/* eslint-disable no-bitwise */

/* function caty(isPositiveAnswer) {
  console.log(1);
  return new Promise((resolve, reject) => {
    console.log(2);
    if (typeof isPositiveAnswer === 'boolean') {
      setTimeout(() => {
        console.log(3);
        resolve((2 + 2).toString());
      }, 0);
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      setTimeout(() => reject('Wrong parameter is passed! Ask her again.'), 0);
    }
  });
}
console.log(4);

const uns = caty(true);

console.log(5);

function a(f) {
  console.log(6);
  console.log(f);
}

console.log(7);
uns.then(a);


console.log(8);
console.log(`uns=${uns}`);
console.log(9);

/// codewars!!
function multiplyAll(arr) {
  function numMul(n) {
    return arr.map((e) => e * n);
  }
  return numMul;
}
console.log(multiplyAll([1, 2, 3])(2)); */

// - ho -ho..

/* function ho(arg) {
  console.log(arg);
  if (!arg) {
    return 'Ho!';
  } else {
    return `Ho ${arg}`
  }
}


console.log(ho(ho())); */

// once
/* function once(fn) {
  let isExecuted = false;
  function a(...arg) {
    if (!isExecuted) {
      isExecuted = true;
      return fn(...arg);
    }
  }
  return a;
}
const xz1 = once(console.log);
console.log(xz1(5));
console.log(xz1(6)); */

// mulitifilter

/*
function isEven(el) {
  return el % 2 === 0;
}

function isGTten(el) {
  return el > 10;
}

console.log([1, 2, 3, 4, 10, 11, 12, 20, 21, 22].filter(multiFilter(isEven, isGTten)));
// should return [12,20,22] */

/* function getPolynom() {
  // eslint-disable-next-line prefer-rest-params
  const args = arguments;
  const n = args.length;
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-unused-vars
  function polinom(x) {
    let exp = 0;
    let k = n - 1;
    for (let i = 0; i < n; i += 1) {
      exp += args[i] * (x ** k);
      k -= 1;
    }
    return exp;
  }
  return polinom;
} */

/* function add(n) {
  function a(x) {
    if (x) {
      return x + n;
    }
  }
  return a;
}

console.log(add(1)(2)(3)); */

/* function add(n) {
  function a(x) {
    if (x) {
      return x + n;
    }
  }
  return a;
} */


/* function add(a) {
  return function (b) {
    if (b) {
      return add(a + b); // which again can take an argument.
    }
    a();
    return a; // it will keep on adding 1+2+3+4..
  };
}
console.log(add(1)(2)(3)); */

// create continue count
/* function makeLooper(str) {
  let cz = 0;
  return function () {
    if (cz === str.length) {
      cz = 0;
    }
    const uns = str[cz];
    cz += 1;
    return uns;
  };
}

const dog = makeLooper('cat'); */

/* function add(n) {
  const fn = function (x) {
    return add(n + x);
  };

  fn.valueOf = function () {
    return n;
  };

  return fn;
} */

/* function uncurry(fn) {
  // eslint-disable-next-line func-names
  return function (...args) {
    while (typeof fn === 'function') {
      if (fn.length !== 0 && args.length === 0) {
        return fn;
      }
      // eslint-disable-next-line no-param-reassign
      fn = fn(...args.splice(0, fn.length));
    }
    return fn;
  };
}
console.log(uncurry(console.log((1)(5)(2)))); */

/* group([
  *      { country: 'Belarus', city: 'Brest' },
  *      { country: 'Russia', city: 'Omsk' },
  *      { country: 'Russia', city: 'Samara' },
  *      { country: 'Belarus', city: 'Grodno' },
  *      { country: 'Belarus', city: 'Minsk' },
  *      { country: 'Poland', city: 'Lodz' }
  *     ],
  *     item => item.country,
  *     item => item.city
  *   )
  *            =>
  *   Map {
  *    "Belarus" => ["Brest", "Grodno", "Minsk"],
  *    "Russia" => ["Omsk", "Samara"],
  *    "Poland" => ["Lodz"]
  *   }
  */
  function sortCitiesArray(arr) {
    return arr.sort((a, b) => {
      if (a.country > b.country) {
        return 1;
      }
      if (b.country > a.country) {
          return -1;
      }
      return 0;
    }).sort((a, b) => {
      if (a.country !== b.country) {
        return 0;
      }
      if (a.city > b.city) {
        return 1;
      }
      if (b.city > a.city) {
          return -1;
      }
      return 0;
    });
  }

console.log(sortCitiesArray([
        { country: 'Russia',  city: 'Moscow' },
        { country: 'Belarus', city: 'Minsk' },
        { country: 'Poland',  city: 'Warsaw' },
        { country: 'Russia',  city: 'Saint Petersburg' },
        { country: 'Poland',  city: 'Krakow' },
        { country: 'Belarus', city: 'Brest' }
      ]));
