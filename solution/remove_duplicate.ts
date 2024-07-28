// function removeDuplicateDennis(number: number[]): number {
//   let k = 0;
//   let isDuplicate = false;
//   for (let i = 1; i < number.length; i++) {
//     if (number[i] !== number[k]) {
//       k++;
//       if (isDuplicate) {
//         number[k] = number[i];
//         isDuplicate = false;
//       }
//     }
//     isDuplicate = true;
//   }
//   return k + 1;
// }

// function removeDuplicates(nums: number[]): number {
//   let counter = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] != nums[i - 1]) {
//       nums[counter] = nums[i];
//       counter++;
//     }
//   }

//   return counter;
// }

// let data = [1, 1, 2, 3, 3, 4];
// console.log(removeDuplicates(data));
// console.log(data);

/**
 *
 * @param numbers array number many duplicate
 * @description only accept the number no duplicate and one time duplicate
 * @returns number of the number change number only this number
 */
function removeDuplicateMediumDennis(numbers: number[]): number {
  let index = 0;

  for (let next = 1; next < numbers.length; next++) {
    const element = numbers[next];

    // if (numbers[index] !== element) {
    //   index++;
    //   numbers[index] = element;
    //   continue;
    // }

    if (numbers[index - 1] !== element) {
      index++;
      numbers[index] = element;
    }
  }

  return index + 1;
}

const a = [0, 0, 0, 1, 1, 1, 1, 3, 3];
console.log(removeDuplicateMediumDennis(a));
console.log(a);

const removeDuplicates = (nums: number[]): number => {
  let unique = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[unique - 2]) {
      nums[unique] = nums[i];
      unique++;
    }
  }

  return unique;
};

// const b = [0, 0, 0, 1, 1, 1, 3];
// console.log(removeDuplicates(b));
// console.log(b);
