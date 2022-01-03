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


function getCommonDirectoryPath(pathes) {
  let arr = pathes.map((e) => e.split('/'));
  let unsw = [];
  while (arr[0].length > 0) {
    const elem = arr[0][0];
    const res = arr.every((array) => array[0] === elem);
    if (res) {
      arr = arr.map((array) => array.slice(1, array.length));
      unsw.push(elem);
    } else {
      break;
    }
  }
  // .map((e) => (e === '' ? '/' : e))
  unsw = unsw.map((e) => (e === '' ? '/' : e)).reduce((acc, curr) => {
    let res = acc + curr;
    if (curr !== '/') {
      res += '/';
    }
    return res;
  }, '');

  return unsw;
}


console.log(getCommonDirectoryPath(['/web/assets/style.css', '/.bin/mocha', '/read.me']));
console.log(getCommonDirectoryPath(['/web/images/image1.png', '/web/images/image2.png']));


