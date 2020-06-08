// Sum of array items

function getSum(input) {
  if (!input) throw new Error("There is no input!");
  if (input.length == 0) throw new Error("The input is empty!");

  const sum = input.reduce((total, item) => (total = total + item));

  return sum;
}

console.log(getSum([1, 2, 3, 4, 5, 6]));
console.log(getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(getSum([]));
// console.log(getSum());
