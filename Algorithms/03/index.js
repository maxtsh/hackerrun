// ***** A very Big Sum

function aVeryBigSum(n, input) {
  if (typeof n !== "number") return "The n must be a number";

  if (n > 10 || n < 1)
    return "The n must be between 1 and 10 or eqault to them";

  if (!Array.isArray(input)) return "Input must be an array";

  if (input.length !== n)
    return "The n value must be equal to the array length";

  const sum = input.reduce((total, item) => (total = item + total));

  return sum;
}

console.log(
  aVeryBigSum(5, [1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
