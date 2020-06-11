// Diagonal Difference

// To solve the problem in another approach
function diagonalDifference(n, ...rest) {
  if (typeof n !== "number")
    return "The Matrix column and rows count must be a number";

  if (n !== rest.length)
    return "The n must be with respect to the columns and rows";

  if (!rest.every((item) => item.length == n))
    return "All rows length must be equal to n";

  let firstDiagonal = [];
  let secondDiagonal = [];

  for (let i = 1, j = 1; i <= n, j <= n; i++, j++) {
    firstDiagonal.push(rest[i - 1][j - 1]);
  }

  for (let i = 1, j = n; i <= n, j >= 1; i++, j--) {
    secondDiagonal.push(rest[i - 1][j - 1]);
  }

  const difference = Math.abs(
    firstDiagonal.reduce((total, item) => (total = total + item)) -
      secondDiagonal.reduce((total, item) => (total = total + item))
  );

  return difference;
}

console.log(diagonalDifference(3, [1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(
  diagonalDifference(
    4,
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  )
);

// To pass the test in hacker rank
function diagonalDifference2(arr) {
  const n = arr.length;

  let firstDiagonal = [];
  let secondDiagonal = [];

  for (let i = 0; i < n; i++) {
    firstDiagonal.push(arr[i][i]);
  }

  for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
    secondDiagonal.push(arr[i][j]);
  }

  const difference = Math.abs(
    firstDiagonal.reduce((total, item) => (total = total + item)) -
      secondDiagonal.reduce((total, item) => (total = total + item))
  );

  return difference;
}

console.log(
  diagonalDifference2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  diagonalDifference2([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
