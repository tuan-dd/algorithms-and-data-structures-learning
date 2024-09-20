function lengthOfLongestSubstringDennis(s: string) {
  let idx = 0;
  const map = new Map<string, number>();
  let max = 0;
  for (let next = 0; next < s.length; next++) {
    const value = s[next];
    if (map.has(value) && map.get(value) >= idx) {
      max = Math.max(max, next - idx);
      idx = map.get(value) + 1;
    }
    map.set(value, next);
  }

  return Math.max(max, s.length - idx);
}

function lengthOfLongestSubstring(s: string): number {
  let substringSet = new Set();
  let leftP = 0;
  let res = 0;

  for (let rightP = 0; rightP < s.length; ++rightP) {
    while (substringSet.has(s[rightP])) {
      substringSet.delete(s[leftP]);
      leftP += 1;
    }
    substringSet.add(s[rightP]);
    res = Math.max(res, rightP - leftP + 1);
  }
  return res;
}

// console.log(lengthOfLongestSubstring("ab"));
// console.log(lengthOfLongestSubstring("abb"));
console.log(lengthOfLongestSubstring("abba"));
console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring(" ")); //3
