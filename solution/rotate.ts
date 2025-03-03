function rotate(nums: number[], k: number): void {
  const numberRotate = k % nums.length;
  if (!nums.length || !numberRotate) {
    return;
  }

  let right = nums.length - 1 - numberRotate;
  let left = 0;

  while (left < nums.length) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left--;
    right--;
  }
  console.log(right, left);
}

const a = [1, 2, 3, 6, 7, 8, 9];
// k=3
// 1 [9,1,2,3,6,7,8]
// 2 [8,9,1,2,3,6,7]
const b = [-1, -100, 3, 99];
const c = [1, 2, 3, 4, 5, 6];
rotate(a, 3);
rotate(b, 2);
rotate(c, 4);
console.log(a);
// console.log(b);
// console.log(c);

// TODO not solve
