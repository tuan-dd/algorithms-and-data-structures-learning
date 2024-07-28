function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = {};
  let count = ransomNote.length;
  for (let i = 0; i < magazine.length; i++) {
    map[magazine[i]] = (map[magazine[i]] || 0) + 1;

    if (map[magazine[i]] <= 0) {
      count--;
    }

    map[ransomNote[i]] = (map[ransomNote[i]] || 0) - 1;

    if (map[ransomNote[i]] >= 0) {
      count--;
    }
    if (count === 0) return true;
  }

  return !count;
}

console.log(canConstruct('ca', 'ac'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('b', 'a'));
console.log(canConstruct('aacbe', 'abvac'));
