const mapPattern = `
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
`;

const getParsedPattern = (data) =>
  data
    .split("\n")
    .filter(Boolean)
    .map((line) => line.split(""));

const pattern = getParsedPattern(mapPattern);
const offsetX = 3;
const offsetY = 1;
const slopes = [
  { x: 1, y: 1 },
  { x: 3, y: 1 },
  { x: 5, y: 1 },
  { x: 7, y: 1 },
  { x: 1, y: 2 }
];

const getCountOfTreesByPatternAndOffsets = (pattern, offsetX, offsetY) => {
  let count = 0;
  const maxY = pattern.length;
  const maxX = pattern[0].length;
  const position = { x: 0, y: 0 };

  while (position.y < maxY) {
    if (pattern[position.y][position.x] === "#") {
      count++;
    }

    position.y = position.y + offsetY;
    position.x = (position.x + offsetX) % maxX;
  }

  return count;
};

const getTotalCountOfTreesByPatternAndSlopes = (pattern, slopes) =>
  slopes.reduce(
    (count, { x, y }) =>
      count * getCountOfTreesByPatternAndOffsets(pattern, x, y),
    1
  );
