function revertNOnumber(test: string): string {
  let index = 0;
  let lastIndex = test.length - 1;

  const charArray = test.split('');
  let isNumber = false;
  while (index < lastIndex) {
    if (!isNaN(parseInt(charArray[index]))) {
      isNumber = true;
      index++;
    }

    if (!isNaN(parseInt(charArray[lastIndex]))) {
      lastIndex--;
      isNumber = true;
    }

    if (isNumber) {
      isNumber = false;
      continue;
    }

    [charArray[index], charArray[lastIndex]] = [
      charArray[lastIndex],
      charArray[index],
    ];
    index++;
    lastIndex--;
  }

  return charArray.join('');
}

const input = 'ABC12e3d591f';

console.log(revertNOnumber(input));
console.log(revertNOnumber('123'));
