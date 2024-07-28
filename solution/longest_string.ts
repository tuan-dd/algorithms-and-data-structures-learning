function longestString(s: string) {
  let idx = 0;
  const map = new Map<string, number>();
  let max = 0;
  for (let next = 0; next < s.length; next++) {
    const value = s[next];
    if (!map.has(value)) {
      map.set(value, next);
    } else {
      max = Math.max(max, next - idx);
      idx = map.get(value);
      map.set(value, next);
    }
  }
  // console.log(idx);
  return Math.max(max, s.length - idx);
}

console.log(longestString("ab"));
console.log(longestString("abb"));
console.log(longestString("adbcbc"));
