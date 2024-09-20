function revertNOnumber(test: string): string {
  let index = 0;
  let lastIndex = test.length - 1;

  const charArray = test.split("");

  while (index < lastIndex) {
    while (!isNaN(parseInt(charArray[index])) && index < lastIndex) index++;
    while (!isNaN(parseInt(charArray[lastIndex])) && index < lastIndex)
      lastIndex--;

    [charArray[index], charArray[lastIndex]] = [
      charArray[lastIndex],
      charArray[index],
    ];

    index++;
    lastIndex--;
  }

  return charArray.join("");
}

const input = "ABC12e3d591f";

console.log(revertNOnumber(input));
console.log(revertNOnumber("123"));
