function peakHeight(mountain) {

  const sizesOfField = [mountain.length, mountain[0].length];

  let isFullBoardChecked = false;
  let currentLevel = 1;
  let isEmptyBoard = true;

  while (!isFullBoardChecked) {
    isFullBoardChecked = true;
    for (let i = 0; i < sizesOfField[0]; i += 1) {
      for (let j = 0; j < sizesOfField[1]; j += 1) {
        let newValueCell = getValueOfCell([i, j], mountain, sizesOfField, currentLevel);

        if (newValueCell === '^') {
          isFullBoardChecked = false;
        }
        if(newValueCell !== ' ') {
          isEmptyBoard = false;
        }
        
        mountain[i][j] = newValueCell;
      }
    }
    currentLevel += 1;
  }

  return isEmptyBoard ? 0 : currentLevel - 1;
}

function getValueOfCell(cell, mountain, sizesOfField, currentLevel) {
  const closeCellsCoords = [[0,1], [0,-1], [1,0], [-1,0]];

  if (mountain[cell[0]][cell[1]] === '^') {
    const validCloseCells = closeCellsCoords.map((coordinates) => [cell[0] + coordinates[0], cell[1] + coordinates[1]])
                                            .filter((cell) => (cell[0] >= 0 && cell[1] >= 0) && (cell[0] < sizesOfField[0] && cell[1] < sizesOfField[1]));
    if (validCloseCells.length < 4) {
      return currentLevel;
    }

    const valuesOfValidCells = validCloseCells.map((cell) => mountain[cell[0]][cell[1]]);
    if (valuesOfValidCells.includes(currentLevel-1) || valuesOfValidCells.includes(' ')) {
      return currentLevel;
    }

  } 

  return mountain[cell[0]][cell[1]];
}
