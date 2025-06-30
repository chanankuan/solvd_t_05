/**
 * Splits an array into chunks of a specified size.
 *
 * @template T
 * @param {T[]} arr - The array to be split into chunks.
 * @param {number} size - The maximum size of each chunk.
 * @returns {T[][]} A new array containing subarrays (chunks) of the specified size.
 *
 * @example
 * chunkArray([1, 2, 3, 4, 5], 2);
 * // Returns: [[1, 2], [3, 4], [5]]
 */
function chunkArray(arr, size) {
  const output = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);

    output.push(chunk);
  }

  return output;
}
