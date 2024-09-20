function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) continue;
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    map.set(t[i], (map.get(t[i]) || 0) - 1);

    if (!map.get(s[i])) map.delete(s[i]);

    if (!map.get(t[i])) map.delete(t[i]);
  }

  return map.size === 0;
}
console.log(isAnagram("dgqztusjuu", "dqugjzutsu"));
console.log(isAnagram("rat", "cat"));
