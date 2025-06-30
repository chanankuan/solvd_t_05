/**
 * Returns the intersection of two arrays — elements common to both.
 *
 * @template T
 * @param {T[]} arr1 - The first array.
 * @param {T[]} arr2 - The second array.
 * @returns {T[]} A new array containing elements found in both input arrays. Duplicates from `arr2` are preserved if present in `arr1`.
 *
 * @example
 * getArrayIntersection([1, 2, 3], [2, 3, 4]);
 * // Returns: [2, 3]
 *
 * @example
 * getArrayIntersection(['a', 'b'], ['b', 'b', 'c']);
 * // Returns: ['b', 'b']
 */
function getArrayIntersection(arr1, arr2) {
  const intersected = [];
  const set = new Set(arr1);

  for (const el of arr2) {
    if (set.has(el)) {
      intersected.push(el);
    }
  }

  return intersected;
}

/**
 * Returns the union of two arrays — all unique elements from both.
 *
 * @template T
 * @param {T[]} arr1 - The first array.
 * @param {T[]} arr2 - The second array.
 * @returns {T[]} A new array containing all unique elements from both input arrays.
 *
 * @example
 * getArrayUnion([1, 2, 3], [3, 4, 5]);
 * // Returns: [1, 2, 3, 4, 5]
 *
 * @example
 * getArrayUnion(['a', 'b'], ['b', 'c']);
 * // Returns: ['a', 'b', 'c']
 */
function getArrayUnion(arr1, arr2) {
  const union = new Set(arr1);

  for (const el of arr2) {
    if (!union.has(el)) {
      union.add(el);
    }
  }

  return Array.from(union);
}
