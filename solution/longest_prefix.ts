function longestCommonPrefixDennis(strs: string[]): string {
  let prefix = strs[0];
  let lengthPrefix = prefix.length;
  for (let i = 1; i < strs.length; i++) {
    let str = strs[i];

    while (prefix !== str.slice(0, lengthPrefix)) {
      prefix = prefix.slice(0, -1);
      lengthPrefix--;

      if (!prefix) return '';
    }
  }

  return prefix;
}

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';

  let prefix: string = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // return -1 when strs different strs
    // return 0 when like
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === '') return '';
    }
  }

  return prefix;
}
console.log(longestCommonPrefixDennis(['flower', 'flow', 'flight']));
console.log(longestCommonPrefixDennis(['dog', 'racecar', 'car']));
