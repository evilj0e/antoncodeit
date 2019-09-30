/*
Task

X-City has a big carnival every year. After the event, people
leave a lot of garbage at each intersection. To solve 
the problem, X-City decided to use one of the latest inventions, 
the "garbage bomb"". The bomb uses the most advanced quantum physics 
technology, and the blast wave produced by the explosion can 
completely remove all the garbage in the range, and will not 
produce any other adverse effects. After the bomb exploded, the shock 
wave spread in a square way, and the power of the bomb could spread 
to adjacent streets (we can assume that each street in X-City is 
the same distance).

For example:

  |   |  |   |  |   |
--+   +--+   +--+   +--
    A      B      C      If put the bomb to intersection A,
--+   +--+   +--+   +--  The garbages at A,B,D,E will be removed.
  |   |  |   |  |   |
--+   +--+   +--+   +--
    D      E      F      If put the bomb to intersection E,
--+   +--+   +--+   +--  The garbages at A,B,C,D,E,F,G,H,I will be removed.
  |   |  |   |  |   |
--+   +--+   +--+   +--
    G      H      I      If put the bomb to intersection H,
--+   +--+   +--+   +--  The garbages at D,E,F,G,H,I will be removed.
  |   |  |   |  |   |

Because of technical problems, X-City only made one such bomb. Therefore, 
we need to find the best place to launch the bomb, that the bomb 
can remove the most garbages.

Given the cityMap of X-City, a 2D integer array. Each number represents 
the amount of garbage at the intersection. Your task is to find how many 
intersections can be the best place to launch the bomb.

Input/Output

[input] 2D integer array cityMap

An array contains some non-negative integers.

[output] an integer

The numbers of the best position.

Link to the description: http://bit.ly/antoncodeit-description-5
Link to the live coding: http://bit.ly/antoncodeit-live-5
*/

function sumMatrix(i, j, matrix) {
    let sum = 0;

    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            sum += (matrix[x + i] && matrix[x + i][y + j]) || 0;
        }
    }

    return sum;
}

function bestPlaces(cityMap) {
    let max = -1;
    let awesomePlaces = 0;

    for (let i = 0; i < cityMap.length; i++) {
        for (let j = 0; j < cityMap[0].length; j++) {
            const sum = sumMatrix(i, j, cityMap);

            if (sum > max) {
                max = sum;
                awesomePlaces = 1;
            } else if (max === sum) {
                awesomePlaces += 1;
            }
        }
    }

    return awesomePlaces;
}
