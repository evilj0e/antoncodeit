/* Utils */

const pipe = (...fns) =>
  fns.reduce((a, b) =>
    (arg) => b(a(arg)))

const noop = x => x

/* Finish bounces */

const bounces = (boardSize, maxDices) =>
  Array(maxDices)
    .fill()
    .reduce((a, _, i) => {
      a[boardSize + i + 1] = boardSize - i - 1
      return a
    }, {})

/* Game step */

const move = dices => position =>
  position + dices

const teleport = teleportMap => position =>
  position in teleportMap
    ? teleport(teleportMap)(teleportMap[position])
    : position

const step = (dices, teleportMap) =>
  pipe(
    move(dices),
    teleport(teleportMap))

const gameStep = ({ dices, teleportMap, turn }) =>
  (position, i) =>
    (turn !== i
      ? noop
      : step(dices, teleportMap)
    )(position)

/* Interface */

const printStepResult = (win, gameover, turn, players) =>
  win
    ? `Player ${turn + 1} Wins!`
    : gameover
      ? 'Game over!'
      : `Player ${turn + 1} is on square ${players[turn]}`

/* */

module.exports = {
  gameStep,
  bounces,
  printStepResult,

  move,
  teleport
}
