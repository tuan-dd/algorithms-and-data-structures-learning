function containsNearbyDuplicateDennis(numbers: number[], k: number): boolean {
  const map = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    if (i - map.get(numbers[i]) <= k) return true;

    map.set(numbers[i], i);
  }
  return false;
}

function containsNearbyDuplicate(numbers: number[], k: number): boolean {
  const set = new Set();
  let left = 0;

  for (let r = 0; r < numbers.length; r++) {
    if (r - left > k) {
      set.delete(numbers[left++]);
    }
    if (set.has(numbers[r])) {
      return true;
    } else {
      set.add(numbers[r]);
    }
  }
  return false;
}

console.log(containsNearbyDuplicateDennis([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicateDennis([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicateDennis([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicateDennis([99, 99], 2));
