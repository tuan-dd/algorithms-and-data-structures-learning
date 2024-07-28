function getStr(s: string) {
  let value = s[0];
  let string = s[0];
  for (let index = 1; index < s.length; index++) {
    const element = s[index];
    if (element === value) continue;
    if (element !== value) {
      string += element;
      value = element;
    }
  }

  return string;
}

// console.log(getStr('aabbbcca'));

function count(s: string) {
  let string = s[0];
  let index = 0;
  let count = 1;
  for (let i = 1; i < s.length; i++) {
    let element = s[i];
    if (element === s[index]) {
      count++;
      continue;
    }

    index = i;
    string += count.toString() + element;
    count = 1;
  }

  return string + count.toString();
}

console.log(count('aabcccccaaa'));
