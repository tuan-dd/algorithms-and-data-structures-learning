function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let min = 0;
  let total = 0;

  while (left < right) {
    const numberL = height[left];
    const numberR = height[right];

    if (numberL >= numberR) {
      min = Math.max(min, numberR);
      total += min - numberR;

      right--;
    } else {
      min = Math.max(min, numberL);
      total += min - numberL;
      left++;
    }
  }

  return total;
}
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //9
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
console.log(trap([3, 0, 2])); // 2
