function shortestPathToExit(M: number, N: number, start: [number, number]) {
  const stepMove = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue = [[...start, 0]];

  const map: boolean[][] = new Array(M).fill(new Array(N).fill(false));
  console.log(map);
  map[start[0]][start[1]] = true;

  while (queue.length) {
    const [row, col, step] = queue.shift();

    if (row === 0 || row === M - 1 || col === 0 || col === N - 1) {
      return step;
    }

    for (const [stepRow, stepCol] of stepMove) {
      const nextRow = row + stepRow;
      const nextCol = col + stepCol;

      if (
        nextRow === 0 ||
        nextRow === M - 1 ||
        nextCol === 0 ||
        nextCol === N - 1
      ) {
        return step + 1;
      }

      if (
        nextRow >= 0 &&
        nextRow < M &&
        nextCol >= 0 &&
        nextCol < N &&
        !map[nextRow][nextCol]
      ) {
        map[nextRow][nextCol] = true;
        queue.push([nextRow, nextCol, step + 1]);
      }
    }
  }
  return -1;
}
const M = 5; // Độ dài cạnh dọc
const N = 5; // Độ dài cạnh ngang
const start: [number, number] = [2, 2]; // Điểm bắt đầu

console.log(shortestPathToExit(M, N, start));

console.log(shortestPathToExit(6, 6, [1, 1]));
