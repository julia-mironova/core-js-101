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
*/


function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const c = (isStartIncluded === true) ? '[' : '(';
  const d = (isEndIncluded === true) ? ']' : ')';
  const e = (a > b) ? `${b}, ${a}` : `${a}, ${b}`;
  return `${c}${e}${d}`;
}


console.log(getIntervalString(0, 1, false, true));
