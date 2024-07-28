function isIsomorphicDennis(t: string, s: string): boolean {
  let objectLeft: Record<string, string> = {};
  let objectRight: Record<string, string> = {};

  for (let i = 0; i < s.length; i++) {
    const characterLeft = t[i];
    const characterRight = s[i];

    if (!objectLeft[characterLeft] && !objectRight[characterRight]) {
      objectLeft[characterLeft] = characterRight;
      objectRight[characterRight] = characterLeft;
      continue;
    }

    if (objectLeft[characterLeft] !== characterRight) return false;
  }

  return true;
}

function isIsomorphic(s: string, t: string): boolean {
  const map = new Array(128).fill(0);
  const set = new Set<number>();

  for (let i = 0; i < t.length; i++) {
    const l = s.charCodeAt(i);
    const r = t.charCodeAt(i);
    if (map[l] === 0) {
      if (set.has(r)) return false;
      set.add(r);
      map[l] = r;
    } else if (map[l] !== r) {
      return false;
    }
  }
  return true;
}

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('badc', 'baba')); // false
