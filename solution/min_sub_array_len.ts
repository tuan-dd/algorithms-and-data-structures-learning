function minSubArrayLenDennis(target: number, nums: number[]): number {
  let minSubArray = nums.length + 1;
  let sum = 0;
  let idx = 0;

  for (let next = 0; next < nums.length; next++) {
    const value = nums[next];

    if (value >= target) return 1;

    sum += value;

    while (minSubArray > 2 && sum >= target) {
      minSubArray = Math.min(minSubArray, next - idx + 1);
      sum -= nums[idx++];
    }
  }

  return minSubArray > nums.length ? 0 : minSubArray;
}

function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0;
  let length = 0;
  let min = nums.length;

  for (let i = 0; i < nums.length; i++) {
    length++;

    sum += nums[i];
    // console.log("test", i, sum);
    if (sum >= target) {
      console.log(sum, i, length);
      min = Math.min(length, min);

      sum -= nums[i] + nums[i - length + 1];
      length -= 2;
      i--;
    }
  }

  return length < nums.length ? min : 0;
}

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
// console.log()); // 2
// console.log(minSubArrayLen(4, [1, 4, 4])); // 4
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
// console.log(minSubArrayLen(15, [1, 2, 3, 4, 5])); // 5
// console.log(minSubArrayLen(11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 0
