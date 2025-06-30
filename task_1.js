/**
 * Filters an array to include only unique items based on a callback function.
 *
 * @template T
 * @param {T[]} arr - The input array to filter.
 * @param {(item: T) => any} cb - A callback function that returns the key used to determine uniqueness.
 * @returns {T[]} A new array with only the first occurrence of each unique item, based on the key from the callback.
 *
 * @example
 * const data = [{ id: 1 }, { id: 2 }, { id: 1 }];
 * const unique = customFilterUnique(data, item => item.id);
 * console.log(unique); // [{ id: 1 }, { id: 2 }]
 */
function customFilterUnique(arr, cb) {
  const seen = new Set();
  const output = [];

  for (const item of arr) {
    const key = cb(item);

    if (!seen.has(key)) {
      seen.add(key);
      output.push(item);
    }
  }

  return output;
}
