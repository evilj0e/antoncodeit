/*
Sudoku is a number-placement puzzle. The objective is
to fill a 9 × 9 grid with digits so that each column,
each row, and each of the nine 3 × 3 sub-grids that compose
the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers
represents a correct solution to Sudoku.

Link to the description: http://bit.ly/antoncodeit-description-2
Link to the live coding: http://bit.ly/antoncodeit-live-2
*/

function sudoku(grid) {
    const indexes = [];

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = grid[i][j];
            const boxIndex = Math.trunc(i / 3) * 3 + Math.trunc(j / 3);
            const rowItemIndex = `${value}.row${i}`;
            const colItemIndex = `${value}.col${j}`;
            const boxItemIndex = `${value}.box${boxIndex}`;

            if (!indexes.includes(rowItemIndex)) {
                indexes.push(rowItemIndex);
            }

            if (!indexes.includes(colItemIndex)) {
                indexes.push(colItemIndex);
            }

            if (!indexes.includes(boxItemIndex)) {
                indexes.push(boxItemIndex);
            }
        }
    }

    return indexes.length === 9 * 9 * 3;
}
