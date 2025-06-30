/**
 * Shuffles the elements of an array in place using the Fisher-Yates algorithm.
 *
 * @template T
 * @param {T[]} arr - The array to shuffle.
 * @returns {T[]} The same array with its elements shuffled.
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * customShuffle(numbers);
 * // numbers is now randomly shuffled, e.g., [3, 1, 5, 2, 4]
 */
function customShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
