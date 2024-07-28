/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function find(nums: number[], k: number): number {
  let left = 0;
  let curr = 0;
  let ans = 0;
  for (let right = 0; right < nums.length; right++) {
    curr += nums[right];
    while (curr > k) {
      curr -= nums[left];
      left++;
    }

    ans = Math.max(ans, right - left + 1);
  }

  return ans;
}

// console.log(find([4, 2, 1, 1, 3, 1, 2, 7, 5], 8));

function sequentialOneSequentDennis(binary: string): number {
  let max = 0;
  let curr = 0;
  let isConvert = false;
  for (let next = 0; next < binary.length; next++) {
    const value = +binary[next];

    if (!curr && !value) continue;

    if (value) {
      curr++;
      continue;
    }

    if (!isConvert && +binary[next + 1]) {
      isConvert = true;
      curr++;
    } else {
      isConvert = false;
      max = Math.max(max, curr);
      curr = 0;
    }
  }

  return Math.max(max, curr);
}

function sequentialOneSequent(binary: string): number {
  let max = 0;
  let curr = 0;
  let left = 0;

  for (let next = 0; next < binary.length; next++) {
    if (binary[next] === '0') {
      curr++;
    }

    while (curr > 1) {
      if (binary[left] === '0') {
        curr--;
      }
      left++;
    }

    max = Math.max(max, next - left + 1);
  }

  return Math.max(max, curr);
}

console.log(sequentialOneSequent('1110101100111110111'));
console.log(sequentialOneSequentDennis('1110101100111110111'));
