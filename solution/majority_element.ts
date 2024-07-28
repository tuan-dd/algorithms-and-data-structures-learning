function majorityElementDennis(nums: number[]): number {
  let a = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === a) {
      count++;
    } else if (count === 0) {
      a = nums[i];
      count = 1;
    } else {
      count--;
    }
  }

  return a;
}

function majorityElement(nums: number[]): number {
  const numbers = {};
  let max = nums[0];
  let amount = 0;
  for (const n of nums) {
    numbers[n] = (numbers[n] ?? 0) + 1;
    if (numbers[n] > amount) {
      max = n;
      amount = numbers[n];
    }
  }
  return max;
}

console.log(majorityElement([1, 9, 4, 9, 9]));
