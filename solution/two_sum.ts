function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (map.has(element)) {
      return [map.get(element), i];
    }
    map.set(target - element, i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 7, 11, 15], 18));
console.log(twoSum([-3, 4, 3, 90], 0));
