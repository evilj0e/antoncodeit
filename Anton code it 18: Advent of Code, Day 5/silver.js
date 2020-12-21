/*
You write a quick program to use your phone's camera to scan all of 
the nearby boarding passes (your puzzle input); perhaps you can 
find your seat through process of elimination.

Instead of zones or groups, this airline uses binary space partitioning 
to seat people. A seat might be specified like FBFBBFFRLR, where F means 
"front", B means "back", L means "left", and R means "right".

The first 7 characters will either be F or B; these specify exactly one 
of the 128 rows on the plane (numbered 0 through 127). Each letter tells 
you which half of a region the given seat is in. Start with the whole 
list of rows; the first letter indicates whether the seat is in the front 
(0 through 63) or the back (64 through 127). The next letter indicates 
which half of that region the seat is in, and so on until you're left 
with exactly one row.

Every seat also has a unique seat ID: multiply the row by 8, then add 
the column.

As a sanity check, look through your list of boarding passes. 
What is the highest seat ID on a boarding pass?

https://adventofcode.com/2020/day/5
*/
const data = `FFBBBFBLRL
BFFFBFBRRR
BFFFBFBLRL
BFFBFBBLRR`;

const tickets = data.split('\n');

const getGroupsByTicket = ticket => [
  ticket.substr(0, 7),
  ticket.substr(7, 3)
];

const getValueOfGroup = group => {
  let start = 0;
  let end = 2 ** group.length;

  for (let i = 0; i < group.length; i++) {
    const command = group[i];
    const middle = Math.floor((start + end) / 2);

    switch (command) {
      case 'F':
      case 'L':
        end = middle;
        break;
      case 'B':
      case 'R':
        start = middle;
        break;
      default:
    }
  }

  return start;
};

const getSeatIdByTicket = ticket => {
  const [row, column] = getGroupsByTicket(ticket);

  return getValueOfGroup(row) * 8 + getValueOfGroup(column);
};

const getMaxSeatIdByTickets = tickets => {
  const ids = tickets.map(getSeatIdByTicket);

  return Math.max(...ids);
};

console.log(getMaxSeatIdByTickets(tickets));
