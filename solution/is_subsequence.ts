function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;
  let tIndex = 0;

  while (tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;

    if (sIndex === s.length) {
      return true;
    }
  }

  return sIndex === s.length;
}

console.log(isSubsequence('b', 'abc')); // true
console.log(isSubsequence('d', 'dcvvfbfdsmkfwelj')); // true
console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
