function maxProfit(prices: number[]): number {
  let min = prices[0];
  let maxYe = 0;

  prices.forEach((e) => {
    if (e === min) return;
    if (e < min) min = e;

    maxYe = Math.max(maxYe, e - min);
  });

  return maxYe;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
