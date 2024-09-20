function isHappy(n: number): boolean {
  if (n === 1) return true;

  function getNext(value: number): number {
    let string = value.toString();
    let newValue = 0;
    for (let i = 0; i < string.length; i++) {
      newValue += (+string[i]) ** 2;
    }

    return newValue;
  }

  let slow = n;
  let fast = getNext(n);

  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
}

// function isHappy(n: number): boolean {
//   const getNext = (num: number): number => {
//     let sum = 0;
//     while (num > 0) {
//       const digit = num % 10;
//       sum += digit * digit;
//       num = Math.floor(num / 10);
//     }

//     return sum;
//   };

//   let slow = n;
//   let fast = getNext(n);

//   while (fast !== 1 && slow !== fast) {
//     slow = getNext(slow);
//     fast = getNext(getNext(fast));
//   }

//   return fast === 1;
// }

console.log(isHappy(20));
console.log(isHappy(19));
console.log(isHappy(7));
