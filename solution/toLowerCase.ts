function toLowerCase(s: string): string {
  let ans = "";

  for (const char of s) {
    const curr = char.charCodeAt(0) - 65;
    if (curr >= 0 && curr <= 25) {
      ans += String.fromCharCode(97 + curr);
    } else {
      ans += char;
    }
  }

  return ans;
}
