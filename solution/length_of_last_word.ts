function lengthOfLastWordDennis(s: string): number {
  const str = s.trim();

  let length = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      return length;
    }

    length += 1;
  }

  return length;
}

function lengthOfLastWord(s: string): number {
  let ctr = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') ctr++;
    else if (ctr > 0) break;
  }

  return ctr;
}

console.log(lengthOfLastWordDennis('Hello World'));
console.log(lengthOfLastWordDennis('Hello World       '));
console.log(lengthOfLastWordDennis('Hello World    this is the end  '));
console.log(lengthOfLastWordDennis('a'));
