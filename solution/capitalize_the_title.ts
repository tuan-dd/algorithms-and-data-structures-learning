function capitalizeTitle(title: string): string {
  let fast = title.length - 2;
  let newWorld = "";
  let newTitle = "";
  for (let slow = title.length - 1; slow >= 0; slow--) {
    const charNext = title[fast];
    let char = title[slow].toLowerCase();

    if (charNext === " " || !charNext) {
      if (slow - fast < 2) {
        char = char.toUpperCase();
      }

      newTitle = char + newWorld + newTitle;
      newWorld = "";
    } else {
      newWorld = char + newWorld;
    }
    fast--;
  }

  return newTitle;
}

console.log(capitalizeTitle("capiTalIze tHe titLe"));
