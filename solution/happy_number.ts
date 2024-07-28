function isHappyDennis(n: number): boolean {
  if (n === 1) return true;

  let slow = n;
  let fast = n;
  let num = 0;
  while (true) {
    let string = fast.toString();

    let value = 0;

    for (let i = 0; i < string.length; i++) {
      value += +string[i] * +string[i];
    }

    if (value === 1) return true;

    if (value === slow) return false;
    fast = value;
    if (num) {
      value = 0;
      string = slow.toString();
      for (let i = 0; i < string.length; i++) {
        value += +string[i] * +string[i];
      }

      slow = value;

      num--;
    } else {
      num++;
    }
  }
}

function isHappy(n: number): boolean {
  const getNext = (num: number): number => {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }

    return sum;
  };

  let slow = n;
  let fast = getNext(n);

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;
}

console.log(isHappy(20));
console.log(isHappy(19));
