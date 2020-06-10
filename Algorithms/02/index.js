// Compare the Triplets

function getResult(a, b) {
  // Checking if a or b is inserted and defined
  if (a === undefined || b === undefined)
    return "You don't have a or b inputs inserted!";

  // Checking if a and b are actually arrays
  if (!Array.isArray(a) && !Array.isArray(b))
    return "You must insert arrays as inputs!";

  // Checking if a and b are not empty arrays
  if (a.length === 0 || b.length === 0)
    return "One or both array inputs are empty!";

  // Checking if a and b have same length
  if (!(a.length === b.length)) return "You must insert arrays of same length!";

  // Checking if each item inside a are following rule of 100 >= a(i) => 1
  if (a.every((item) => item > 100) || b.every((item) => item > 100))
    return "Array items must be below or 100";

  // Checking if each item inside b are following rule of 100 >= b(i) => 1
  if (a.every((item) => item < 1) || b.every((item) => item < 1))
    return "Array items must be above 0";

  let aliceScore = 0;
  let bobScore = 0;

  for (let x = 0; x <= a.length; x++) {
    if (a[x] > b[x]) {
      aliceScore++;
    } else if (a[x] < b[x]) {
      bobScore++;
    }
  }

  return [aliceScore, bobScore];
}

console.log(getResult([5, 6, 7], [3, 6, 10]));
console.log(getResult([17, 28, 30], [99, 16, 8]));
