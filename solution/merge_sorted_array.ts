/**
 * Merges two sorted arrays into a single sorted array.
 *
 * @param numOne - The first sorted array.
 * @param m - The number of elements in the first array.
 * @param numTwo - The second sorted array.
 * @param n - The number of elements in the second array.
 *
 * @returns The merged and sorted array.
 */
function merge(
  numOne: number[],
  m: number,
  numTwo: number[],
  n: number
): number[] {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    numOne[p--] = numOne[p1] > numTwo[p2] ? numOne[p1--] : numTwo[p2--];
  }

  while (p2 >= 0) {
    numOne[p--] = numTwo[p2--];
  }

  return numOne;
}

console.log(merge([3, 7, 8, 0, 0, 0], 3, [3, 4, 6], 3));
