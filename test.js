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

function getPolynom() {
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
}

const f = getPolynom(2, 3, 5);
console.log(f(0));
console.log(f(2));
console.log(f(3));
