/**
 *
 * @param nums
 * @param val
 * @returns number not same vals///
 */
function removeElement(nums: number[], val: number): number {
  let index = 0;
  let lastIndex = nums.length - 1;

  while (index <= lastIndex) {
    if (nums[index] === val) {
      nums[index] = nums.pop();
      lastIndex--;
    } else index++;
  }
  if (nums[index]) nums.pop();

  return index;
}

let data = [4, 5, 5, 5, 7, 9, 4, 2, 4, 6, 7, 4, 5];
console.log(removeElement(data, 5));
console.log(data);
