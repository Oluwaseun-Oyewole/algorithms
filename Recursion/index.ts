const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

type Point = {
  x: number;
  y: number;
};

function walk(
  maze: string[],
  wall: string,
  currentPoint: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
) {
  //off the map
  if (
    currentPoint.x < 0 ||
    currentPoint.y < 0 ||
    currentPoint.x >= maze[0].length ||
    currentPoint.y >= maze.length
  ) {
    return false;
  }
  if (maze[currentPoint.y][currentPoint.x] === wall) return false;
  if (currentPoint.x === end.x && currentPoint.y === end.y) {
    path.push(end);
    return true;
  }
  if (seen[currentPoint.y][currentPoint.x]) return false;

  //pre
  seen[currentPoint.y][currentPoint.x] = true;
  path.push(currentPoint);

  //recurse
  for (let index = 0; index < directions.length; index++) {
    if (
      walk(
        maze,
        wall,
        {
          x: directions[index][0] + currentPoint.x,
          y: directions[index][1] + currentPoint.y,
        },
        end,
        seen,
        path
      )
    )
      return true;
  }

  //post
  path.pop();

  return false;
}

export default function mazeRunner(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
) {
  const seen: boolean[][] = new Array(maze.length)
    .fill("")
    .map(() => new Array(maze[0].length).fill(false));
  const path: Point[] = [];

  walk(maze, wall, start, end, seen, path);
  return path;
}

const maze = [
  "xxxxxxxxxx x",
  "x        x x",
  "x        x x",
  "x xxxxxxxx x",
  "x          x",
  "x xxxxxxxxxx",
];
console.log(mazeRunner(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 }));

const mazeResult = [
  { x: 10, y: 0 },
  { x: 10, y: 1 },
  { x: 10, y: 2 },
  { x: 10, y: 3 },
  { x: 10, y: 4 },
  { x: 9, y: 4 },
  { x: 8, y: 4 },
  { x: 7, y: 4 },
  { x: 6, y: 4 },
  { x: 5, y: 4 },
  { x: 4, y: 4 },
  { x: 3, y: 4 },
  { x: 2, y: 4 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
];
