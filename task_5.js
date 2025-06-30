/**
 * Measures the execution time (in milliseconds) of a function operating on an array.
 *
 * @template T
 * @param {(arr: T[]) => any} fn - The function to execute and measure. It receives the array as an argument.
 * @param {T[]} arr - The array to be passed to the function.
 * @returns {number} The time it took (in milliseconds) to execute the function.
 *
 * @example
 * function sumArray(arr) {
 *   return arr.reduce((a, b) => a + b, 0);
 * }
 *
 * const time = measureArrayPerformance(sumArray, [1, 2, 3, 4, 5]);
 * console.log(`Execution time: ${time} ms`);
 */
function measureArrayPerformance(fn, arr) {
  const startTime = performance.now();

  fn(arr);

  const endTime = performance.now();

  return endTime - startTime;
}

function double(arr) {
  return arr.map((n) => n * 2);
}

function unique(arr) {
  return arr.filter((n, i, array) => array.indexOf(n) === i);
}

function total(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

console.log(
  "double performance: " + measureArrayPerformance(double, array) + "ms"
);
console.log(
  "unique performance: " + measureArrayPerformance(unique, array) + "ms"
);
console.log(
  "total performance: " + measureArrayPerformance(total, array) + "ms"
);
