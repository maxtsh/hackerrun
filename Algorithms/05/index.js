// Plus Minus

function plusMinus(arr) {
  const n = arr.length;
  let minus = 0;
  let plus = 0;
  let zeros = 0;

  arr.forEach((item) => {
    item > 0 ? plus++ : item < 0 ? minus++ : item == 0 ? zeros++ : null;
  });

  const resultMinus = (minus / n).toFixed(6);
  const resultPlus = (plus / n).toFixed(6);
  const resultZeros = (zeros / n).toFixed(6);

  console.log(resultPlus);
  console.log(resultMinus);
  console.log(resultZeros);
}

console.log(plusMinus([1, -2, -5, 4, 0, 3]));
