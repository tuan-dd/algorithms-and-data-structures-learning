const ROMAN = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const canBefore = {
  V: 'I',
  X: 'I',
  L: 'X',
  C: 'X',
  D: 'C',
  M: 'C',
};
function romanToIntDennis(s: string): number {
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === canBefore[s[i + 1]]) {
      value -= ROMAN[s[i]];
    } else {
      value += ROMAN[s[i]];
    }
  }
  return value;
}

function romanToInt(s: string): number {
  let sum: number = 0;

  for (let i = 0; i < s.length; i++) {
    const current: number = ROMAN[s[i]];
    const next: number = ROMAN[s[i + 1]];

    if (next && current < next) {
      sum += next - current;
      i++; // skip next
    } else sum += current;
  }

  return sum;
}
console.log(romanToInt('XXX'));
console.log(romanToInt('CMXC'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
