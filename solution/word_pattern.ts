function wordPatternDennis(pattern: string, s: string): boolean {
  const object = {};
  let sIdx = 0;
  const set = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    let newWord = '';

    while (sIdx < s.length && s[sIdx] !== ' ') {
      newWord += s[sIdx];

      sIdx++;
    }

    if (object[char] !== newWord) {
      if (set.has(newWord) || (object[char] && object[char] !== newWord)) {
        return false;
      }
      set.add(newWord);
      object[char] = newWord;
    }

    sIdx += 1;
  }

  return --sIdx === s.length;
}

// function wordPattern(pattern: string, s: string): boolean {
//   const wordMap: { [key: string]: string } = {};
//   const charMap: { [key: string]: boolean } = {};
//   let sIdx = 0;

//   for (let i = 0; i < pattern.length; i++) {
//     const char = pattern[i];
//     const word = s.substring(sIdx).split(' ')[0];

//     if (wordMap[char] !== word) {
//       if (charMap[char] || (wordMap[char] && wordMap[char] !== word)) {
//         return false;
//       }
//       charMap[char] = true;
//       wordMap[char] = word;
//     }

//     sIdx += word.length + 1;
//   }

//   return sIdx === s.length;
// }

// console.log(wordPattern('abba', 'dog cat cat dog')); // true
// console.log(wordPattern('abba', 'dog cat cat fish')); // false
// console.log(wordPattern('aaaa', 'dog cat cat dog')); // false
// console.log(wordPattern('abba', 'dog dog dog dog')); // false
// console.log(wordPattern('abba', 'cat dog dog cat dog')); // false
// console.log(wordPattern('a', 'a')); // false
