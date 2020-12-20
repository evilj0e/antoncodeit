/*
With the toboggan login problems resolved, you set off toward the airport. 
While travel by toboggan might be easy, it's certainly not safe: there's 
very minimal steering and the area is covered in trees. You'll need to see 
which angles will take you near the fewest trees.

Due to the local geology, trees in this area only grow on exact integer 
coordinates in a grid. You make a map (your puzzle input) of the open 
squares (.) and trees (#) you can see.

Starting at the top-left corner of your map and following a slope of right 
3 and down 1, how many trees would you encounter?

Determine the number of trees you would encounter if, for each of the following 
slopes, you start at the top-left corner and traverse the map all the way 
to the bottom:

Right 1, down 1.
Right 3, down 1. (This is the slope you already checked.)
Right 5, down 1.
Right 7, down 1.
Right 1, down 2.

In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) 
respectively; multiplied together, these produce the answer 336.

What do you get if you multiply together the number of trees encountered 
on each of the listed slopes?

https://adventofcode.com/2020/day/3
*/

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
