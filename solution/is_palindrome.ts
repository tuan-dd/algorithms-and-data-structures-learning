const regex = /[a-zA-Z0-9]/;

function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !regex.test(s[left])) left++;
    while (left < right && !regex.test(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome(" P"));
console.log(isPalindrome(".,"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
