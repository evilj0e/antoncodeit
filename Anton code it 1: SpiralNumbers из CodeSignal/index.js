/* 
Construct a square matrix with a size N × N containing integers 
from 1 to N * N in a spiral order, starting from top-left and in
clockwise direction.

Link to the description: http://bit.ly/antoncodeit-description-1
Link to the live coding: http://bit.ly/antoncodeit-youtube
*/

function spiralNumbers(n) {
    const matrix = new Array(n).fill().map(_ => new Array(n).fill());
    let value = 1;
    let colStart = 0;
    let colEnd = n - 1;
    let rowStart = 0;
    let rowEnd = n - 1;

    while (colStart <= colEnd && rowStart <= rowEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            matrix[rowStart][i] = value++;
        }
        rowStart++;

        for (let i = rowStart; i <= rowEnd; i++) {
            matrix[i][colEnd] = value++;
        }
        colEnd--;

        for (let i = colEnd; i >= colStart; i--) {
            matrix[rowEnd][i] = value++;
        }
        rowEnd--;

        for (let i = rowEnd; i >= rowStart; i--) {
            matrix[i][colStart] = value++;
        }
        colStart++;
    }

    return matrix;
}
