/*
A bird flying high above a mountain range is able to estimate the height of the highest peak.

Can you?

Link to the description: http://bit.ly/antoncodeit-description-bird-mountain
Link to the live coding: http://bit.ly/antoncodeit-live-bird-mountain
*/

var peakHeight = function(mountain) {
    if (!mountain || !mountain.length) {
      return 0;
    }
    
    const h = mountain.length;
    const w = mountain[0].length;
    let max = 0;
    
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (mountain[i][j] === '^') {
          mountain[i][j] = 1;
          max = 1;
        } else {
          mountain[i][j] = 0;
        }
      }
    }
    
    let isTouched = true;
    let offset = 1;
    
    while (isTouched) {
      isTouched = false;
  
      const m = mountain;
      const nextMountain = mountain.map(row => row.slice());
    
      for (let i = offset; i < h - offset; i++) {
        for (let j = offset; j < w - offset; j++) {
          if (
            m[i][j] > 0 &&
            m[i][j] === m[i + 1][j] &&
            m[i][j] === m[i - 1][j] &&
            m[i][j] === m[i][j + 1] &&
            m[i][j] === m[i][j - 1]
          ) {
            nextMountain[i][j] += 1;
            max = Math.max(nextMountain[i][j], max);
            isTouched = true;
          }
        }
      }
      
      offset++;
      mountain = nextMountain;
    }
    
    return max; 
  }
