const regex = /[a-zA-Z0-9]/;

function isPalindrome(s: string): boolean {
  let right = s.length - 1;
  let left = 0;

  while (left < right) {
    if (!regex.test(s[left])) {
      !regex.test(s[right]) && right--;
      left++;
      continue;
    }

    if (!regex.test(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome('0P'));
console.log(isPalindrome('.,'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
